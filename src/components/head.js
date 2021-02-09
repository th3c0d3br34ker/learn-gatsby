import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Helmet from "react-helmet"

const Head = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return <Helmet title={site.siteMetadata.title} />
}

export default Head
