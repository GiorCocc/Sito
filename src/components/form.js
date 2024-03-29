import React from "react"

function Form() {
  return (
    <form name="contact" action="https://formspree.io/f/xpzonavl" method="POST">
      <div>
        <div className="mx-auto pb-2 lg:pb-1 f-f-p container lg:mt-14 mt-12 xl:px-0">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            <div className="flex flex-col my-0 lg:my-0 xl:my-0">
              <label
                htmlFor="name"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2 "
              >
                <span className="tracking-wide text-gray-900 text-2xl font-semibold leading-10 ">
                  Nome
                </span>
              </label>
              <input
                name="name"
                type="text"
                className="focus:outline-none text-gray-700 focus:border font-normal w-full h-15 flex items-center p-2 mt-4 text-lg border-solid border-2 border-white rounded-md shadow-lg pb-2 focus:ring-4 focus:ring-yellow-300"
                placeholder="Il tuo nome"
              />
            </div>
            <div className="flex flex-col my-0 lg:my-0 xl:my-0">
              <label
                htmlFor="email"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2"
              >
                <span className="tracking-wide text-gray-900 text-2xl font-semibold leading-10">
                  Email
                </span>
              </label>
              <input
                name="email"
                type="email"
                className="focus:outline-none focus:border text-gray-700 font-normal w-full h-15 flex items-center p-2 mt-4 text-lg border-solid border-2 border-white rounded-md shadow-lg pb-2 focus:ring-4 focus:ring-yellow-300"
                placeholder="esempio@email.com"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mt-8 gap-8">
            <div className="flex flex-col my-0 lg:my-0 xl:my-0">
              <label
                htmlFor="phone"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2"
              >
                <span className="tracking-wide text-gray-900 text-2xl font-semibold leading-10">
                  Telefono
                </span>
              </label>
              <input
                name="phone"
                type="phone"
                className="focus:outline-none text-gray-700 focus:border font-normal w-full h-15 flex items-center p-2 mt-4 text-lg border-white rounded-md shadow-lg pb-2 focus:ring-4 focus:ring-yellow-300"
                placeholder="+00 123456789"
              />
            </div>
            <div className="flex flex-col my-0 lg:my-0 xl:my-0">
              <label
                htmlFor="address"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2"
              >
                <span className="tracking-wide text-gray-900 text-2xl font-semibold leading-10">
                  Indirizzo
                </span>
              </label>
              <input
                name="address"
                type="address"
                className="focus:outline-none focus:border text-gray-700 font-normal w-full h-15 flex items-center p-2 mt-4 text-lg  border-white rounded-md shadow-lg pb-2 focus:ring-4 focus:ring-yellow-300"
                placeholder="Inserisci il tuo indirizzo"
              />
            </div>
          </div>
          <div className="mt-8">
            <div className="flex flex-col my-0 lg:my-0 xl:my-0">
              <label
                htmlFor="message"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2"
              >
                <span className="tracking-wide text-gray-900 text-2xl font-semibold leading-10">
                  Messaggio
                </span>
              </label>
              <textarea
                name="message"
                type="message"
                className="focus:outline-none text-gray-700 focus:border font-normal w-full h-20 flex items-center mt-4 p-2 text-lg border-white rounded-md shadow-lg pb-2 focus:ring-4 focus:ring-yellow-300"
                placeholder="Lascia un messaggio..."
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-1">
            <p className="text-xs mt-5 text-justify">
              Premendo il pulsante Invia accetti di condividere i tuoi dati
              inseriti nel form con il sottoscritto, che assicura un trattamento
              nel pieno rispetto della privacy e della discrezione. Il form è
              fornito da{" "}
              <a href="https://formspree.io" rel="noreferrer" target="_blank">
                {" "}
                FormSpree.io
              </a>
            </p>
            <div className="flex justify-end">
              <button
                type="submit"
                target="_blank"
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
                  <line x1="10" y1="14" x2="21" y2="3" />{" "}
                  <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
                </svg>
                Invia
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Form
