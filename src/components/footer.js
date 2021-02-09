import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import FooterStyles from "../styles/footer.module.scss"
const Footer = () => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  const { siteMetadata } = site

  return (
    <footer className={FooterStyles.footer}>
      <p>
        Code with{" "}
        <span role="img" aria-label="black-heart-emoji">
          🖤
        </span>{" "}
        by {siteMetadata.author}
      </p>
    </footer>
  )
}

export default Footer
