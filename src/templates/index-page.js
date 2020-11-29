import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

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
          <h3>{mainpitch.description}.</h3>
        </section>

        {/* RESUME */}
        <section>
          <section>
            <h1>Resume</h1>

            <section>
              <h3>Work Experience</h3>
              <section>
                <h5>COMPANY - JOB TITLE</h5>
                <p>START DATE - END DATE | Present</p>
                <p>JOB DESCRIPTION</p>
              </section>
            </section>

            <section>
              <h3>Eduction</h3>
              <section>
                <h5>COLLEGE</h5>
                <p>DEGREE DETAILS</p>
              </section>
            </section>

            <section>
              <h3>Certifications</h3>
              <section>
                <h5>CERT TITLE</h5>
                <p>CERT DESCRIPTION</p>
              </section>
            </section>
          </section>

          <section>
            <h3>Projects</h3>
            <section>
              <section>
                <h5>PROJECT TITLE</h5>
                <p>PROJECT DESCRIPTION</p>
                <h6>Tags</h6>
                <ul>
                  <li>tag</li>
                </ul>
              </section>
            </section>
          </section>

          <aside>
            <h3>Skills</h3>
            <section>
              <h5>Languages</h5>
              <ul>
                <li>JavaScript</li>
              </ul>
            </section>
            <section>
              <h5>Tools</h5>
              <ul>
                <li>Git</li>
              </ul>
            </section>
          </aside>
        </section>

        {/* BLOG */}
        <section>
          <h1>Latest Blog Entries</h1>
          <article>
            <div style={{ backgroundImage: null }}>
              <h3>Blog Title</h3>
            </div>
            <p>Intro description</p>
            <Link>Read BLOG TITLE</Link>
          </article>
        </section>
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
