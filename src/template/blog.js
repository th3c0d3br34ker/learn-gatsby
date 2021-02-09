import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = ({ data }) => {
  const { markdownRemark } = data
  return (
    <Layout>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <p>{markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }}></div>
    </Layout>
  )
}

export default Blog
