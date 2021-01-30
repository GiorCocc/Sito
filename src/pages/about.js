import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import {graphql} from "gatsby"

export default function Post({data}) {
  return (
    <div>
      <Header></Header>
      <p>Post{data.site.siteMetadata.title}</p>
      <Footer></Footer>
    </div>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`