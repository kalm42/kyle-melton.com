---
templateKey: blog-post
title: How to type event handlers with Typescript
description: Have you been writing Typescript not in a framework like React,
  Vue, Next, Angular, et al? Did you add an event listener only to get an error
  because the event is implicitly any? Here are your answers for what to type
  it.
tags:
  - typescript
thumbnail: /img/how-to-type-event-handlers-with-typescript.jpg
thumbnailAlt: Planner with pens
slug: how-to-type-event-handlers-with-typescript
date: 2021-04-11T17:17:01.379Z
---

Have you been writing Typescript not in a framework like React, Vue, Next, Angular, et al? Did you add an event listener only to get an error because the event is implicitly any? Here are your answers for what to type it. I'll update this as I stumble upon them.

The 'click' event handler uses 'MouseEvent'.

## Click Example

```html
<button>Click Me</button>

<script src="/foo.js">
  console.log('Lets just pretend our Typescript outputs to this file.')
</script>
```

```typescript
const button = document.querySelector('button');
button.addEventListener('click', function (event: MouseEvent) {
  // do stuff
}
```

The 'keydown' event handler uses 'KeyboardEvent'.

## Keydown Example

```html
<button>Press space or enter</button>

<script src="/foo.js">
  console.log('Lets just pretend our Typescript outputs to this file.')
</script>
```

```typescript
const button = document.querySelector('button');
button.addEventListener('keydown', function (event: KeyboardEvent) {
  // do stuff
}
```

Focus related events handler use 'FocusEvent'. Events like 'focus', 'focusin', 'blur', et al.

## Focus Example

```html
<button>Press space or enter</button>

<script src="/foo.js">
  console.log('Lets just pretend our Typescript outputs to this file.')
</script>
```

```typescript
const button = document.querySelector('button');
button.addEventListener('focus', function (event: FocusEvent) {
  // do stuff
}
```
