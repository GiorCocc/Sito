import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Hero from "../components/hero"
import SummaryPost from "../components/blog1"

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      {/* Creare un div con dentro i programmi che so usare e linguaggi che conosco */}
      <SummaryPost></SummaryPost> {/* Sistemare i testi */}
      {/* Creare un blocco per i progetti svolti (coming soon..) */}
      {/* Creare un blocco per i contatti */}
      {/* Aggiungere sezione con i social */}
      <Footer></Footer>
    </div>
  )
}
