import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Hero from "../components/hero"
import SummaryPost from "../components/summary-post"
import Form from "../components/form"
import ContactImg from "../img/undraw_contact_us_15o2.svg"
import Skills from "../components/skill"
import SkillImg from "../img/undraw_developer_activity_bv83.svg"
import Tools from "../components/tools"
import {graphql, Link} from "gatsby"
import SEO from "../components/seo"

export default function Home({data}) {
  return (
    <div>
      <SEO title="Home" description="Home page del sito, dove puoi trovare un rapido riassunto su di me e su ciò che faccio"></SEO>
      <Header></Header>
      <Hero></Hero>
      <SummaryPost></SummaryPost> {/* Sistemare i testi */}
      {/* Creare un blocco per i progetti svolti (coming soon..) */}
      <div className=" bg-gray-700 rounded-2xl p-8 mb-8">
        <h1 className="xl:text-5xl pt-10 text-3xl text-gray-200 text-center font-bold mb-4">Skills e Strumenti</h1>
        <p className="text-xl text-gray-200 text-center xl:w-3/5 mx-auto w-11/12">
          Tutti i linguaggi di programmazione e di marcatura che conosco e che sono in grado di gestire. Al momento sto imparando javascript, lo sviluppo di siti web e mobile
        </p>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 pt-2">
          <SkillImg className="w-full h-auto p-8"></SkillImg>
          <Skills></Skills>
        </div>
        <Tools></Tools>
        <div className="flex flex-row justify-end mb-3">
          <Link to="/projects/">
            <div className="flex flex-row gap-4 align-middle">
              <p className="text-xl text-giallo font-bold align-middle ">Guarda i progetti</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFC85B">
                <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <div className="place-items-auto bg-giallo_chiaro1 rounded-3xl">
        <h1 className="xl:text-5xl pt-10 text-3xl text-gray-800 text-center font-bold mb-4">Contatti</h1>
        <p className="text-xl text-gray-600 text-center xl:w-3/5 mx-auto w-11/12">
          Se vuoi lasciare un messaggio, anche anonimo, compila questo form in modo che tu possa essere contattato da me in qualunque momento (tutti i campi, ad eccezione del messaggio sono facoltativi)
        </p>
        {/* <Social></Social> */}
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:pl-2 xl:pl-6 p-5 ">
          <div>
            <Form></Form>
          </div>
          <div>
            <ContactImg className="w-full h-full lg:p-8"></ContactImg>
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