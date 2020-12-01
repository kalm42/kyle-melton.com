import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "./blog-list-template.module.css"
import ArticleBlock from "../components/ArticleBlock/ArticleBlock"

const BlogListTemplate = props => {
  const {
    data: {
      allMarkdownRemark: { edges: posts },
    },
  } = props
  return (
    <Layout>
      <h1>Blog Entries</h1>
      <ul className={styles.blog_list_template__container}>
        {!!posts[0] && (
          <ArticleBlock
            date={posts[0].node.frontmatter.date}
            description={posts[0].node.frontmatter.description}
            slug={posts[0].node.fields.slug}
            thumbnail={posts[0].node.frontmatter.thumbnail}
            title={posts[0].node.frontmatter.title}
            large
          />
        )}
        {!!(posts[1] && posts[2]) ? (
          <>
            <ArticleBlock
              date={posts[1].node.frontmatter.date}
              description={posts[1].node.frontmatter.description}
              slug={posts[1].node.fields.slug}
              thumbnail={posts[1].node.frontmatter.thumbnail}
              title={posts[1].node.frontmatter.title}
              half
            />
            <ArticleBlock
              date={posts[2].node.frontmatter.date}
              description={posts[2].node.frontmatter.description}
              slug={posts[2].node.fields.slug}
              thumbnail={posts[2].node.frontmatter.thumbnail}
              title={posts[2].node.frontmatter.title}
              half
            />
          </>
        ) : (
          !!posts[1] && (
            <ArticleBlock
              date={posts[1].node.frontmatter.date}
              description={posts[1].node.frontmatter.description}
              slug={posts[1].node.fields.slug}
              thumbnail={posts[1].node.frontmatter.thumbnail}
              title={posts[1].node.frontmatter.title}
              large
            />
          )
        )}
        {!!posts[3] && (
          <ArticleBlock
            date={posts[3].node.frontmatter.date}
            description={posts[3].node.frontmatter.description}
            slug={posts[3].node.fields.slug}
            thumbnail={posts[3].node.frontmatter.thumbnail}
            title={posts[3].node.frontmatter.title}
            large
          />
        )}
        {!!(posts[4] && posts[5] && posts[6]) ? (
          <>
            <ArticleBlock
              date={posts[4].node.frontmatter.date}
              description={posts[4].node.frontmatter.description}
              slug={posts[4].node.fields.slug}
              thumbnail={posts[4].node.frontmatter.thumbnail}
              title={posts[4].node.frontmatter.title}
            />
            <ArticleBlock
              date={posts[5].node.frontmatter.date}
              description={posts[5].node.frontmatter.description}
              slug={posts[5].node.fields.slug}
              thumbnail={posts[5].node.frontmatter.thumbnail}
              title={posts[5].node.frontmatter.title}
            />
            <ArticleBlock
              date={posts[6].node.frontmatter.date}
              description={posts[6].node.frontmatter.description}
              slug={posts[6].node.fields.slug}
              thumbnail={posts[6].node.frontmatter.thumbnail}
              title={posts[6].node.frontmatter.title}
            />
          </>
        ) : !!(posts[4] && posts[5]) ? (
          <>
            <ArticleBlock
              date={posts[4].node.frontmatter.date}
              description={posts[4].node.frontmatter.description}
              slug={posts[4].node.fields.slug}
              thumbnail={posts[4].node.frontmatter.thumbnail}
              title={posts[4].node.frontmatter.title}
              half
            />
            <ArticleBlock
              date={posts[5].node.frontmatter.date}
              description={posts[5].node.frontmatter.description}
              slug={posts[5].node.fields.slug}
              thumbnail={posts[5].node.frontmatter.thumbnail}
              title={posts[5].node.frontmatter.title}
              half
            />
          </>
        ) : (
          !!posts[4] && (
            <ArticleBlock
              date={posts[4].node.frontmatter.date}
              description={posts[4].node.frontmatter.description}
              slug={posts[4].node.fields.slug}
              thumbnail={posts[4].node.frontmatter.thumbnail}
              title={posts[4].node.frontmatter.title}
              large
            />
          )
        )}
        {!!(posts[7] && posts[8] && posts[9]) ? (
          <>
            <ArticleBlock
              date={posts[7].node.frontmatter.date}
              description={posts[7].node.frontmatter.description}
              slug={posts[7].node.fields.slug}
              thumbnail={posts[7].node.frontmatter.thumbnail}
              title={posts[7].node.frontmatter.title}
            />
            <ArticleBlock
              date={posts[8].node.frontmatter.date}
              description={posts[8].node.frontmatter.description}
              slug={posts[8].node.fields.slug}
              thumbnail={posts[8].node.frontmatter.thumbnail}
              title={posts[8].node.frontmatter.title}
            />
            <ArticleBlock
              date={posts[9].node.frontmatter.date}
              description={posts[9].node.frontmatter.description}
              slug={posts[9].node.fields.slug}
              thumbnail={posts[9].node.frontmatter.thumbnail}
              title={posts[9].node.frontmatter.title}
            />
          </>
        ) : !!(posts[7] && posts[8]) ? (
          <>
            <ArticleBlock
              date={posts[7].node.frontmatter.date}
              description={posts[7].node.frontmatter.description}
              slug={posts[7].node.fields.slug}
              thumbnail={posts[7].node.frontmatter.thumbnail}
              title={posts[7].node.frontmatter.title}
              half
            />
            <ArticleBlock
              date={posts[8].node.frontmatter.date}
              description={posts[8].node.frontmatter.description}
              slug={posts[8].node.fields.slug}
              thumbnail={posts[8].node.frontmatter.thumbnail}
              title={posts[8].node.frontmatter.title}
              half
            />
          </>
        ) : (
          !!posts[7] && (
            <ArticleBlock
              date={posts[7].node.frontmatter.date}
              description={posts[7].node.frontmatter.description}
              slug={posts[7].node.fields.slug}
              thumbnail={posts[7].node.frontmatter.thumbnail}
              title={posts[7].node.frontmatter.title}
              large
            />
          )
        )}
        {!!posts[10] && (
          <ArticleBlock
            date={posts[10].node.frontmatter.date}
            description={posts[10].node.frontmatter.description}
            slug={posts[10].node.fields.slug}
            thumbnail={posts[10].node.frontmatter.thumbnail}
            title={posts[10].node.frontmatter.title}
            large
          />
        )}
        {!!(posts[11] && posts[12] && posts[13]) ? (
          <>
            <ArticleBlock
              date={posts[11].node.frontmatter.date}
              description={posts[11].node.frontmatter.description}
              slug={posts[11].node.fields.slug}
              thumbnail={posts[11].node.frontmatter.thumbnail}
              title={posts[11].node.frontmatter.title}
            />
            <ArticleBlock
              date={posts[12].node.frontmatter.date}
              description={posts[12].node.frontmatter.description}
              slug={posts[12].node.fields.slug}
              thumbnail={posts[12].node.frontmatter.thumbnail}
              title={posts[12].node.frontmatter.title}
            />
            <ArticleBlock
              date={posts[13].node.frontmatter.date}
              description={posts[13].node.frontmatter.description}
              slug={posts[13].node.fields.slug}
              thumbnail={posts[13].node.frontmatter.thumbnail}
              title={posts[13].node.frontmatter.title}
            />
          </>
        ) : !!(posts[11] && posts[12]) ? (
          <>
            <ArticleBlock
              date={posts[11].node.frontmatter.date}
              description={posts[11].node.frontmatter.description}
              slug={posts[11].node.fields.slug}
              thumbnail={posts[11].node.frontmatter.thumbnail}
              title={posts[11].node.frontmatter.title}
              half
            />
            <ArticleBlock
              date={posts[12].node.frontmatter.date}
              description={posts[12].node.frontmatter.description}
              slug={posts[12].node.fields.slug}
              thumbnail={posts[12].node.frontmatter.thumbnail}
              title={posts[12].node.frontmatter.title}
              half
            />
          </>
        ) : (
          !!posts[11] && (
            <ArticleBlock
              date={posts[11].node.frontmatter.date}
              description={posts[11].node.frontmatter.description}
              slug={posts[11].node.fields.slug}
              thumbnail={posts[11].node.frontmatter.thumbnail}
              title={posts[11].node.frontmatter.title}
              large
            />
          )
        )}
        {!!posts[14] && (
          <ArticleBlock
            date={posts[14].node.frontmatter.date}
            description={posts[14].node.frontmatter.description}
            slug={posts[14].node.fields.slug}
            thumbnail={posts[14].node.frontmatter.thumbnail}
            title={posts[14].node.frontmatter.title}
            large
          />
        )}
      </ul>
    </Layout>
  )
}

export default BlogListTemplate

export const pageQuery = graphql`
  query BlogListTemplate($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            tags
            templateKey
            title
            description
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
`
