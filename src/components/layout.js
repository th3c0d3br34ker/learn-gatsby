import React from "react"
import Footer from "./footer"
import Header from "./header"

import LayoutStyles from "../styles/layout.module.scss"
import "../styles/index.scss"
import Head from "./head"

const Layout = ({ children }) => {
  return (
    <div className={LayoutStyles.container}>
      <div className={LayoutStyles.content}>
        <Head />
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
