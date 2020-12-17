const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

function getTags(posts) {
  let tags = []
  posts.forEach(edge => {
    if (
      edge &&
      edge.node &&
      edge.node.frontmatter &&
      edge.node.frontmatter.tags &&
      edge.node.frontmatter.templateKey === "blog-post"
    ) {
      tags = tags.concat(edge.node.frontmatter.tags)
    }
  })

  tags = tags.reduce((acc, tag) => {
    if (!acc.includes(tag)) {
      acc.push(tag)
    }
    return acc
  }, [])

  return tags
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      // TODO: Report build errors to Sentry
      result.errors.forEach(e => console.error(e.toString()))
    }

    // Make pages for each post
    const posts = result.data.allMarkdownRemark.edges
    if (posts && posts.length) {
      posts.forEach(edge => {
        const id = edge.node.id
        createPage({
          path: edge.node.fields.slug,
          tags: edge.node.frontmatter.tags,
          component: path.resolve(
            `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
          ),
          context: {
            id,
          },
        })
      })
    }

    // Make pages for each tags
    const tags = getTags(posts)
    if (tags && tags.length) {
      tags.forEach(tag => {
        const tagSlug = tag
          .replace(/([a-z])([A-Z])/g, "$1-$2")
          .replace(/\s+/g, "-")
          .toLowerCase()
        const tagPath = `/tags/${tagSlug}`

        createPage({
          path: tagPath,
          component: path.resolve(`src/templates/tags.js`),
          context: {
            tag,
          },
        })
      })
    }

    // Make pages for each paged blog list
    const blogPosts = posts.filter(
      post => post.node.frontmatter.templateKey === "blog-post"
    )
    const postsPerPage = 15
    const numPages = Math.ceil(blogPosts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/blog` : `/blog/${index + 1}`,
        component: path.resolve(`./src/templates/blog-list-template.js`),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
