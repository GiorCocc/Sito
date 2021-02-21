import { Link } from "gatsby"
import React from "react"

export default function Timeline(){
    return(
        <div className="container">
          <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-gray-50">
            {/* <!-- left --> */}
            <a href="https://www.liceoaselli.edu.it/" target="_blank" rel="noreferrer" className="flex flex-row-reverse md:contents">
              <div className="bg-giallo col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md text-gray-600">
                <h3 className="font-semibold text-lg mb-1">2015</h3>
                <p className="leading-tight text-justify">
                  Inizio Liceo scientifico opzione scienze applicate a Cremona
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-600 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-giallo shadow"
                ></div>
              </div>
            </a>
            {/* <!-- right --> */}
            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-600 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-600 shadow"
                ></div>
              </div>
              <div className="bg-gray-600 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                <h3 className="font-semibold text-lg mb-1">2016-2019</h3>
                <p className="leading-tight text-justify">
                  Studio scolastico della programmazione in C/C++ e HTML
                </p>
              </div>
            </div>
            {/* <!-- left --> */}
            <div className="flex flex-row-reverse md:contents">
              <div className="bg-gray-600 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                <h3 className="font-semibold text-lg mb-1">2020</h3>
                <p className="leading-tight text-justify">
                  Realizzazione del primo progetto - videogioco platform in C# con motore grafico Unity
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-600 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-600 shadow"
                ></div>
              </div>
            </div>
            {/* <!-- right --> */}
            <a href="https://www.unipr.it/" target="_blank" rel="noreferrer" className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-600 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-giallo shadow"
                ></div>
              </div>
              <div className="bg-giallo text-gray-700 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                <h3 className="font-semibold text-lg mb-1">2020</h3>
                <p className="leading-tight text-justify">
                  Inizio carriera universitaria a Parma - Ingegneria Informatica, elettronica e delle telecomunicazioni
                </p>
              </div>
            </a>
            {/* <!-- left --> */}
            <Link to="/" className="flex flex-row-reverse md:contents">
              <div className="bg-gray-600 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                <h3 className="font-semibold text-lg mb-1">26-02-2021</h3>
                <p className="leading-tight text-justify">
                  Pubblicazione del primo sito
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-600 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-600 shadow"
                ></div>
              </div>
            </Link>

            
            
          </div>
        </div>
    )
}