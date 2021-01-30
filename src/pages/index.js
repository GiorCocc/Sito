import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Hero from "../components/hero"
import SummaryPost from "../components/blog1"
import Form from "../components/form"
import ContactImg from "../img/undraw_contact_us_15o2.svg"



export default function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      {/* Creare un div con dentro i programmi che so usare e linguaggi che conosco */}
      <SummaryPost></SummaryPost> {/* Sistemare i testi */}
      {/* Creare un blocco per i progetti svolti (coming soon..) */}
      {/* Creare un blocco per i contatti */}
      <div className="grid md:grid-cols-1 lg:grid-cols-2 lg:pl-2 xl:pl-6 p-5 bg-yellow-300 rounded-3xl">
        <div>
          <Form></Form>
        </div>
        <div>
          <ContactImg className="w-full p-8"></ContactImg>
        </div>
      </div>
      {/* Aggiungere sezione con i social */}
      <Footer></Footer>
    </div>
  )
}
