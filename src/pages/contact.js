import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Form from "../components/form"
import Info from "../components/info"
import ContactImg from "../img/undraw_contact_us_15o2.svg"
import {graphql} from "gatsby"
import SEO from "../components/seo"
import Social from "../components/social"


export default function Contact({data}) {
  return (
    <div>
      <SEO title="Contatti" description="Informazioni Per contattare Giorgio Coccapani"></SEO>
      <Header></Header>
      <div className="xl:mx-32">
        <Info></Info>
      <div className="f-f-p pt-16 lg:pt-32 mx-auto container xl:px-0">
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:pl-2 xl:pl-6 p-5">
          <div>
            <ContactImg className="w-full h-full p-8"></ContactImg>
          </div>
          <div>
            <Form></Form>
          </div>
        </div>
        <Social></Social>
      </div>
      </div>
      
      <Footer></Footer>
    </div>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`