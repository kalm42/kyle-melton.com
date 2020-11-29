import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Tags = props => {
  const {
    pageContext: { tag },
    data: {
      allMarkdownRemark: { edges, totalCount },
      site: {
        siteMetadata: { title },
      },
    },
  } = props
  const posts = edges
  const tagHeader = `${totalCount} post${
    totalCount ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <SEO title={`${tag} | ${title}`} />
      <section>
        <h3>{tagHeader}</h3>
        <ul>
          {posts.map(post => {
            const {
              fields: { slug },
              frontmatter: { title },
            } = post.node
            return (
              <li key={slug}>
                <Link to={slug}>
                  <h2>{title}</h2>
                </Link>
              </li>
            )
          })}
        </ul>
        <p>
          <Link to="/tags">Browse all tags</Link>
        </p>
      </section>
    </Layout>
  )
}

export default Tags

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
