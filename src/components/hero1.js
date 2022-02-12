import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
// import Social from "./social1"
import Img from "gatsby-image"
import BuyMeACoffee from "../images/bmc-full-logo-no-background.png"

export default function Hero() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "memoji.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div class="dark:bg-gray-800 font-mono bg-white relative overflow-hidden">
      <div class="flex relative z-20 items-center">
        <div class="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
          <div class="flex flex-col">
            <div class="w-32 mx-auto bg-giallo_chiaro rounded-full">
              <Img
                fluid={data.file.childImageSharp.fluid}
                class="w-30 mx-auto"
              />
            </div>

            <p class="text-3xl my-6 text-center dark:text-white">
              Ciao, mi chiamo Giorgio <span role="img" aria-label="">🤘</span> 
            </p>
            <h2 class="max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2">
              Sviluppatore in erba, tennista, tech enthusiast.
            </h2>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start mx-auto">
              <div className="rounded-md shadow">
                <Link to="/about/">
                  <div className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md uppercase text-white bg-gray-700 hover:bg-giallo hover:text-gray-700 hover:shadow-xl shadow-lg md:py-4 md:text-lg md:px-10">
                    Contattami
                  </div>
                </Link>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:gap-8">
              <a
                href="https://buymeacoffee.com/giorcocc"
                target="_blank"
                rel="noreferrer"
                className="mx-auto p-4 bg-white border-giallo border-2 rounded-2xl my-8 w-64"
              >
                <img src={BuyMeACoffee} alt="" className="justify-center"></img>
              </a>
              <a
                href="https://en.cryptobadges.io/donate/3NGieMXTcxj8Br7yGQ4nGdCQ17aLqZm4y9"
                target="_blank"
                rel="noreferrer"
                className="mx-auto p-4 bg-white border-giallo border-2 rounded-2xl my-8 w-64"
              >
                <div className="flex flex-row">
                  <svg
                    class="flex-shrink-0 w-10 h-10 mr-3 my-auto"
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
                    <path d="M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8" />{" "}
                    <line x1="8" y1="6" x2="8" y2="18" />{" "}
                    <line x1="8" y1="12" x2="14" y2="12" />{" "}
                    <line x1="9" y1="3" x2="9" y2="6" />{" "}
                    <line x1="13" y1="3" x2="13" y2="6" />{" "}
                    <line x1="9" y1="18" x2="9" y2="21" />{" "}
                    <line x1="13" y1="18" x2="13" y2="21" />
                  </svg>
                  <p className="my-auto text-xl">Donate Bitcoin</p>
                </div>
              </a>
              <a
                href="https://en.cryptobadges.io/donate/0x2D6A9d1Cc94c30Ab5db29d8aF32654216f938e3d"
                target="_blank"
                rel="noreferrer"
                className="mx-auto p-4 bg-white border-giallo border-2 rounded-2xl my-8 w-64"
              >
                <div className="flex flex-row">
                  <svg
                    class="flex-shrink-0 w-10 h-10 mr-3 my-auto"
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
                    <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"/>
                  </svg>
                  <p className="my-auto text-xl">Donate Ethereum</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
