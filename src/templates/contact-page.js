import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import LatestBlogs from "../components/LatestBlogs/LatestBlogs"
import styles from "./contact-page.module.css"

export const ContactPageTemplate = props => {
  const { phoneNumber = "", email = "", address = "" } = props
  const phone = phoneNumber.replace(/[^0-9]/g, "")
  const e = email.replace("@", "[at]")
  return (
    <div>
      <h1>Contact Me</h1>
      <section>
        <ul className={styles["contact_page__list"]}>
          <li className={styles["contact_page__item"]}>
            <a href={`tel:+${phone}`}>{phoneNumber}</a>
          </li>
          <li className={styles["contact_page__item"]}>
            <a href={`mailto:${email}`}>{e}</a>
          </li>
          <li className={styles["contact_page__item"]}>
            <address dangerouslySetInnerHTML={{ __html: address }}></address>
          </li>
        </ul>
      </section>
      <LatestBlogs />
    </div>
  )
}

export default ({ data }) => {
  const { phoneNumber, email, address } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <ContactPageTemplate
        phoneNumber={phoneNumber}
        email={email}
        address={address}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ContactPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
      frontmatter {
        phoneNumber
        email
        address
      }
    }
  }
`
