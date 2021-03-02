---
slug: /matrial-ui-jest-snapshot-class-names
templateKey: blog-post
title: Getting Material-UI Class Names To Not Change For Snapshot Testing
description: It's an easy trick but one you'll be hard pressed to find. A
  colleague of mine is the one who actually found it. You can visit her here.
  I'm writing it here for my own sanity.
tags:
  - brewing
  - chemex
thumbnail: /img/getting-material-ui-class-names-to-not-change-for-snapshot-testing.png
thumbnailAlt: Close up shot of flowers in a meadow at the foot of a tree.
date: 2020-06-19T19:57:43.522Z
---

It's an easy trick but one you'll be hard pressed to find. A colleague of mine is the one who actually found it. You can visit her [here](https://linktr.ee/_natural_e). I'm writing it here for my own sanity.

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
