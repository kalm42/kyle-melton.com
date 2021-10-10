/* eslint-disable */
import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Content, { HTMLContent } from "../components/content"
import styles from "./blog-post.module.css"
import Img from "gatsby-image"

export const BlogPostTemplate = props => {
  const {
    content,
    contentComponent,
    filePath,
    seo,
    tags,
    thumbnail,
    title,
    thumbnailAlt,
  } = props
  const PostContent = contentComponent || Content // Content is a component
  const exploded = filePath.split("/")
  const fileName = exploded[exploded.length - 1]

  return (
    <article className={styles.root}>
      {seo}
      <Img fluid={thumbnail?.childImageSharp.fluid} alt={thumbnailAlt} />
      <div>
        <h1>{title}</h1>
      </div>
      <PostContent content={content} />
      {!!tags.length && (
        <section>
          <h3>Tags</h3>
          <ul>
            {tags.map(tag => (
              <li key={`${tag}-tag`}>
                <Link to={`/tags/${tag}`}>{tag}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}
      <footer>
        <p>
          Did you find an error and you want to fix it? Or any other reason
          you'd like to change this post? Awesome!{" "}
          <a
            href={`https://github.com/kalm42/kyle-melton.com/blob/master/content/blog/${fileName}`}
          >
            Edit this page on GitHub
          </a>
          .
        </p>
      </footer>
    </article>
  )
}

const BlogPost = props => {
  const { markdownRemark: post } = props.data
  const {
    html,
    fileAbsolutePath,
    frontmatter: { title, tags, thumbnail, description, thumbnailAlt },
  } = post

  return (
    <Layout>
      <BlogPostTemplate
        content={html}
        contentComponent={HTMLContent}
        filePath={fileAbsolutePath}
        seo={<SEO title={`${title} | Blog`} description={description} />}
        tags={tags}
        thumbnail={thumbnail}
        thumbnailAlt={thumbnailAlt}
        title={title}
      />
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fileAbsolutePath
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        thumbnailAlt
        title
      }
    }
  }
`
