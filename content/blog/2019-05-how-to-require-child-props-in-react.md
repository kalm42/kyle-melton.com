---
slug: "/how-to-require-child-props-in-react"
title: "How to Require Child Props in React"
templateKey: blog-post
date: 2019-05-06T15:04:10.000Z
thumbnail: /img/how-to-require-child-props-in-react.png
description: desc
tags:
  - brewing
  - chemex
---

# How to Require Child Props in React

![How to require child props in react](images/2019-05-06-how-to-require-child-props-in-react.png)

You have a component and the child of that component needs to be one or more HTML elements. How do you properly set the prop types for this?

```
static propTypes =  {
  Children: PropTypes.node.isRequired,
}
```

Or

```
static propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}
```

The first will require that there is a single node element as the child of the component. The second requires that there is one or more node elements as the child of the component.

I hope this helps. If it did, let me know.

## Resources

- [Stack Overflow](https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children)
- [React Documentation](https://reactjs.org/docs/typechecking-with-proptypes.html)
