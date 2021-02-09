import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import HeaderStyles from "../styles/header.module.scss"

const Header = () => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { siteMetadata } = site

  return (
    <header className={HeaderStyles.header}>
      <h1>
        <Link to="/" className={HeaderStyles.title}>
          {siteMetadata.title}
        </Link>
      </h1>

      <nav>
        <ul className={HeaderStyles.navList}>
          <li>
            <Link
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
