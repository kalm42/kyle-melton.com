---
slug: /matrial-ui-jest-snapshot-class-names
date: 2020-06-19T19:57:43.522Z
title: Getting Material-UI Class Names To Not Change For Snapshot Testing
templateKey: blog-post
thumbnail: /img/getting-material-ui-class-names-to-not-change-for-snapshot-testing.png
description: desc
tags:
  - brewing
  - chemex
---

It's an easy trick but one you'll be hard pressed to find. A colleague of mine is who actually found it. I'm writing it here for my own sanity.

The trick: (copied from Material-Ui documentation)

```javascript
const useStyles = makeStyles(
  {
    root: {
      /* … */
    },
    label: {
      /* … */
    },
    outlined: {
      /* … */
      "&$disabled": {
        /* … */
      },
    },
    outlinedPrimary: {
      /* … */
      "&:hover": {
        /* … */
      },
    },
    disabled: {},
  },
  { name: "MuiButton" }
)
```

The page is [here](https://material-ui.com/styles/advanced/#with-material-ui-core).

By adding a name that begins with "Mui" the class name will change from non-deterministic (aka they append a number at the end of the class name) to deterministic (aka they don't append a number at the end of the class name).

That's it.
