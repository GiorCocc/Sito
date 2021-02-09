import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"


export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <div>
      <Header></Header>
      <div>
        <h1 className="text-center font-semibold text-3xl lg:text-5xl tracking-wider text-giallo my-3">{post.frontmatter.title}</h1>
        <h3 className="text-center text-xl text-gray-400">{post.frontmatter.description}</h3>
        <div className="flex flex-row justify-between md:mx-20 border-b-2">
            <Link to="/about/" className="my-3">{post.frontmatter.author}</Link>
            <p className="my-3">Tempo di lettura: {post.timeToRead} minuti</p>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} className="md:mx-20 md:my-10 text-justify" />
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