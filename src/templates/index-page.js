import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import LatestBlogs from "../components/LatestBlogs/LatestBlogs"

export const IndexPageTemplate = props => {
  const { heading = "", subheading = "", mainpitch = "" } = props
  return (
    <div>
      <header>
        <h1>{heading}</h1>
        <h3>{subheading}</h3>
      </header>
      <main>
        <section>
          <h1>{mainpitch.title}</h1>
          {mainpitch.description.split("\n").map((desc, index) => {
            return desc.length ? <p key={index}>{desc}</p> : null
          })}
        </section>
        <LatestBlogs />
      </main>
    </div>
  )
}

export default ({ data }) => {
  const { heading, subheading, mainpitch } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <IndexPageTemplate
        heading={heading}
        subheading={subheading}
        mainpitch={mainpitch}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        heading
        subheading
        mainpitch {
          title
          description
        }
      }
    }
  }
`
