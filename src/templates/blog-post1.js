import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <div>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <title>
        {post.frontmatter.author} ~ {post.frontmatter.title}
      </title>
      <Header></Header>
      <article>
        <div class="max-w-screen-2xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div>
            <Link
              to="/post/"
              class="inline-flex items-center px-5 py-3 font-medium text-grigio_scuro border border-grigio_scuro rounded-lg hover:bg-giallo hover:border-giallo hover:text-grigio_scuro"
            >
              <svg
                class="flex-shrink-0 w-5 h-5 mr-3"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <line x1="5" y1="12" x2="19" y2="12" />{" "}
                <line x1="5" y1="12" x2="11" y2="18" />{" "}
                <line x1="5" y1="12" x2="11" y2="6" />
              </svg>
              Altri articoli
            </Link>
          </div>
          <div class="mx-auto space-y-8 max-w-prose">
            <h1 class="text-3xl font-bold leading-tight text-gray-900 sm:text-5xl">
              {post.frontmatter.title}
            </h1>
            <h3 class="text-xl font-bold leading-tight text-gray-500 sm:text-xl">
              {post.frontmatter.description}
            </h3>

            <div class="inline-block pb-8 border-b-2 border-giallo">
              <p class="font-medium text-gray-600">
                By {post.frontmatter.author}
              </p>
              <p class="font-medium text-gray-600">
                Tempo di lettura: {post.timeToRead} minuti
              </p>
            </div>

            <div
              class="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.html }}
            ></div>
          </div>
          <div className="flex flex-row justify-evenly my-10">
            <Link
              to="/post/"
              class="inline-flex items-center px-5 py-3 font-medium text-grigio_scuro border border-grigio_scuro rounded-lg hover:bg-giallo hover:border-giallo hover:text-grigio_scuro"
            >
              <svg
                class="flex-shrink-0 w-5 h-5 mr-3"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <line x1="5" y1="12" x2="19" y2="12" />{" "}
                <line x1="5" y1="12" x2="11" y2="18" />{" "}
                <line x1="5" y1="12" x2="11" y2="6" />
              </svg>
              Altri articoli
            </Link>
            <Link
              to="/contact/"
              class="inline-flex items-center px-5 py-3 font-medium text-grigio_scuro border border-grigio_scuro rounded-lg hover:bg-giallo hover:border-giallo hover:text-grigio_scuro"
            >
              <svg
                class="flex-shrink-0 w-5 h-5 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              Contattami
            </Link>
          </div>
        </div>
      </article>
      {/* <div className="m-4">
        <h1 className="text-center font-semibold text-3xl lg:text-5xl tracking-wider text-giallo my-3">
          {post.frontmatter.title}
        </h1>
        <h3 className="text-center text-xl text-gray-400">
          {post.frontmatter.description}
        </h3>
        <div className="flex flex-row justify-between md:mx-20 border-b-2">
          <Link to="/about/" className="my-3">
            {post.frontmatter.author}
          </Link>
          <p className="my-3">Tempo di lettura: {post.timeToRead} minuti</p>
        </div>
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: post.html }}
        className="md:mx-20 m-4 md:my-10 text-justify"
      /> */}

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
