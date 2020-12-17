import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "./ResumePage.module.css"
import { format } from "date-fns"

export const ResumePageTemplate = props => {
  const {
    title,
    workExperience,
    education,
    certifications,
    projects,
    skills,
  } = props
  return (
    <div className={styles["ResumePage__root"]}>
      <h1 className={styles["ResumePage__title"]}>{title}</h1>
      <article>
        <section>
          <h2>Work Experience</h2>
          {workExperience.map(
            ({ company, jobTitle, startDate, endDate, jobDescription }, i) => (
              <article key={i} className={styles["ResumePage__item"]}>
                <h3>
                  {company} — {jobTitle}
                </h3>
                <p>
                  <small>
                    {format(new Date(startDate), "MM/dd/yyyy")} –{" "}
                    {format(new Date(endDate), "MM/dd/yyyy")}
                  </small>
                </p>
                {jobDescription}
              </article>
            )
          )}
        </section>
        <section>
          <h2>Education</h2>
          {education.map(({ college, degree, graduationDate }, i) => (
            <article key={i} className={styles["ResumePage__item"]}>
              <h3>{college}</h3>
              <p>
                {degree} - {format(new Date(graduationDate), "MM/yyyy")}
              </p>
            </article>
          ))}
        </section>
        <section>
          <h2>Projects</h2>
          {projects.map(({ title, description, tags }, i) => (
            <article kei={i} className={styles["ResumePage__item"]}>
              <h3>{title}</h3>
              {description}
              <ul>
                {tags.map(({ tag }, j) => (
                  <li key={j}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </article>
      <aside>
        <section>
          <h2>Certifications</h2>
          {certifications.map(({ title, description }, i) => (
            <article key={i}>
              <h3>{title}</h3>
              {description}
            </article>
          ))}
        </section>
        <section>
          <h2>Skills</h2>
          <ul>
            {skills.map(({ skill }, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </section>
      </aside>
    </div>
  )
}

export default ({ data }) => {
  const {
    title,
    workExperience,
    education,
    certifications,
    projects,
    skills,
  } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <ResumePageTemplate
        title={title}
        workExperience={workExperience}
        education={education}
        certifications={certifications}
        projects={projects}
        skills={skills}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ResumePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "resume-page" } }) {
      frontmatter {
        title
        workExperience {
          company
          jobTitle
          startDate
          endDate
          jobDescription
        }
        education {
          college
          degree
          graduationDate
        }
        certifications {
          title
          description
        }
        projects {
          title
          description
          tags {
            tag
          }
        }
        skills {
          skill
        }
      }
    }
  }
`
