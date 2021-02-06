import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { graphql } from "gatsby"
import Img from "gatsby-image"


export default function Post({data}) {
  return (
    <div>
        <title>Giorgio Coccapani ~ Post</title>
        <Header></Header>
        <div className="f-f-p pt-16 lg:pt-32 mx-auto container px-4 xl:px-0">
          <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-gray-900">Post</h1>
            
        </div>
        <Footer></Footer>
      
    </div>
  )
}

