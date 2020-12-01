---
slug: /how-to-make-a-css-gradient
title: How to Make a CSS Gradient
templateKey: blog-post
date: 2019-04-30T15:04:10.000Z
thumbnail: /img/how-to-make-a-css-gradient.png
description: desc
tags:
  - brewing
  - chemex
---

# How to Make a CSS Gradient

![How to make a CSS Gradient](images/2019-04-30-how-to-make-a-css-gradient.png)

The super simple top to bottom gradient.

```
.linear-gradient {
  background: linear-gradient(#F23847, #F23847);
}
```

Change the midpoint of the gradient.

```
.linear-gradient {
  background: linear-gradient(#F23847, 10%, #F23847);
}
```

Change the direction of the gradient. First, from left to right.

```
.linear-gradient {
  background: linear-gradient(to right, #F23847, #F23847);
}
```

From left to right.

```
.linear-gradient {
  background: linear-gradient(to left, #F23847, #F23847);
}
```

Diagonal. Holy moly.

```
.linear-gradient {
  background: linear-gradient( to bottom right, #F23847, #F23847);
}
```

With numbers now!

```
.linear-gradient {
  background: linear-gradient(45deg, #F23847, #F23847);
}
```

More than one color. Holy fuck! Watch out now.

```
.linear-gradient {
  background: linear-gradient(#F23847, #F23847, #F2BBBF, #400711, #F28888);
}
```

Time to get ridiculous.

```
.linear-gradient {
  background: linear-gradient(45deg, #F23847 28px, #F23847 10%, #F2BBBF 0.33rem, #400711 calc(1vw), #F28888);
}
```

Hard lined gradients. Why? Because fuck it why not?

```
.linear-gradient {
  background: linear-gradient(#F23847 20%, #F23847 20% 40%, #F2BBBF 40% 60%, #400711 60% 80%, #F28888 80%);
}
```

## Resources

- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
