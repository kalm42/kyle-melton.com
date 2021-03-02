---
slug: /paginated-prisma-graphql
date: 2020-07-26T21:51:35.742Z
title: How to paginate a Prisma Graphql query with typescript
templateKey: blog-post
thumbnail: /img/how-to-paginate-a-prisma-graphql-query-with-typescript.png
thumbnailAlt: A book open to roadmap with a pair of reading glasses resting on the open pages.
description: How to paginate a thingy
tags:
  - brewing
  - chemex
---

TLDR; Add the meta data in the resolver and add a new type in graphql to return the meta data.

I shamelessly am taking this from a post on Prisma's old forum [here](https://v1.prisma.io/forum/t/adding-pagination-to-lists-on-objects/4354/2). I'm going to go over it in a little more detail and since I use typescript my examples will be in typescript.

## Things to do:

- Add two new types to our graphql type definitions
- Update the query graphql type definition
- Update the resolver

## New Type Defs

For this example I'll use posts as the data we're returning.

```graphql
type Post {
  id: String!
  slug: String!
  text: String!
  isPublished: Boolean!
}

type PaginatedPosts {
  nodes: [Post!]!
  meta: PaginatedPostsMeta!
}

type PaginatedPostsMeta {
  nodeCount: Int!
  pageCount: Int!
  pageCurrent: Int!
  nodesPerPage: Int!
}
```

You can see we add some types to wrap around our normal response of an array of posts.

## Update query

We need to update the query definition to return the new model we just added.

```graphql
posts(page: Int!): PaginatedPosts!
```

## Update Resolver

```typescript
import { Prisma } from "../prisma/generated/prisma-client"

interface PostsArgs {
  page: number
}

interface Context {
  db: Prisma
}

function posts(parent, args: PostsArgs, ctx: Context) {
  const { page } = args
  const PAGE_SIZE = 10
  const = {where: { isPublished: true }}

  return {
    nodes: ctx.db.posts({
      ...where,
      orderBy: "createdAt_DESC",
      first: PAGE_SIZE,
      skip: page * PAGE_SIZE,
    }),
    meta: async () => {
      const count = await ctx.db.templatesConnection(where).aggregate().count()

      return {
        nodeCount: count,
        pageCount: Math.ceil(count / PAGE_SIZE),
        pageCurrent: (page * PAGE_SIZE) / PAGE_SIZE,
        nodesPerPage: PAGE_SIZE,
      }
    }
  }
}
```
