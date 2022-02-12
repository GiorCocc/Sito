import React from "react"
import { Link } from "gatsby"

const Projects = props => (
  <div className="container mx-auto pt-16 px-4 md:px-8">
    <div className="mb-10">
      <h1 className="xl:text-5xl pt-4 xl:pt-0 text-3xl text-gray-800 text-center font-bold mb-4">
        Progetti
      </h1>
      <p className="text-xl text-gray-600 text-center xl:w-3/5 mx-auto w-11/12">
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
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8 mx-auto overflow-hidden">
      {/* <div class="my-2 px-2 w-full overflow-hidden sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3">
        <a class="block overflow-hidden rounded-3xl" href="">
          <img
            class="object-cover w-full h-64"
            src="https://www.hyperui.dev/photos/university-3.jpeg"
            alt=""
          />

          <div class="relative w-full p-6 -mt-8 bg-white rounded-3xl">
            <h5 class="text-xl font-bold text-gray-900">Nome progetto</h5>

            <p class="hidden mt-2 text-gray-500 sm:block">
              Descrizione progetto
            </p>

            <dl class="items-center mt-6 sm:flex">
              <div class="flex items-center">
                <span class="px-4 py-2 flex items-center text-base rounded-full text-blue-600  bg-blue-200 ">
                  <svg
                    width="20"
                    fill="currentColor"
                    height="20"
                    class="mr-2"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                  </svg>
                  Facebook
                </span>
              </div>

              <div class="flex items-center mt-3 sm:ml-6 sm:mt-0">
                <span class="px-4 py-2 flex items-center text-base rounded-full text-blue-600  bg-blue-200 ">
                  <svg
                    width="20"
                    fill="currentColor"
                    height="20"
                    class="mr-2"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                  </svg>
                  Facebook
                </span>
              </div>
            </dl>
          </div>
        </a>
      </div> */}

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
      <article class="p-1 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-300">
        <a
          href="https://github.com/GiorCocc/gioco-esame"
          target="_blank"
          rel="noreferrer"
          class="flex flex-col justify-end h-full p-6 bg-gray-900 sm:p-8 rounded-xl hover:bg-opacity-90"
        >
          <div class="mt-16">
            <h5 class="mt-2 text-xl font-bold text-white">Big Boi Runnin'</h5>
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
      <article class="p-1 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-300">
        <a
          href="https://github.com/GiorCocc/RPG-GAME"
          target="_blank"
          rel="noreferrer"
          class="flex flex-col justify-end h-full p-6 bg-gray-900 sm:p-8 rounded-xl hover:bg-opacity-90"
        >
          <div class="mt-16">
            <h5 class="mt-2 text-xl font-bold text-white">
              RPG Platform
            </h5>
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

    <div className="flex justify-end">
      <Link
        to="/projects/"
        class="inline-flex items-center px-5 py-3 font-medium text-grigio_scuro border border-grigio_scuro rounded-lg hover:bg-giallo hover:border-giallo hover:text-grigio_scuro"
      >
        Altri progetti
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

export default Projects
