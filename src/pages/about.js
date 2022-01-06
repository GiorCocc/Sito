import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Skills from "../components/skill"
import Tools from "../components/tools"
import Form from "../components/form"
import ContactImg from "../img/undraw_contact_us_15o2.svg"
import SEO from "../components/seo"
import Corsi from "../components/corsi"
import Card from "../components/card-contatti"
import SkillImg from "../img/undraw_developer_activity_bv83.svg"
import Progetti from "../components/progetti"
import Work from "../img/undraw_team_work_k-80-m.svg"

export default function Post() {
  return (
    <div>
      <SEO
        title="About"
        description="Un po' di informazioni di me, su come lavoro, cosa ho fatto nella vita e poche altre cose"
      ></SEO>
      <Header></Header>
      <div className="f-f-p pt-16 lg:pt-32 mx-auto container xl:px-0">
        <h1 className="text-center text-3xl lg:text-5xl font-semibold tracking-wider text-gray-900">
          About Me
        </h1>
        <Card></Card>
        <h1 className="text-center text-3xl lg:text-5xl font-semibold tracking-wider text-gray-900">
          Per riassumere
        </h1>
        <div class="flex flex-wrap -mx-3 overflow-hidden">
          <div class="my-3 px-3 w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
            <div className="">
              <h2 className="pt-10 text-3xl text-gray-800 font-semibold mb-4">
                Esperienze lavorative
              </h2>
              <div className="flex flex-col p-5 gap-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:translate-x-1 ">
                <div className="flex flex-row">
                  <h1 className="font-bold text-xl text-giallo">
                    Emiliane Conserve SRL
                  </h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#FFC85B"
                    className="ml-5 mt-2"
                  >
                    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-gray-500 text-justify">
                  Addetto imballaggi macropack e paratia polpa pomodoro
                </p>
                <p className="text-md font-medium text-gray-300">
                  Agosto 2021 - Settembre 2021
                </p>
              </div>
            </div>
          </div>

          <div class="my-3 px-3 w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
            <div className="">
              <h2 className="pt-10 text-3xl text-gray-800 font-semibold mb-4">
                Istruzione
              </h2>
              <div className="flex flex-col p-5 gap-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:translate-x-1 ">
                <div className="flex flex-row">
                  <h1 className="font-bold text-xl text-giallo">
                    Università degli Studi di Parma
                  </h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#FFC85B"
                    className="ml-5 mt-2"
                  >
                    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-gray-500 text-justify">
                  Lurea Triennale - Ingegneria informatica, elettronica e
                  telecomunicazioni
                </p>
                <p className="text-md font-medium text-gray-300">2020</p>
              </div>
              <div className="flex flex-col p-5 gap-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:translate-x-1 ">
                <div className="flex flex-row">
                  <h1 className="font-bold text-xl text-giallo">
                    Liceo Scientifico
                  </h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#FFC85B"
                    className="ml-5 mt-2"
                  >
                    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-gray-500 text-justify">
                  Indirizzo Scienze Applicate
                </p>
                <p className="text-md font-medium text-gray-300">2015 - 2020</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 py-8">
          {/* Inserire qui informazioni lavorative, istruzione, corsi... */}

          <div className="col-span-2">
            <h2 className="pt-10 text-3xl text-gray-800 font-bold mb-4">
              Corsi
            </h2>
            <Corsi></Corsi>
          </div>
        </div>
        <div className=" bg-gray-100 rounded-2xl shadow-xl p-4 md:p-8 mb-8 mx-auto">
          <h1 className="xl:text-5xl pt-10 text-3xl text-grigio_scuro text-center font-bold mb-4">
            Skills e Strumenti
          </h1>
          <p className="text-xl text-grigio_scuro text-center xl:w-3/5 mx-auto w-11/12 pb-5">
            Tutti i linguaggi di programmazione e di marcatura che conosco e che
            sono in grado di gestire. Al momento sto imparando javascript, lo
            sviluppo di siti web e mobile
          </p>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2">
            <SkillImg className="w-full h-3/4 my-auto md:h-auto  p-8"></SkillImg>
            <Skills className="pb-4"></Skills>
          </div>
          <Tools></Tools>
        </div>
        <Progetti></Progetti>

        {/* da sistemare */}

        <div className="overflow-y-hidden">
          <div className="xl:mx-auto xl:container  xl:px-20 md:px-6 px-4 py-12">
            <div className="lg:flex items-center justify-center lg:space-x-12 2xl:space-x-6">
              <div className>
                <h1 className="lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
                  Perchè scegliermi
                </h1>
                <div className="lg:hidden lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
                  <Work className="w-4/5 h-4/5 mx-auto"></Work>
                </div>
                <div className="mt-6 md:mt-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:mt-6 2xl:mt-12">
                  <div className="flex items-center">
                    <div className="w-16 h-16 relative">
                      <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <div className="w-14 h-14 bg-giallo rounded-xl">
                          <svg
                            class="h-10 w-10 text-white mx-auto my-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start flex-col ml-6 pt-8">
                      <h2 className="text-lg font-semibold leading-4 text-gray-800">
                        Scadenze
                      </h2>
                      <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                        Ogni progetto portato a termine in tempo
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 h-16 relative">
                      <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <div className="w-14 h-14 bg-giallo rounded-xl">
                          <svg
                            class="h-10 w-10 text-white mx-auto my-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start flex-col ml-6 pt-8">
                      <h2 className="text-lg font-semibold leading-4 text-gray-800">
                        Passione
                      </h2>
                      <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                        Non abbandono nulla e mi impegno sempre
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 h-16 relative">
                      <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <div className="w-14 h-14 bg-giallo rounded-xl">
                          <svg
                            class="h-10 w-10 text-white mx-auto my-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start flex-col ml-6 pt-8">
                      <h2 className="text-lg font-semibold leading-4 text-gray-800">
                        Idee creative
                      </h2>
                      <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                        Sempre idee e soluzioni nuove per ogni progetto
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 h-16 relative">
                      <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <div className="w-14 h-14 bg-giallo rounded-xl">
                          <svg
                            class="h-10 w-10 text-white mx-auto my-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start flex-col ml-6 pt-8">
                      <h2 className="text-lg font-semibold leading-4 text-gray-800">
                        Traguardi
                      </h2>
                      <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                        Risultati sempre meritevoli di attenzione
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
                <Work className="w-full mx-auto"></Work>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto">
          <div className="place-items-auto bg-giallo_chiaro1 rounded-3xl p-4 md:p-8">
            <h1 className="xl:text-5xl pt-10 text-3xl text-gray-800 text-center font-bold mb-4">
              Contatti
            </h1>
            <p className="text-xl text-gray-600 text-center xl:w-3/5 mx-auto w-11/12">
              Se vuoi lasciare un messaggio, anche anonimo, compila questo form
              in modo che tu possa essere contattato da me in qualunque momento
              (tutti i campi, ad eccezione del messaggio sono facoltativi)
            </p>

            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
              <div>
                <Form></Form>
              </div>
              <div>
                <ContactImg className="w-full h-full lg:p-8"></ContactImg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
