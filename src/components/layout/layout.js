/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../header"
import styles from "./layout.module.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteDescription={data.site.siteMetadata.description}
      />
      <div className={styles.container}>
        <main className={styles.content}>{children}</main>
      </div>
      <footer className={styles["footer"]}>
        <section className={styles["footer__widgets"]}>
          <section>
            <h1>Contact Me</h1>
            <ul className={styles["footer__list"]}>
              <li>
                <a className={styles["footer__link"]} href="tel:+19512127174">
                  (951)212-7174
                </a>
              </li>
              <li>
                <a
                  className={styles["footer__link"]}
                  href="mailto:kyle@kyle-melton.com"
                >
                  Kyle [at] kyle-melton.com
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h1>About Me</h1>
            <p>I'm a cool dude.</p>
          </section>
          <section>
            <h1>Social Media</h1>
            <ul className={styles["footer__list"]}>
              <li>
                <a
                  className={styles["footer__link"]}
                  href="https://www.linkedin.com/in/kyle-al-melton/"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className={styles["footer__link"]}
                  href="https://github.com/kalm42/"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className={styles["footer__link"]}
                  href="https://twitter.com/kalm42"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </section>
        </section>
        <section>
          <p>
            <small>© {new Date().getFullYear()} Kyle Melton</small>
          </p>
        </section>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
