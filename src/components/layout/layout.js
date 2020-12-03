/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
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
            <ul>
              <li>
                <a href="tel:+19512127174">(951)212-7174</a>
              </li>
              <li>
                <a href="mailto:kyle@kyle-melton.com">Kyle@kyle-melton.com</a>
              </li>
            </ul>
          </section>
          <section>
            <h1>About Me</h1>
            <p>I'm a cool dude.</p>
          </section>
          <section>
            <h1>Social Media</h1>
            <ul>
              <li>LinkedIn</li>
              <li>GitHub</li>
              <li>Twitter</li>
              <li>RSS Feed</li>
            </ul>
          </section>
        </section>
        <section>
          <p>
            <small>© {new Date().getFullYear()} Kyle Melton</small>
          </p>
          <ul>
            <li>
              <Link>Privacy Policy</Link>
            </li>
          </ul>
        </section>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
