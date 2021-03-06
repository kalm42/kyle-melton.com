import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styles from "./ArticleBlock.module.css"
import { format } from "date-fns"

const ArticleBlock = props => {
  const {
    date,
    description,
    half,
    large,
    slug,
    thumbnail,
    thumbnailAlt,
    title,
  } = props
  return (
    <li
      className={`${styles["ArticleBlock"]} ${
        half ? styles["ArticleBlock__half"] : ""
      } ${large ? styles["ArticleBlock__large"] : ""}`}
    >
      <Link
        className={`${styles["ArticleBlock__link"]} ${
          styles["ArticleBlock__container"]
        } ${half ? styles["ArticleBlock__container__half"] : ""} ${
          large ? styles["ArticleBlock__container__large"] : ""
        }`}
        to={slug}
      >
        <div className={styles["ArticleBlock__image"]}>
          <Img fluid={thumbnail.childImageSharp.fluid} alt={thumbnailAlt} />
        </div>
        <div
          className={`${styles["ArticleBlock__text"]} ${
            half ? styles["ArticleBlock__text__half"] : ""
          } ${large ? styles["ArticleBlock__text__large"] : ""}`}
        >
          <div
            className={`${styles["ArticleBlock__head"]} ${
              half ? styles["ArticleBlock__head__half"] : ""
            } ${large ? styles["ArticleBlock__head__large"] : ""}`}
          >
            <h3>{title}</h3>
            <h5>{format(new Date(date), "MMMM d, yyyy @ K:mm:s aaaa")}</h5>
          </div>
          <div className={styles["ArticleBlock__intro"]}>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

ArticleBlock.propTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  half: PropTypes.bool,
  large: PropTypes.bool,
  slug: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.shape({
        aspectRatio: PropTypes.number.isRequired,
        base64: PropTypes.string.isRequired,
        sizes: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        srcSet: PropTypes.string.isRequired,
      }),
    }),
  }),
  thumbnailAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default ArticleBlock
