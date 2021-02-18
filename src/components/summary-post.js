import React from "react"
import {Link, useStaticQuery, graphql} from "gatsby"
import Img from"gatsby-image"

function SummaryPost() {
    const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "Logo-iniziali-e-nome1.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <div className="container mx-auto pt-16 px-4 md:px-8">
            <div className="mb-10">
                <h1 className="xl:text-5xl pt-4 xl:pt-0 text-3xl text-gray-800 text-center font-bold mb-4">Ultimi post pubblicati</h1>
                <p className="text-xl text-gray-600 text-center xl:w-3/5 mx-auto w-11/12">
                    Questo sito non ha la pretesa di diventare un punto di riferito nel mondo dei blog. Vuole essere solo un piccolo spazio in cui voglio lasciare alcuni pensieri più strutturati in modo da poterli reperire più facilmente. E chi lo sa, magari sono anche utili a qualcun'altro, oltre che a me
                </p>
            </div>
            <div className="lg:flex md:flex xl:justify-around sm:flex flex-wrap md:justify-around sm:justify-around lg:justify-around">
                <div className="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0">
                    <div className="shadow h-64 rounded z-10 bg-giallo_chiaro1">
                        {/* <img src="https://res.cloudinary.com/giorgio-coccapani/image/upload/v1613480707/gc_sito/Logo-iniziali-e-nome1_phhnjt.png" alt="" className=" object-cover overflow-hidden rounded" /> */}
                        <Img fluid={data.file.childImageSharp.fluid} alt="" className=" object-cover overflow-hidden rounded" />

                    </div>
                    <div className="p-6 shadow-lg w-11/12 mx-auto -mt-20 bg-white rounded z-20 relative">
                        <Link to="/perche-sito-web/">
                            <p className="uppercase mx-auto w-full text-sm text-giallo text-center font-semibold pb-3">Perchè ho creato un sito web?</p>
                        </Link>
                        {/* <p className="text-lg text-gray-800 text-center pb-3">Perchè ho avuto la necessità di creare un sito web e quale sarà il suo scopo.</p> */}
                        <p className="text-sm text-gray-800 text-center">
                            2020-02-20, di Giorgio Coccapani
                        </p>
                    </div>
                </div>
                {/* <div className="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0">
                    <div className="shadow h-64 rounded">
                        <img src="https://cdn.tuk.dev/assets/photo-1544476915-ed1370594142.jfif" alt className="h-full w-full object-cover overflow-hidden rounded" />
                    </div>
                    <div className="p-6 shadow-lg w-11/12 mx-auto -mt-20 bg-white rounded z-20 relative">
                        <p className="uppercase text-sm text-giallo text-center pb-3">Titolo</p>
                        <p className="text-lg text-gray-800 text-center pb-3">Paragrafo</p>
                        <p className="text-sm text-gray-800 text-center">
                            Data, di Autore
                        </p>
                    </div>
                </div>
                <div className="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0">
                    <div className="shadow h-64 rounded">
                        <img src="https://cdn.tuk.dev/assets/photo-1462331940025-496dfbfc7564.jfif" alt className="h-full w-full object-cover overflow-hidden rounded" />
                    </div>
                    <div className="p-6 shadow-lg w-11/12 mx-auto -mt-20 bg-white rounded z-20 relative">
                        <p className="uppercase text-sm text-giallo text-center pb-3">Titolo</p>
                        <p className="text-lg text-gray-800 text-center pb-3">Paragrafo</p>
                        <p className="text-sm text-gray-800 text-center">
                            Data, di Autore
                        </p>
                    </div>
                </div> */}
            </div>
            <div className="flex flex-row justify-end mb-3">
                <Link to="/post/">
                    <div className="flex flex-row gap-4 align-middle">
                        <p className="text-xl text-giallo font-bold align-middle ">Guarda gli altri articoli</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFC85B">
                            <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                        </svg>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default SummaryPost;
