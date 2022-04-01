---
templateKey: blog-post
title: Mocking Higher Order Components (HOC) and Context
description: My generic mocking code for Higher Order Components (HOC) and
  Context. I ran into this issue and I had resolved it before. Trying to find it
  a second time has told me I needed to write a blog entry for it.
tags:
  - HOC
thumbnail: /img/mocking-hoc-and-context.png
thumbnailAlt: An aerial view of a big city.
slug: mocking-higher-order-components-hoc-and-context
date: 2021-02-08T19:03:32.643Z
---

My generic mocking code for Higher Order Components (HOC) and Context. I ran into this issue and I had resolved it before. Trying to find it a second time has told me I needed to write a blog entry for it.

# First Up Higher Order Components (HOC)

```javascript
jest.mock("@HOC", () => {
  return {
    withHOC: (Component) => {
      return (props) => {
        return <Component newProp={jest.fn} {...props} />;
      };
    },
  };
});
```

A quick explanation. `"@HOC"` is the external or internal package that you're mocking. `withHOC` is the name of the Higher Order Component composition function. `Component` is the component to wrap in the mocked HOC. `props` are the normal props the component would get. `newProp` refers to any new props the HOC would add that you need to mock.

# Next is the Context

```javascript
// Don't
```

It's better to just bring the context into the test. The closer the test is to how user's interact with your application the more confidence you can have that your tests work. Remember to test functionality not implementation.

Example:

If I click this button then that element shows.

Not:

This element has these props.
