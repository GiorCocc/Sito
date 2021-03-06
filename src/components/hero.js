import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import Social from "./social1"
import Img from "gatsby-image"

export default function Hero(){
    const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "me.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return(
        <div className="relative bg-white overflow-hidden">
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <Img fluid={data.file.childImageSharp.fluid} className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full lg:rounded-3xl" alt="Giorgio Coccapani"></Img>
            </div>
        <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block xl:inline text-giallo">Giorgio Coccapani </span>
                        <span className="block xl:inline">Developer</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        Studente di ingegneria informatica, elettronica e telecomunicazioni con la passione per la programmazione e lo sviluppo web. Tech entusiast
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                            <Link to="/about/" >
                                <div className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 hover:bg-giallo hover:text-gray-700 md:py-4 md:text-lg md:px-10">
                                    Contattami
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex overflow-x-auto xs:justify-center lg:justify-start  my-4 ">
                    <Social></Social>
                </div>
            </main>
            </div>
        </div>
        
        </div>
    )
}

