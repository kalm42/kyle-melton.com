---
templateKey: blog-post
title: How to Setup Sign in with Apple
description: I have a nextjs app with next-auth and you're coming along the ride
  of setting up Sign in with Apple oauth.
tags:
  - next
  - nextjs
  - react
  - reverseproxy
  - nginx
  - apple
  - sign-in-with-apple
  - oauth
  - jwt
thumbnail: /img/how-to-setup-signin-with-apple.png
thumbnailAlt: Theatrical detective with the title text
date: 2022-02-20T17:35:36.756Z
---
Here before you is a record of how I configured sign in with Apple for a side project I have. This, like all my posts, is a record for myself so that I can find everything again. There are a lot of links in here. I strive to cite all my sources. I don't know this stuff off the top of my head so I will show you where I got everything from.

## Front end-ish setup

Install next-auth. Yeah, I know. I'm not a fan of grabbing some dependency to solve an issue but in this case it makes things a lot easier. At least I think it did.

```zsh
npm install next-auth
```

This package should automate a lot of the oauth 2.0 / oidc processes for us. Still we have a lot of pieces to put into place.

We're going to assume for now that this will work and start using the session data in the front end. We're doing this for a couple reasons. One is to test that it works. The other is because we'll have to do it at some point anyway.

To expose session and auth data to the front end so we start with `_app.tsx` (yes, typescript we're not monsters).

```typescript
// pages/_app.tsx
import { SessionProvider } from "next-auth/react"
import "../styles/globals.css"
import type { AppProps } from "next/app"

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<SessionProvider session={session}>
			<Component {...pageProps} />
		</SessionProvider>
	)
}
```

To have the back end respond to sign in, sign out, and oauth callbacks create this file.

```typescript
// pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth"
import AppleProvider from "next-auth/providers/apple"

export default NextAuth({
	providers: [
		AppleProvider({
		    clientId: process.env.APPLE_CLIENT_ID!,
		    clientSecret: process.env.APPLE_CLIENT_SECRET!,
		}),
	],
})
```

Edit your `.env.local` file. You need to add an `APPLE_CLIENT_ID` and `APPLE_CLIENT_SECRET`.

```
APPLE_CLIENT_ID=
APPLE_CLIENT_SECRET=
```
## Getting The Client Id and Secret

This is the first big hurdle. Now we need our Apple client id, and a secret. We have to get that from Apple. So go sign up for an Apple Developer account and pay our lord and master oh Apple their $99 a year taxes for our pleasure of being able to use their api's.

Instructions on how to enroll can be found [here](https://developer.apple.com/programs/enroll/). Do that then come back here.

### You've signed up

Hey! You made it. Awesome! Now the fun-steration begins.

You have no idea how insane this name change thing made me. When you see "client id" from the Authentication perspective they mean the service id from the Apple point of view. If you don't understand that's fine, we're about to dive into this cluster.

To make a Service ID it must be a service for an application so you must first make an Application. Don't worry we're not making a full blown iOS/MacOS application. We're just making a kinda placeholder for one.

### Register App ID

* Go to [Certificates, Identifiers & Profiles](https://developer.apple.com/account/resources)
* Go to Identifiers
* Ensure you're on App IDs
* Add a new one.
* Type is App
* Register
  * Description: You know what this is.
  * App ID: Use reverse domain style. aka `com.example`
  * Check sign in with apple
  * Edit
    * Enable as primary App ID
    * Add notification endpoint `https://www.example.com/api/auth/apple/`

### Register Services ID aka Client ID

Still in that "Certificates, Identifiers & Profiles" on the left menu go to Identifiers, on the right drop down choose Services ID. Make a new identifier.

Description: You know what to do.
Identifier: reverse domain style `com.example.client`

Enable Sign in with Apple. Click configure. 

Now here's the that they don't tell you. Domains gets only the domain. No protocol. Not `https://www.example.com` but `example.com`. The return url for next-auth is `https://www.example.com/api/auth/callback/apple`.

Now you have the first part. You have the client id. Update your `.env.local` file with the client id aka service id.

```
APPLE_CLIENT_ID=com.example.client
```

### Verify your domain with Apple

**You might not have to do this step.** Let me know on twitter or make a PR for this post if you don't. In my trial/error process I did this so I'm leaving it in just in case it was necessary.

From the Identifiers screen change from AppID to Merchant. Add a new merchant. Same process. You know what a description is and the same reverse domain style. Yes it needs to be unique, maybe `com.example.merchant`.

Follow the instructions to verify. To complete this your nextjs project must be live on the web. I was trying to avoid this but /shrug/. 

### Get key from apple

On the Certificates, Identifiers & Profiles click Keys. Add a new key. Give it a good description. Associate it with your app. Check Sign in with Apple. Download the key.

Guard this key with your frickin' life. Ok it's not that serious, but like don't commit it into git. Follow the Gandalf protocol. Keep it secret; keep it safe. You're going to use it in a second.

### Apple Client Secret

"Apple requires the client secret to be a JWT." [Source](https://next-auth.js.org/providers/apple) If you don't know - A [**J**SON **W**eb **T**oken](https://jwt.io/) is an open industry standard method for representing claims securely between two parties. As a side note, the "secure" part of that shouldn't be relied on heavily. In general do not consider JWTs to be secure. Do not store sensitive data in one. Are they more secure than a cookie. Maybe, there's some debate on that but we're not here for that.

There are instructions [here](https://developer.apple.com/documentation/sign_in_with_apple/generate_and_validate_tokens#3262048) on how to create the client secret. JWTs expire that means we're going to have make this JWT over, and over again. To do this we're going to write a script to do this for us. Let me know if you know a way to automate this. It's a future improvement I'd like to make but don't want to waste a lot of energy to fix that right now.

```javascript
// apple-gen-secret.js
const nJwt = require("njwt")
const dotenv = require("dotenv")
const { createPrivateKey } = require("crypto")

dotenv.config({ path: ".env.local" })

const MINUTE = 60
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR
const MONTH = 30 * DAY

const privateKey = createPrivateKey(``) // Copy from the cert you downloaded from Apple
const now = Math.ceil(Date.now() / 1000)
const expires = now + MONTH * 3

const claims = {
	iss: process.env.APPLE_TEAM_ID,
	iat: now,
	exp: expires,
	aud: "https://appleid.apple.com",
	sub: process.env.APPLE_CLIENT_ID,
}

const jwt = nJwt.create(claims, privateKey, "ES256")
jwt.header.kid = kid

console.log(jwt.compact())
```

This was cobbled together from [this gist](https://gist.github.com/balazsorban44/09613175e7b37ec03f676dcefb7be5eb) and [this blog post](https://developer.okta.com/blog/2018/11/13/create-and-verify-jwts-with-node). I went with the packages from the Okta blog post because Okta does authentication and if their employees vouch for nJwt that's good enough for me. To complete the script you're going to need to copy the key you got from Apple. Here's the command I used to do that.

```zsh
pbcopy < ~/Downloads/AuthKey_THESE-CHARACTERS-ARE-IMPORTANT.p8
```

I think pbcopy is short for Paste Bin Copy. Essentially it puts the contents of a text file into the clipboard. Now you can paste it into the `createPrivateKey(PASTE HERE)` line. Again, do not commit your key. It's here, temporarily just to run the script.

You see in the script that I've added another entry into the `.env.local` file.

```
APPLE_TEAM_ID=THE-RANDOM-CHARACTERS-FROM-YOUR-KEY-FILE
```

Yes, those random characters from your key file. You can also find the characters next to your name in the Apple "Certificates, Identifiers & Profiles" page. It'll be something like `Your Name - 10CHARACTERS` (yes I know that's 12 just ignore that).

Run this script with `node apple-gen-secret.js` or add it to the `package.json` scripts section for future use. Either way, run the script. Copy the console output and paste it into `.env.local` as the value for `APPLE_CLIENT_SECRET`.

#### JWT Deep Dive

A longer explanation for the JWT steps in the script. In the order from the script.

1. iss - issuer: This is the 10 characters next to your name [here](https://developer.apple.com/account/resources/certificates/list). This is you. You are issuing the JWT.

2. iat - Issued at: registered claim indicates the time at which you generated the client secret, in terms of the number of *seconds* since Epoch, in UTC. Seconds is important. Javascript makes timestamps in the number of milliseconds since Epoch. That's why we divide by 1000 and then round.

3. exp - Expires: We take the current time stamp in seconds and add 3 months of seconds to it.

4. aud - Audience: Who are you talking with. `https://appleid.apple.com` Apple, duh.

5. sub - Subject: What are we talking about. The client_id aka Services ID `com.example.client`.

Those are all apart of the claim aka body of the JWT. We need to adjust one thing in the JWT header.

1. kid - Key ID. Which key was used to sign (aka encrypt) the JWT. This 10 characters on the end of the file name from the key you downloaded from apple. This will let Apple know how to decrypt the JWT.

[JWT.io](https://jwt.io) is a great resource for JWTs.

### Last NextJs steps

NextJs want's a couple of environmental variable to be happy.

```
NEXTAUTH_URL=https://www.example.com
NEXTAUTH_SECRET= // we're going to make this right now
```

To make the NEXTAUTH_SECRET run this command.

```zsh
openssl rand -base64 32
```

Copy the output and paste it as the value for `NEXTAUTH_SECRET`.

Your `.env.local` file should now have these entries.

```
APPLE_CLIENT_ID=com.example.client
APPLE_CLIENT_SECRET=THE-BIG-JWT-STRING
APPLE_TEAM_ID=THE-10-Characters-next-to-your-name
NEXTAUTH_URL=https://www.example.com
NEXTAUTH_SECRET=WHAT-YOU-JUST-PASTED
```

## Server setup

Per the [Next-Auth docs](https://next-auth.js.org/providers/apple) Apple requires a https connection. That means localhost or 0.0.0.0 is not going to work. But oh, we are programmers and we can wield magic (not magick). So we're going to edit our hosts file and make our localhost respond to our domain. 

I’m only including the Mac/Linux instructions here because I don’t develop on windows. Windows is for games only.

This is a two part process. I honestly should break this out into its own post.

```zsh
sudo vi /etc/hosts
```

You probably have something like this unless you've edited your hosts file before or Mac changes it.

```
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
##
127.0.0.1       localhost
255.255.255.255 broadcasthost
::1             localhost
```

We need to add two lines. One for the IPv4 and the IPv6. Safari and Firefox require both for this to work.

```
127.0.0.1                example.com www.example.com
0:0:0:0:0:FFFF:0A00:0117 example.com www.example.com
```

Now if you go to example.com nothing will happen. But why?

When your computer attempts to go to `https://www.example.com` it looks at the hosts file, sees an ip address for it and requests the html from that ip address at the default port `443` for https, and `80` for http. That is `https://www.example.com` is now the same as `https://127.0.0.1:443`.

A side note, we do this because `https://127.0.0.1:443` is always invalid. Localhost cannot be secure, ever, so the browser does not let you do `https://127.0.0.1:443` you must edit the hosts file to get the 's'.

Back to the point. Your application is running at `http://localhost:3000` aka `http://127.0.0.1:3000`. We need to setup a local server watching ports 80 and 443 and reverse proxy those ports to port 3000 so our application can respond to requests.

### Setting up Nginx as a local reverse proxy

I found [this blog post](https://kirillplatonov.com/posts/simple-reverse-proxy-on-mac-with-nginx/) that helped me. Here are the steps from that post that I followed.

```zsh
brew install nginx
```

After a while you have nginx installed. Now we need to start the service.

```zsh
brew services start nginx
```

Yay. You now have nginx installed, and the service running. Now to configure it to reverse proxy from a domain to localhost. To do that we need to edit the `nginx.conf` file. Let's find out where it is.

```zsh
nginx -t
// Output
// nginx: the configuration file /opt/homebrew/etc/nginx/nginx.conf syntax is ok
// nginx: configuration file /opt/homebrew/etc/nginx/nginx.conf test is successful
```

The file location from the blog post does not match my install and many other websites had it wrong too. So use that command to find out where yours is. Maybe it's in the same spot from the blog, maybe not. Let's duplicate the file just in case we blow something up we can reset.

```zsh
cp /opt/homebrew/etc/nginx/nginx.conf /opt/homebrew/etc/nginx/nginx.backup.conf
```

[This gist](https://gist.github.com/unixcharles/949271) was very useful in updating the nginx config. I don't like copying full config files I much rather pick and choose which lines I update. For brevity I have removed all the comments from the conf file.

```
# /opt/homebrew/etc/nginx/nginx.conf
worker_processes  1;

events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;

    keepalive_timeout  65;

    server {
        listen       80;
        server_name  localhost;

        location / {
	    proxy_pass          http://localhost:3000;
            proxy_set_header    Host              $host;
	    proxy_set_header    X-Real-IP         $remote_addr;
            proxy_set_header    X-Forwarded-For   $proxy_add_x_forwarded_for;
	    proxy_set_header    X-Client-Verify   SUCCESS;
	    proxy_set_header    X-Client-DN       $ssl_client_s_dn;
	    proxy_set_header    X-SSL-Subject     $ssl_client_s_dn;
	    proxy_set_header    X-SSL-Issuer      $ssl_client_i_dn;
	    proxy_set_header    X-Forwarded-Proto http;
	    proxy_read_timeout 1800;
	    proxy_connect_timeout 1800;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

    server {
        listen       443 ssl;
        server_name  localhost;

        ssl_certificate      server.crt;
        ssl_certificate_key  server.key;
	ssl_dhparam          server.pem;

        ssl_session_timeout  5m;

	ssl_protocols  SSLv2 SSLv3 TLSv1;
        ssl_ciphers  ALL:!ADH:!EXPORT56:RC4+RSA:+HIGH:+MEDIUM:+LOW:+SSLv2:+EXP;
        ssl_prefer_server_ciphers  on;

        location / {
	    proxy_pass          http://localhost:3000;
            proxy_set_header    Host              $host;
            proxy_set_header    X-Real-IP         $remote_addr;
            proxy_set_header    X-Forwarded-For   $proxy_add_x_forwarded_for;
            proxy_set_header    X-Client-Verify   SUCCESS;
            proxy_set_header    X-Client-DN       $ssl_client_s_dn;
            proxy_set_header    X-SSL-Subject     $ssl_client_s_dn;
            proxy_set_header    X-SSL-Issuer      $ssl_client_i_dn;
            proxy_set_header    X-Forwarded-Proto http;
            proxy_read_timeout 1800;
            proxy_connect_timeout 1800;
        }
    }
    include servers/*;
}
```

If you copy and paste this in it will still not work. We need to make the SSL certificates. I used some of the commands [found here](https://www.digitalocean.com/community/tutorials/how-to-create-a-self-signed-ssl-certificate-for-nginx-on-debian-10). I will repeat them here so you don't have to guess.

```zsh
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
-keyout /opt/homebrew/etc/nginx/server.key \
-out /opt/homebrew/etc/nginx/server.crt
```

This will make our certificate and the private key for it. The original file referenced a `.pem` file which appears to be a Diffie-Hellman related file. To make that file, because why not, use this command.

```zsh
sudo openssl dhparam -out /opt/homebrew/etc/nginx/server.pem 4096
```

Now everything should be in place. Run this to test the config file.

```zsh
nginx -t
```

No errors? Good. Restart nginx for it to take effect.

```zsh
nginx -s reload
```

Now you should be good to go.