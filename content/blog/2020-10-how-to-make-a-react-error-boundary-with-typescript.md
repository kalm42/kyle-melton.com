---
slug: /react-error-boundary-with-typescript
date: 2020-10-15T21:51:35.742Z
title: How to make a React Error Boundary with Typescript
templateKey: blog-post
thumbnail: /img/how-to-make-a-react-error-boundary-with-typescript.png
description: descr
tags:
  - brewing
  - chemex
---

I found this over [here](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/error_boundaries/) and I'm shamelessly copying it here for quick reference.

```javascript{numberLines: true}
import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Sorry.. there was an error</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

For more fun maybe pass in a component for it to default to. idk go nuts.
