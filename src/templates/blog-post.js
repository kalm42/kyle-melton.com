import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Content, { HTMLContent } from "../components/content"

export const BlogPostTemplate = props => {
  const { content, contentComponent, description, tags, title, seo } = props
  const PostContent = contentComponent || Content // Content is a component

  return (
    <section>
      {seo}
      <div style={{ backgroundImage: null }}>
        <h1>{title}</h1>
      </div>
      <p>{description}</p>
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
    </section>
  )
}

const BlogPost = props => {
  const { markdownRemark: post } = props.data
  const {
    html,
    frontmatter: { description, title, tags },
  } = post

  return (
    <Layout>
      <BlogPostTemplate
        content={html}
        contentComponent={HTMLContent}
        description={description}
        seo={<SEO title={`${title} | Blog`} description={description} />}
        tags={tags}
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
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
