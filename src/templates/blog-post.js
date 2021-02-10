import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import Form from "../components/form"
import ContactImg from "../img/undraw_contact_us_15o2.svg"


export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <div>
      <Header></Header>
      <div className="m-4">
        <h1 className="text-center font-semibold text-3xl lg:text-5xl tracking-wider text-giallo my-3">{post.frontmatter.title}</h1>
        <h3 className="text-center text-xl text-gray-400">{post.frontmatter.description}</h3>
        <div className="flex flex-row justify-between md:mx-20 border-b-2">
            <Link to="/about/" className="my-3">{post.frontmatter.author}</Link>
            <p className="my-3">Tempo di lettura: {post.timeToRead} minuti</p>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} className="md:mx-20 m-4 md:my-10 text-justify" />
      <div className="place-items-auto bg-giallo rounded-3xl">
          <h1 className="xl:text-5xl pt-10 text-3xl text-gray-800 text-center font-bold mb-4">Contatti</h1>
          <p className="text-xl text-gray-600 text-center xl:w-3/5 mx-auto w-11/12">
            Se vuoi lasciare un messaggio, anche anonimo, compila questo form in modo che tu possa essere contattato da me in qualunque momento (tutti i campi, ad eccezione del messaggio sono anonimi)
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:pl-2 xl:pl-6 p-5 ">
            <div>
              <ContactImg className="w-full h-full lg:p-8"></ContactImg>
            </div>
            <div>
              <Form></Form>
            </div>
          </div>
        </div>
      <Footer></Footer>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        author
      }
      timeToRead
    }
  }
`