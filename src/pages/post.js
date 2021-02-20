import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { graphql, Link } from "gatsby"
import PostImg from "../img/undraw_web_development_w2vv.svg"
import SEO from "../components/seo"



export default function Post({data}) {
  return (
    <div>
        <SEO title="Post"></SEO>
        <Header></Header>
        <div className="f-f-p pt-16 lg:pt-32 mx-auto container px-4 md:px-8 xl:px-0">
          <h1 className="text-center text-3xl font-semibold lg:text-5xl tracking-wider text-gray-900">Post ~ {data.allMarkdownRemark.totalCount} articoli</h1>
          <div className="grid md:grid-cols-2">
            <div>
              <PostImg className="w-full h-full p-6"></PostImg>
            </div>
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id} className="flex flex-row justify-between place-items-center border-b-2 p-3 lg:mx-10">
                  <Link to={node.fields.slug}>
                    <h3 className="text-giallo font-semibold text-3xl">{node.frontmatter.title} </h3>
                  </Link>
                  <p className="align-bottom text-gray-300 text-right"> — {node.frontmatter.date}</p>
                </div>
              ))}
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
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            author
            date
            title
            description
          }
          timeToRead
          id
          fields {
            slug
          }
        }
      }
      totalCount
    }
  }
`