import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export const IndexPageTemplate = props => {
  const { heading = "", subheading = "", mainpitch = "" } = props
  return (
    <div>
      <header>
        <h1>{heading}</h1>
        <h2>{heading}</h2>
        <h3>{subheading}</h3>
        <h4>{subheading}</h4>
        <h5>{subheading}</h5>
        <h6>{subheading}</h6>
      </header>
      <main>
        <section>
          <h1>{mainpitch.title}</h1>
          <h3>{mainpitch.description}.</h3>
          <p>
            Occaecat labore culpa enim ipsum sint ut ex velit ipsum nostrud elit
            laborum.
          </p>
          <p>
            Qui anim veniam exercitation minim do. O | fficia incididunt tempor
            enim esse deserunt. Officia Lorem adipisicing id ex id et nulla anim
            sint consectetur Lorem sunt fugiat.
          </p>
          <p>
            Ex irure fugiat in aute esse ex. Ipsum reprehenderit nostrud aliqua
            ali | quip reprehenderit non labore irure esse dolor. In ut ipsum
            fugiat eu commodo. Sunt ipsum reprehenderit adipisicing aute anim.
            Tempor irure est anim tempor pariatur culpa culpa laboris. Excepteur
            esse commodo mollit magna enim sint esse amet ex anim ad nostrud
            elit. Sunt excepteur non ea culpa aute Lorem id amet incididunt
            minim eu.
          </p>

          <p>
            Reprehenderit voluptate magna dolore Lorem mollit exercitation.
            Aliquip occaecat sit non minim. Deserunt eiusmod proident laboris
            pariatur. Cupidatat irure deserunt consequat tempor sit exercitation
            pariatur est dolor in dolor aliqua duis incididunt. Culpa
            exercitation veniam dolore pariatur minim excepteur. Cillum sit
            consectetur elit ipsum ipsum incididunt consequat occaecat qui
            veniam velit. Officia officia pariatur occaecat fugiat veniam
            nostrud.
          </p>
          <p>
            Enim labore adipisicing duis do excepteur est labore ut in consequat
            est qui ea. Consequat occaecat sit excepteur sit aliquip et
            cupidatat cupidatat. Non proident dolore adipisicing minim et nisi
            tempor aliquip ut culpa elit. Ea sunt do dolor dolore pariatur nulla
            eiusmod amet aute esse duis sit irure labore. Sunt tempor mollit
            culpa consectetur aliqua occaecat.
          </p>
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
