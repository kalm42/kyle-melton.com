import React from "react"
import { graphql, StaticQuery } from "gatsby"
import ArticleBlock from "../ArticleBlock/ArticleBlock"

const LatestBlogs = props => {
  const {
    allMarkdownRemark: { edges: posts },
  } = props
  return (
    <div>
      <h1>Latest Blog Entries</h1>
      <ul>
        {posts.map(post => {
          const {
            node: {
              id,
              fields: { slug },
              frontmatter: {
                description,
                title,
                thumbnail,
                date,
                thumbnailAlt,
              },
            },
          } = post
          return (
            <ArticleBlock
              date={date}
              description={description}
              thumbnail={thumbnail}
              thumbnailAlt={thumbnailAlt}
              key={id}
              slug={slug}
              title={title}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default () => {
  return (
    <StaticQuery
      query={graphql`
        query LatestBlogs {
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 3
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  tags
                  templateKey
                  date
                  title
                  description
                  thumbnailAlt
                  thumbnail {
                    childImageSharp {
                      fluid(maxWidth: 1600) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                  date
                }
              }
            }
          }
        }
      `}
      render={data => <LatestBlogs {...data} />}
    />
  )
}
