import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"

const Header = props => {
  const { siteTitle = "" } = props
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <h1>
          <Link to="/" className={styles.header__link}>
            {siteTitle}
          </Link>
        </h1>
      </div>
      <nav className={styles["header__nav"]}>
        <ul className={styles["header__menu"]}>
          <li className={styles["header__menuitem"]}>
            <Link className={styles["header__link"]} to="/resume">
              Resume
            </Link>
          </li>
          <li className={styles["header__menuitem"]}>
            <Link className={styles["header__link"]} to="/blog">
              Blog
            </Link>
          </li>
          <li className={styles["header__menuitem"]}>
            <Link className={styles["header__link"]} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
