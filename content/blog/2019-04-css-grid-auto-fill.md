---
date: 2019-04-09T15:04:10.000Z
description: "The quick copy and paste CSS code for a repeated auto-fitting content."
slug: "/css-grid-fill"
tags:
  - css
  - html
  - grid
templateKey: "blog-post"
thumbnail: /img/how-to-fill-in-css-grid-with-auto-fitting-content.png
thumbnailAlt: Black and white shaddowed grid surface.
title: "How to Fill In CSS Grid with Auto-Fitting Content"
---

# How to Fill In CSS Grid with Auto-Fitting Content

This is one of those things that I'm always looking up and it might take two google clicks which is one click too many. Hopefully with it on my blog it'll be easier for me to find it.

```css
grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
```

## Quick Breakdown

`grid-template-columns` => Do what I say into columns.

`repeat(this-many-times, do-this)` => First argument is how many times to do the second argument.

This one messess me up. For some reason my brain always wants to reverse these two. I want to `(do-this, this-many-times)`.

Now, `auto-fill`, or `auto-fit`, Sara Soueidan said it best so I'm going to quote her.

> `auto-fill` FILLS the row with as many columns as it can fit. So it creates implicit columns whenever a new column can fit, because it's trying to FILL the row with as many columns as it can. The newly added columns can and may be empty, but they will still occupy a designated space in the row.

> `auto-fit` FITS the CURRENTLY AVAILABLE columns into the space by expanding them so that they take up any available space. The browser does that after FILLING that extra space with extra columns (as with auto-fill ) and then collapsing the empty ones.

Read her full article over on CSS Tricks [here](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/)

`minmax(min, max)` This one is self explanatory. At least it should be. `min` is the smallest the grid-item can go, and `max` is the largest the grid-item can go.

Anyway, I hope this helps. If it did, let me know.

## Related Resources

- [CSS Grid - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid)
- [CSS Repeat - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat)
- [Auto-Fill vs Auto-Fit](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/)
- [CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
