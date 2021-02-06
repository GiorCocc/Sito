import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import {graphql} from "gatsby"

export default function Projects({data}) {
  return (
    <div>
      <title>{data.site.siteMetadata.author} ~ Progetti</title>
      <Header></Header>
      <p>Coming Soon</p>
      {/* Mettere in evidenza i progetti che sto svolgendo */}
      {/* Aggiungere uno schema a griglia con i progetti svolti */}
      {/* Elencare cose che possono servire al sito */}
      <Footer></Footer>
    </div>
  )
}

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