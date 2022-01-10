import React from "react"
import { Link } from "gatsby"

function SummaryPost() {
  return (
    <div className="flex flex-col mx-auto pt-16 px-4 md:px-8">
      <div className="mb-10">
        <h1 className="xl:text-5xl pt-4 xl:pt-0 text-3xl text-gray-800 text-center font-bold mb-4">
          Ultimi post pubblicati
        </h1>
        <p className="text-xl text-gray-600 text-center xl:w-3/5 mx-auto w-11/12">
          Questo sito non ha la pretesa di diventare un punto di riferito nel
          mondo dei blog. Vuole essere solo un piccolo spazio in cui voglio
          lasciare alcuni pensieri più strutturati in modo da poterli reperire
          più facilmente. E chi lo sa, magari sono anche utili a qualcun'altro,
          oltre che a me
        </p>
      </div>
      <div className="lg:flex md:flex xl:justify-around sm:flex flex-wrap md:justify-around sm:justify-around lg:justify-around">
        <div class="flex flex-wrap my-10 -mx-2 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2">
          <div class="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3">
            <div class="p-1 bg-gradient-to-br from-orange-500 to-yellow-300 rounded-2xl">
              <Link
                class="block p-6 bg-white sm:p-8 rounded-xl"
                to="/perche-sito-web/"
              >
                <div class="mt-16 sm:pr-8">
                  <h5 class="text-xl font-bold text-gray-900">
                    Perchè ho creato un sito web?
                  </h5>

                  <p class="mt-2 text-sm text-gray-500">
                    2020-02-26, di Giorgio Coccapani
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div class="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3">
            <div class="p-1 bg-gradient-to-br from-orange-500 to-yellow-300 rounded-2xl">
              <Link
                class="block p-6 bg-white sm:p-8 rounded-xl"
                to="/aggiornamento-sito/"
              >
                <div class="mt-16 sm:pr-8">
                  <h5 class="text-xl font-bold text-gray-900">
                    Primo aggiornamento del sito
                  </h5>

                  <p class="mt-2 text-sm text-gray-500">
                    2022-01-11, di Giorgio Coccapani
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div class="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3">
            <div class="p-1 bg-gradient-to-br from-gray-500 to-gray-300 rounded-2xl animate-pulse">
              <Link class="block p-6 bg-white sm:p-8 rounded-xl" to="">
                <div class="mt-16 sm:pr-8">
                  <div class="h-14 pt-2 w-36 text-gray-500 p-1 bg-gradient-to-br from-gray-500 to-gray-300 rounded-md animate-pulse"></div>
                  <div class="h-4 mt-2 mb-1 text-gray-500 p-1 bg-gradient-to-br from-gray-500 to-gray-300 rounded-md animate-pulse"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-row justify-end mb-10">
        <Link to="/post/">
          <div className="flex flex-row gap-4 align-middle">
            <p className="text-xl text-giallo font-bold align-middle ">
              Guarda gli altri articoli
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#FFC85B"
            >
              <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
            </svg>
          </div>
        </Link>
      </div> */}
      <div className="flex justify-end">
        <Link
          to="/post/"
          class="inline-flex items-center px-5 py-3 font-medium text-grigio_scuro border border-grigio_scuro rounded-lg hover:bg-giallo hover:border-giallo hover:text-grigio_scuro"
        >
          Altri articoli
          <svg
            class="flex-shrink-0 w-5 h-5 ml-3"
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
            <line x1="13" y1="18" x2="19" y2="12" />{" "}
            <line x1="13" y1="6" x2="19" y2="12" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default SummaryPost
