---
slug: /migrating-from-cra-to-next
date: 2020-06-19T21:51:35.742Z
title: Migrating from CRA to Next
description: The hows whys and donts of switching.
tags:
  - css
  - html
  - grid
templateKey: "blog-post"
thumbnail: /img/migrating-from-cra-to-next.png
---

So I did it. I launched my side project. WHA? When I go to share this magnificant creation of mine on Facebook it just reads "React App" and not the custom headers I meticulously crafted with react-helmet! Well... I guess I really do need server side rendering. Time to switch to next...

I don't want to start up a whole new repo and change out everything just because the frame work is changing. I'll google how to do this. Top result in Google is ... drum roll please ... "make a new repo and move your components over". Le sigh.

Ok. Guess I'm doing this one on my own. I'm a good enough developer to do that right? Yeah, I've worked for 2 fortune 500 companies now, surely I can do this.

Ok dear readers join me as I fuck this up. A lot. Then end up with something I'm happy with.

Step 1? Eject CRA? Right? I'll need to change the build process for sure right?

Okay now next has these scripts.

```
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```

After ejecting my scripts look like this.

```
  "scripts": {
    "start": "node scripts/start.js",
    "build": "node scripts/build.js",
    "test": "node scripts/test.js",
    "clean": "rm -rf node_modules"
  },
```

Let's checkout the start script. A bunch of checks, and a server thing "webpack-dev-server". Lets see what happens I just hot swap this script for next.

I get the nextjs 404 page. I must not have root defined for next.

I added an index.ts file that imports my previous root file and exports it again as default.

It failed to compile. React-router-dom process is to blame. Next uses their own router, so I'm going to remove react-router-dom.

`yarn remove react-router-dom`

Now go through and replace any method used from react-router-dom with the next equivelent. I'll update this blog when I finish myself.
