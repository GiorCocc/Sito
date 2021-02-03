import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Form from "../components/form"
import Info from "../components/info"
import ContactImg from "../img/undraw_contact_us_15o2.svg"


export default function Contact() {
  return (
    <div>
      <Header></Header>
      <Info></Info>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:pl-2 xl:pl-6 p-5">
        <div>
          <ContactImg className="w-full h-full p-8"></ContactImg>
        </div>
        <div>
          <Form></Form>
        </div>
      </div>
      
      <Footer></Footer>
    </div>
  )
}