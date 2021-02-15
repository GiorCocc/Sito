import React from "react"

export default function Timeline(){
    return(
        <div class="container">
          <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-gray-50">
            {/* <!-- left --> */}
            <div class="flex flex-row-reverse md:contents">
              <div class="bg-giallo col-start-1 col-end-5 p-4 rounded-xl xs:my-4 md:my-0 ml-auto shadow-md text-gray-600">
                <h3 class="font-semibold text-lg mb-1">2015</h3>
                <p class="leading-tight text-justify">
                  Inizio Liceo scientifico
                </p>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-600 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-giallo shadow"
                ></div>
              </div>
            </div>
            {/* <!-- right --> */}
            <div class="flex md:contents">
              <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-600 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-600 shadow"
                ></div>
              </div>
              <div class="bg-gray-600 col-start-6 col-end-10 p-4 rounded-xl xs:my-4 md:my-0 mr-auto shadow-md">
                <h3 class="font-semibold text-lg mb-1">2016-2019</h3>
                <p class="leading-tight text-justify">
                  Studio scolastico della programmazione in C/C++ e HTML
                </p>
              </div>
            </div>
            {/* <!-- left --> */}
            <div class="flex flex-row-reverse md:contents">
              <div class="bg-gray-600 col-start-1 col-end-5 p-4 rounded-xl xs:my-4 md:my-0 ml-auto shadow-md">
                <h3 class="font-semibold text-lg mb-1">2020</h3>
                <p class="leading-tight text-justify">
                  Realizzazione del videogioco in Unity e C#
                </p>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-600 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-600 shadow"
                ></div>
              </div>
            </div>
            {/* <!-- right --> */}
            <div class="flex md:contents">
              <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-600 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-giallo shadow"
                ></div>
              </div>
              <div class="bg-giallo text-gray-700 col-start-6 col-end-10 p-4 rounded-xl xs:my-4 md:my-0 mr-auto shadow-md">
                <h3 class="font-semibold text-lg mb-1">2020</h3>
                <p class="leading-tight text-justify">
                  Inizio carriera universitaria a Parma
                </p>
              </div>
            </div>
            {/* <!-- left --> */}
            <div class="flex flex-row-reverse md:contents">
              <div class="bg-gray-600 col-start-1 col-end-5 p-4 rounded-xl xs:my-4 md:my-0 ml-auto shadow-md">
                <h3 class="font-semibold text-lg mb-1">26-02-2021</h3>
                <p class="leading-tight text-justify">
                  Pubblicazione del sito
                </p>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-600 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-600 shadow"
                ></div>
              </div>
            </div>

            
            
          </div>
        </div>
    )
}