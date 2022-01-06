import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Hero from "../components/hero1"
import SummaryPost from "../components/summary-post1"
import Form from "../components/form"
import ContactImg from "../img/undraw_contact_us_15o2.svg"
import Skills from "../components/skill"
import SkillImg from "../img/undraw_developer_activity_bv83.svg"
import Tools from "../components/tools"
import {graphql} from "gatsby"
import SEO from "../components/seo"
import Card from "../components/card-contatti"
import Progetti from "../components/progetti"

export default function Home({data}) {
  return (
    <div>
      <SEO title="Home" description="Ciao, mi chiamo Giorgio, sono uno sviluppatore e tante altre cose. Questo è il mio (brutto) sito personale. Sorry"></SEO>
      <Header></Header>
      <div className="f-f-p lg:pt-16 mx-auto container xl:px-0 ">
        <Hero></Hero>
        <SummaryPost></SummaryPost> {/* Sistemare i testi */}
        
        <Card></Card>
        {/* Creare un blocco per i progetti svolti (coming soon..) */}
        <div className=" bg-gray-100 rounded-2xl shadow-xl p-4 md:p-8 mb-8 mx-auto">
          <h1 className="xl:text-5xl pt-10 text-3xl text-grigio_scuro text-center font-bold mb-4">Skills e Strumenti</h1>
          <p className="text-xl text-grigio_scuro text-center xl:w-3/5 mx-auto w-11/12 pb-5">
            Tutti i linguaggi di programmazione e di marcatura che conosco e che sono in grado di gestire. Al momento sto imparando javascript, lo sviluppo di siti web e mobile
          </p>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2">
            <SkillImg className="w-full h-3/4 my-auto md:h-auto  p-8"></SkillImg>
            <Skills className="pb-4"></Skills>
          </div>
          <Tools></Tools>
        </div>
        <Progetti></Progetti>

        <div className="place-items-auto bg-transparent rounded-3xl p-4 md:p-8">
          <h1 className="xl:text-5xl pt-10 text-3xl text-gray-800 text-center font-bold mb-4">Contatti</h1>
          <p className="text-xl text-gray-600 text-center xl:w-3/5 mx-auto w-11/12">
            Se vuoi lasciare un messaggio, anche anonimo, compila questo form in modo che tu possa essere contattato da me in qualunque momento (tutti i campi, ad eccezione del messaggio sono facoltativi)
          </p>
          
          {/* <Social></Social> */}
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <div>
              <Form></Form>
            </div>
            <div>
              <ContactImg className="w-full h-full lg:p-8"></ContactImg>
            </div>
          </div>
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