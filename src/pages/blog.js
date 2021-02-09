import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import BlogStyles from "../styles/blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const { allMarkdownRemark } = data

  return (
    <Layout>
      <h1>Blog Page</h1>
      <ol className={BlogStyles.posts}>
        {allMarkdownRemark.edges.map(edge => {
          return (
            <li className={BlogStyles.post}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <h4>{edge.node.frontmatter.date}</h4>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
