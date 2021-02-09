import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import BlogStyles from "../styles/blog.module.scss"

const BlogPage = () => {
  const { allMediumPost } = useStaticQuery(graphql`
    query {
      allMediumPost(sort: { fields: [createdAt], order: DESC }) {
        edges {
          node {
            title
            createdAt(formatString: "MMMM Do, YYYY")
            uniqueSlug
            author {
              username
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>My Blogs</h1>
      <ol className={BlogStyles.posts}>
        {allMediumPost.edges.map(post => {
          return (
            <li className={BlogStyles.post}>
              <a
                href={`https://medium.com/@${post.node.author.username}/${post.node.uniqueSlug}`}
                target="_blank"
              >
                <h2>{post.node.title}</h2>
                <h4>{post.node.createdAt}</h4>
              </a>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
