import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"

const Header = props => {
  const { siteTitle = "", siteDescription = "" } = props
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <h1 style={{ margin: 0 }}>
          <Link to="/" className={styles.header__link}>
            {siteTitle}
          </Link>
        </h1>
        <h3 className={styles.header__description}>{siteDescription}</h3>
      </div>
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
