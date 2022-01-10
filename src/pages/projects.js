import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { graphql } from "gatsby"
import SEO from "../components/seo"

const Projects = props => (
  <div>
    <SEO title="Progetti"></SEO>
    <Header></Header>
    <div className="f-f-p pt-16 lg:pt-32 mx-auto container px-4 md:px-8 xl:px-0">
      <h1 className="text-center text-3xl lg:text-5xl font-semibold tracking-wider text-gray-900">
        Progetti
      </h1>
      <p className="mt-3 text-base text-gray-500 justify-center text-center sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-20">
        Qui trovate una raccolta dei progetti che ho realizzato che sono
        reperibili su{" "}
        <a
          href="https://github.com/GiorCocc"
          target="_blank"
          rel="noreferrer"
          className="text-giallo"
        >
          GitHub
        </a>{" "}
        per un approfondimento e per contribuire, aggiornare e recuperare tutti
        i miei lavori
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-4 md:px-8 xl:mx-auto gap-3 py-6">
        {/* Blocchi piccoli + uno grande */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <article class="p-1 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-300">
            <a
              href="https://github.com/GiorCocc/programmi-liceo"
              target="_blank"
              rel="noreferrer"
              class="flex flex-col justify-end h-full p-6 bg-gray-900 sm:p-8 rounded-xl hover:bg-opacity-90"
            >
              <div class="mt-16">
                <h5 class="mt-2 text-xl font-bold text-white">
                  Programmi C/C++ Liceo
                </h5>
                <div class="flex items-center justify-between mt-6">
                  <p class="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300">
                    Study
                  </p>
                  <ul class="flex space-x-1">
                    <li class="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                      C/C++
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </article>
          <article class="p-1 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-300">
            <a
              href="https://github.com/GiorCocc/cpp-project-unipr"
              target="_blank"
              rel="noreferrer"
              class="flex flex-col justify-end h-full p-6 bg-gray-900 sm:p-8 rounded-xl hover:bg-opacity-90"
            >
              <div class="mt-16">
                <h5 class="mt-2 text-xl font-bold text-white">
                  Programmi C/C++ Uni
                </h5>
                <div class="flex items-center justify-between mt-6">
                  <p class="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300">
                    Study
                  </p>
                  <ul class="flex space-x-1">
                    <li class="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                      C/C++
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </article>
          <article class="p-1 md:col-span-2 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-300">
            <a
              href="https://github.com/GiorCocc/gioco-esame"
              target="_blank"
              rel="noreferrer"
              class="flex flex-col justify-end h-full p-6 bg-gray-900 sm:p-8 rounded-xl hover:bg-opacity-90"
            >
              <div class="mt-16">
                <h5 class="mt-2 text-xl font-bold text-white">
                  Big Boi Runnin'
                </h5>
                <div class="flex items-center justify-between mt-6">
                  <p class="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300">
                    Game
                  </p>
                  <ul class="flex space-x-1">
                    <li class="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                      C#
                    </li>
                    <li class="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                      Unity
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </article>
        </div>
        {/* Blocco grande + due piccoli */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <article class="p-1 md:col-span-2 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-300">
            <a
              href="https://www.amazon.it/Freenove-Bilanciamento-Automatico-Tracciamento-Riconoscimento/dp/B08C254F73?ref_=ast_sto_dp"
              target="_blank"
              rel="noreferrer"
              class="flex flex-col justify-end h-full p-6 bg-gray-900 sm:p-8 rounded-xl hover:bg-opacity-90"
            >
              <div class="mt-16">
                <h5 class="mt-2 text-xl font-bold text-white">
                  Cane robot Raspberry
                </h5>
                <div class="flex items-center justify-between mt-6">
                  <p class="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300">
                    Robot
                  </p>
                  <ul class="flex space-x-1">
                    <li class="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                      Python
                    </li>
                    <li class="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                      Raspberry
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </article>
          <article class="p-1 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-300">
            <a
              href="https://github.com/GiorCocc/python_project-unipr"
              target="_blank"
              rel="noreferrer"
              class="flex flex-col justify-end h-full p-6 bg-gray-900 sm:p-8 rounded-xl hover:bg-opacity-90"
            >
              <div class="mt-16">
                <h5 class="mt-2 text-xl font-bold text-white">
                  Programmi Python UniPr
                </h5>
                <div class="flex items-center justify-between mt-6">
                  <p class="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300">
                    Study
                  </p>
                  <ul class="flex space-x-1">
                    <li class="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                      Python
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </article>
          <article class="p-1 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-300">
            <a
              href="https://github.com/GiorCocc/arduino"
              target="_blank"
              rel="noreferrer"
              class="flex flex-col justify-end h-full p-6 bg-gray-900 sm:p-8 rounded-xl hover:bg-opacity-90"
            >
              <div class="mt-16">
                <h5 class="mt-2 text-xl font-bold text-white">
                  Progetti Arduino uno
                </h5>
                <div class="flex items-center justify-between mt-6">
                  <p class="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300">
                    Study
                  </p>
                  <ul class="flex space-x-1">
                    <li class="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                      C
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </article>
        </div>
        {/* <ProjectImg className="w-3/4 mx-auto my-auto"></ProjectImg> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <article class="p-1 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-300">
            <a
              href="https://github.com/GiorCocc/password-generator"
              target="_blank"
              rel="noreferrer"
              class="flex flex-col justify-end h-full p-6 bg-gray-900 sm:p-8 rounded-xl hover:bg-opacity-90"
            >
              <div class="mt-16">
                <h5 class="mt-2 text-xl font-bold text-white">
                  Password Generator
                </h5>
                <div class="flex items-center justify-between mt-6">
                  <p class="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300">
                    Tool
                  </p>
                  <ul class="flex space-x-1">
                    <li class="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                      Python
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </article>
          <article class="p-1 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-300">
            <a
              href="https://github.com/GiorCocc/bubble-bobble"
              target="_blank"
              rel="noreferrer"
              class="flex flex-col justify-end h-full p-6 bg-gray-900 sm:p-8 rounded-xl hover:bg-opacity-90"
            >
              <div class="mt-16">
                <h5 class="mt-2 text-xl font-bold text-white">Bubble Bobble</h5>
                <div class="flex items-center justify-between mt-6">
                  <p class="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300">
                    Game
                  </p>
                  <ul class="flex space-x-1">
                    <li class="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                      Python
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </article>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <article class="p-1 col-span-2 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-300">
            <a
              href="https://github.com/GiorCocc/Sito"
              target="_blank"
              rel="noreferrer"
              class="flex flex-col justify-end h-full p-6 bg-gray-900 sm:p-8 rounded-xl hover:bg-opacity-90"
            >
              <div class="mt-16">
                <h5 class="mt-2 text-xl font-bold text-white">
                  Portfolio personale
                </h5>
                <div class="flex items-center justify-between mt-6">
                  <p class="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300">
                    Web
                  </p>
                  <ul class="flex space-x-1">
                    <li class="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                      Javascript
                    </li>
                    <li class="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                      HTML
                    </li>
                    <li class="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                      CSS
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </article>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <article class="p-1 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-300">
            <a
              href="https://github.com/GiorCocc/3-in-a-row"
              target="_blank"
              rel="noreferrer"
              class="flex flex-col justify-end h-full p-6 bg-gray-900 sm:p-8 rounded-xl hover:bg-opacity-90"
            >
              <div class="mt-16">
                <h5 class="mt-2 text-xl font-bold text-white">3-in-a-row</h5>
                <div class="flex items-center justify-between mt-6">
                  <p class="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300">
                    Game
                  </p>
                  <ul class="flex space-x-1">
                    <li class="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                      Python
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </article>
          {/* Per aggiornare */}
          <article class="p-1 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-300">
            <a
              href="https://github.com/GiorCocc/FondProg"
              target="_blank"
              rel="noreferrer"
              class="flex flex-col justify-end h-full p-6 bg-gray-900 sm:p-8 rounded-xl hover:bg-opacity-90"
            >
              <div class="mt-16">
                <h5 class="mt-2 text-xl font-bold text-white">
                  Fondamenti di Programmazione
                </h5>
                <div class="flex items-center justify-between mt-6">
                  <p class="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300">
                    Study
                  </p>
                  <ul class="flex space-x-1">
                    <li class="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                      C++
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </article>
          {/* <article class="p-1 animate-pulse rounded-2xl bg-gradient-to-r from-gray-500 to-gray-300">
            <div
              // href="https://github.com/GiorCocc/cpp-project-unipr"
              // target="_blank"
              // rel="noreferrer"
              class="flex flex-col justify-end h-full p-6 bg-white sm:p-8 rounded-xl hover:bg-opacity-90"
            >
              <div class="mt-16">
                <div class="h-14 pt-2 w-36 text-gray-500 p-1 bg-gradient-to-br from-gray-500 to-gray-300 rounded-md animate-pulse"></div>
                <div class="flex items-center justify-between mt-6">
                  <div class="h-4 w-11 mt-2 mb-1 text-gray-500 p-1 bg-gradient-to-br from-gray-500 to-gray-300 rounded-md animate-pulse"></div>

                  <ul class="flex space-x-1">
                    <li class="inline-block animate-pulse rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800"></li>
                  </ul>
                </div>
              </div>
            </div>
          </article> */}
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
)

export default Projects

export const data = graphql`
  query {
    cpp: file(relativePath: { eq: "CPP-projects.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    python: file(relativePath: { eq: "Python-projects.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bigboi: file(relativePath: { eq: "bigboi.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logo: file(relativePath: { eq: "Logo-iniziali-e-nome1.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bb: file(relativePath: { eq: "bubble-bobble-classic.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    arduino: file(relativePath: { eq: "Arduino.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    inarow: file(relativePath: { eq: "InaRow (2).png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dog: file(relativePath: { eq: "Dog.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    password: file(relativePath: { eq: "password.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
