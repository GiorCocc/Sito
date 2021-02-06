import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import {graphql} from "gatsby"
import img from "../img/me.jpg"

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`

export default function Post({data}) {
  return (
    <div>
      <title>{data.site.siteMetadata.author} ~ About</title>
      <Header></Header>
      <div>
        <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-gray-900">Info e contatti</h1>
        
      </div>
      <Footer></Footer>
    </div>
  )
}

