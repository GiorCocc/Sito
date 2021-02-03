import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Hero from "../components/hero"
import SummaryPost from "../components/summary-post"
import Form from "../components/form"
import ContactImg from "../img/undraw_contact_us_15o2.svg"
import Social from "../components/social"


export default function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      {/* Creare un div con dentro i programmi che so usare e linguaggi che conosco */}
      <SummaryPost></SummaryPost> {/* Sistemare i testi */}
      {/* Creare un blocco per i progetti svolti (coming soon..) */}
      {/* Creare un blocco per i contatti */}
      <div className="place-items-auto bg-yellow-300 rounded-3xl">
        <h1 className="xl:text-5xl pt-10 text-3xl text-gray-800 text-center font-bold mb-4">Contatti</h1>
        <p className="text-xl text-gray-600 text-center xl:w-3/5 mx-auto w-11/12">
          Se vuoi lasciare un messaggio, anche anonimo, compila questo form in modo che tu possa essere contattato da me in qualunque momento (tutti i campi, ad eccezione del messaggio sono anonimi). E se vuoi, seguimi anche sui miei canali social
        </p>
        <Social></Social>
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:pl-2 xl:pl-6 p-5 ">
          <div>
            <Form></Form>
          </div>
          <div>
            <ContactImg className="w-full p-8"></ContactImg>
          </div>
        </div>
      </div>
      {/* Aggiungere sezione con i social */}
      <Footer></Footer>
    </div>
  )
}
