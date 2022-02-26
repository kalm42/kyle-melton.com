---
templateKey: blog-post
title: How to make the Sign in with Apple Button
description: Since Apple doesn't make it completely obvious how to compose their
  "Sign in with Apple" button I made a blog post for it. I am using NextJs 12,
  and Tailwind 3 to run this.
tags:
  - nextjs
  - tailwind
  - apple
  - custom-fonts
  - ""
thumbnail: /img/how-to-make-the-sign-in-with-apple-button.png
thumbnailAlt: How to make the sign in with Apple button
date: 2022-02-26T22:40:25.713Z
---
You might want to take a look at Apple’s [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple/overview/buttons/) for creating a custom Sign In with Apple button.

Go [here](https://developer.apple.com/design/resources/) and grab the apple logo. The logos are about 1/2 way down just above the Fonts section at the time I’m writing this. Your experience may be different. Download the PNG, PDF, SVG. Open the DMG file. Pull out the svg files. Now you would think that here you would be able to get Apple's San Francisco font here for display on the web since I'm sure that's the font they would like you to use but no. I eventually found a link to it [here](https://stackoverflow.com/a/36412339/1804634). StackOverflow to the rescue once again. I downloaded the file because I don't trust that URL to stay working.

Now we have the font file, we have the svg files. We're ready to start assembling.

I found [this](https://github.com/vercel/next.js/discussions/25389) discussion on how to best self host files with Next.

```CSS
// global.css
@font-face {
    font-family: "SanFrancisco"; // no space so tailwind will be happy
    font-weight: 400;
    src: url("/apple/sanfranciscodisplay-regular-webfont.woff");
}
```

I put the font file inside of `public` under a folder named apple. I don't expect to be hosting a bunch of custom font files. If you will be hosting a lot of font files you might want to go with a different approach.

Ok, so now our application can use the San Francisco font. Let's make a component to render the Sign in with Apple button. I like putting my components in their own folder so that all of the files related to the component are in one spot. When the component isn't needed anymore you can be sure that all the related files are deleted.

```ts
// component/SignInWithApple/SignInWithAppple.tsx
import React from "react"
import Head from "next/head"
import Link from "next/link"
import AppleIconLarge from "./siwa-left-aligned-white-large.svg"
import AppleIconMedium from "./siwa-left-aligned-white-medium.svg"
import AppleIconSmall from "./siwa-left-aligned-white-small.svg"

interface SignInWithAppleProps {
  signinUrl: string
}

const SignInWithApple = (props: SignInWithAppleProps) => {
  const { signinUrl } = props
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/apple/sanfranciscodisplay-regular-webfont.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </Head>
      {/* mobile - default */}
      <div className="block md:hidden">
        <Link href={signinUrl}>
          <a className="bg-black text-white block w-max rounded-full font-[SanFrancisco] m-auto">
            <span className="flex items-center h-[44px] text-[19px] px-12">
              <AppleIconSmall className="inline" />
              Sign in with Apple
            </span>
          </a>
        </Link>
      </div>
      {/* tablet */}
      <div className="hidden md:block xl:hidden">
        <Link href={signinUrl}>
          <a className="bg-black text-white block w-max rounded-full font-[SanFrancisco] m-auto">
            <span className="flex items-center h-[44px] text-[19px] px-12">
              <AppleIconMedium className="inline" />
              Sign in with Apple
            </span>
          </a>
        </Link>
      </div>
      {/* Desktop */}
      <div className="hidden xl:block">
        <Link href={signinUrl}>
          <a className="bg-black text-white block w-max rounded-full font-[SanFrancisco] m-auto">
            <span className="flex items-center h-[56px] text-[24px] px-12">
              <AppleIconLarge className="inline" />
              Sign in with Apple
            </span>
          </a>
        </Link>
      </div>
    </>
  )
}

export default SignInWithApple
```

Nothing particularly weird in this file. Just thought I'd give you the specifics.

```ts
// component/SignInWithApple/index.ts
import SignInWithApple from "./SignInWithApple"

export default SignInWithApple
```

We import the component and re-export again to make our import statements more concise. 
