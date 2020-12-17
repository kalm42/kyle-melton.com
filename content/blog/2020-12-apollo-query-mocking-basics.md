---
slug: /apollo-query-mocking-basics
templateKey: blog-post
title: Apollo Query Mocking Basics
description: How to setup basic apollo graphql query mocking for your jest
  tests. Copy and paste ready.
tags:
  - apollo
  - mock
  - jest
  - testing
  - graphql
thumbnail: /img/apollo-query-mocking-basics.png
date: 2020-12-14T19:57:43.522Z
---

I've written this blog for the same reason I've written every other blog post. I had to look this up. So now I'll have a quick access resource for it.

Ok first things first. The basic setup for testing a component that uses Apollo GraphQL Client.

## Basic setup for Apollo aware component testing

```javascript
import React from "react"
import { render } from "@testing-library/react"
import { MockedProvider } from "@apollo/react-testing"
import Component from "./Component"
import {
  mockQueryName1Generator,
  mockQueryName2Generator,
} from "../mock-query-name-generator"

describe("ComponentName", () => {
  it("should do stufff", () => {
    const mocks = [...mockQueryName1Generator(2), ...mockQueryName2Generator()]
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Component />
      </MockedProvider>
    )
  })
})
```

There's the basic structure. Now lets write the generators.

## Write a mock generator

```javascript
// mock-query-name-generator.js
import { QUERY_NAME } from "../queries"

export const mockQueryNameGenerator = (count = 1) => {
  return new Array(count).fill({
    request: { query: QUERY_NAME, variables: { someVariable: "the value" } },
    result: () => ({ data: { queryName: { expected: "return values" } } }),
  })
}
```

Now you can call a function to get an array of mocks. For queries that have 100+ lines of response data this makes the testing files a lot cleaner.

I generally will run the application in the browser and straight copy the real response into the mock. If the response includes any sensitive information I go through and sanitize the data to make it generic.
