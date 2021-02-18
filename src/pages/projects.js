import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import {graphql} from "gatsby"
import SEO from "../components/seo"
import ProjectImg from "../img/undraw_in_progress_ql66.svg"
import Img from "gatsby-image"

const Projects=(props)=>(
    <div>
      <SEO title="Progetti"></SEO>
      <Header></Header>
      <div className="f-f-p pt-16 lg:pt-32 mx-auto container px-4 md:px-8 xl:px-0">
          <h1 className="text-center text-3xl lg:text-5xl font-semibold tracking-wider text-gray-900">Progetti</h1> 
          <p class="mt-3 text-base text-gray-500 justify-center text-center sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-20"> Qui trovate una raccolta dei progetti che ho realizzato che sono reperibili su <a href="https://github.com/GiorCocc" target="_blank" rel="noreferrer" className="text-giallo">GitHub</a> per un approfondimento e per contribuire, aggiornare e recuperare tutti i miei lavori</p>  
      </div>
      <section class="text-gray-700 body-font px-4 md:px-8">
        <div class="container justify-center lg:pt-24 lg:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mx-auto gap-3">
            <div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-3 py-2">
                  <a href="https://github.com/GiorCocc/programmi-liceo" target="_blank" rel="noreferrer" className="w-1/2 m-1">
                    <div>
                      <Img alt="Programmi C/C++ liceo" className="block object-cover object-center rounded-lg" fluid={props.data.cpp.childImageSharp.fluid}></Img>
                      <div className="flex flex-col justify-between">
                        <p className="place-self-start align-center">Programmi C/C++ Liceo</p>
                        <div className="flex flex-row place-self-end border rounded-full">
                          <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00599C" className="h-7 mx-0.5 p-0.5 place-self-center">
                            <title>C++ icon</title>
                            <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z"/>
                          </svg>
                          <p className="text-center p-0.5 px-1">C/C++</p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="https://github.com/GiorCocc/cpp-project-unipr" target="_blank" rel="noreferrer" className="w-1/2 m-1">
                    <div>
                      <Img alt="Programmi C++ università" className="block object-cover object-center rounded-lg" fluid={props.data.cpp.childImageSharp.fluid}></Img>
                      <div className="flex flex-col justify-between">
                        <p className="place-self-start align-center">Programmi UniPr C++</p>
                        <div className="flex flex-row place-self-end border rounded-full">
                          <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00599C" className="h-7 mx-0.5 p-0.5 place-self-center">
                            <title>C++ icon</title>
                            <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z"/>
                          </svg>
                          <p className="text-center p-0.5 px-1">C/C++</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="py-2">
                  <a href="https://github.com/GiorCocc/gioco-esame" target="_blank" rel="noreferrer" className="w-full m-1">
                    <Img alt="Videogioco C# stile super Mario" className="block object-cover object-center w-full h-full rounded-lg" fluid={props.data.bigboi.childImageSharp.fluid}></Img>
                    <div className="flex flex-col justify-between">
                      <p className="place-self-start align-center">Big Boi Running</p>
                      <div className="flex flex-row place-self-end border rounded-full">
                        <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#239120" className="h-7 mx-0.5 p-0.5 place-self-center">
                          <title>C Sharp icon</title>
                          <path d="M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zM9.426 7.12a5.55 5.55 0 011.985.38v1.181a4.5 4.5 0 00-2.25-.566 3.439 3.439 0 00-2.625 1.087 4.099 4.099 0 00-1.012 2.906 3.9 3.9 0 00.945 2.754 3.217 3.217 0 002.482 1.023 4.657 4.657 0 002.464-.634l-.004 1.08a5.543 5.543 0 01-2.625.555 4.211 4.211 0 01-3.228-1.297 4.793 4.793 0 01-1.212-3.409 5.021 5.021 0 011.365-3.663 4.631 4.631 0 013.473-1.392 5.55 5.55 0 01.12-.004 5.55 5.55 0 01.122 0zm5.863.155h.836l-.555 2.652h1.661l.567-2.652h.81l-.555 2.652 1.732-.004-.15.697H17.91l-.412 1.98h1.852l-.176.698h-1.816l-.58 2.625h-.83l.567-2.625h-1.65l-.555 2.625h-.81l.555-2.625h-1.74l.131-.698h1.748l.401-1.976h-1.826l.138-.697h1.826zm.142 3.345L15 12.6h1.673l.423-1.98z"/>
                        </svg>
                        <p className="text-center p-0.5 px-1">C#</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-3">
                <div className="w-full py-2">
                  <Img alt="Robot cane powered py Raspberry" className="block object-cover object-center w-full h-full rounded-lg" fluid={props.data.dog.childImageSharp.fluid}></Img>
                  <div className="flex flex-col justify-between">
                    <p className="place-self-start align-center">Robot Cane Raspberry</p>
                    <div className="flex flex-row gap-3 overflow-x-auto">
                      <div className="flex flex-row place-self-end border rounded-full">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#C51A4A" className="h-7 mx-0.5 p-0.5 place-self-center">
                            <title>Raspberry Pi icon</title>
                            <path d="M16.111 17.338c-.857.989-1.334 2.79-.709 3.371.596.449 2.201.391 3.385-1.23.86-1.08.569-2.893.081-3.372-.73-.555-1.778.164-2.757 1.243v-.012zm-8.057.3c-.908-1.04-2.088-1.658-2.851-1.199-.51.382-.605 1.685.123 2.967 1.078 1.524 2.596 1.679 3.221 1.307.659-.488.3-2.137-.493-3.075zm4.105 3.145c-1.103-.026-2.798.439-2.776 1.032-.018.403 1.331 1.572 2.705 1.513 1.326.03 2.699-1.139 2.682-1.649-.004-.523-1.498-.927-2.607-.884l-.004-.012zm-.075-13.944c-1.275-.032-2.502.933-2.502 1.493-.004.68 1.008 1.376 2.51 1.394 1.543.01 2.518-.559 2.532-1.26.016-.794-1.394-1.639-2.518-1.627h-.022zm-3.071.532c-2.135-.345-3.913.9-3.842 3.192.07.884 4.63-3.041 3.843-3.177l-.001-.015zm9.749 3.251c.071-2.277-1.709-3.521-3.844-3.176-.787.135 3.772 4.061 3.844 3.176zm.364.824c-1.239-.329-.42 5.049.588 4.615 1.109-.869 1.466-3.446-.588-4.6v-.015zM4.228 16.121c1.007.45 1.827-4.929.589-4.6-2.053 1.153-1.698 3.73-.589 4.615v-.015zm9.415-5.948c-1.146.75-1.354 2.428-.461 3.746.891 1.318 2.543 1.813 3.691 1.078 1.146-.733 1.353-2.412.462-3.746-.892-1.333-2.545-1.813-3.692-1.063v-.015zm-3.096.135c-1.146-.734-2.799-.254-3.689 1.064-.892 1.334-.686 3.012.461 3.761s2.799.269 3.691-1.064c.885-1.318.675-2.997-.465-3.745l.002-.016zm4.369 7.162c-.009-1.393-1.252-2.518-2.781-2.502-1.527.016-2.761 1.139-2.754 2.532v.029c.01 1.394 1.254 2.517 2.783 2.502 1.527 0 2.756-1.138 2.742-2.517v-.029l.01-.015zm3.209-15.133c-2.307 1.184-3.652 2.128-4.389 2.938.377 1.498 2.344 1.558 3.063 1.512-.147-.06-.271-.149-.315-.269.18-.12.821-.016 1.268-.255-.171-.03-.252-.061-.329-.195.419-.135.875-.24 1.141-.465-.143 0-.278.03-.467-.09.377-.194.778-.359 1.095-.658-.196 0-.406 0-.466-.075.346-.21.635-.435.877-.704-.272.045-.39.016-.454-.03.261-.255.593-.479.749-.81-.203.076-.391.09-.522 0 .091-.194.47-.314.69-.779-.215.03-.441.046-.486 0 .098-.389.269-.613.435-.854-.457 0-1.15 0-1.117-.029l.283-.285c-.448-.12-.904.015-1.236.12-.149-.105 0-.255.185-.405-.39.061-.733.135-1.034.256-.164-.15.105-.285.24-.436-.599.12-.839.27-1.094.42-.18-.165-.015-.314.104-.449-.449.164-.674.374-.914.568-.09-.104-.209-.179-.06-.449-.314.18-.554.39-.734.629-.194-.134-.119-.299-.119-.449-.33.27-.54.54-.794.811-.061-.031-.105-.15-.135-.346-.779.75-1.889 2.623-.285 3.356 1.349-1.094 2.981-1.903 4.779-2.503l.041-.075zm-12.259 0c1.798.6 3.419 1.408 4.777 2.518 1.596-.75.493-2.623-.282-3.356-.041.194-.085.329-.135.359-.255-.27-.462-.54-.788-.81 0 .15.077.33-.117.45-.175-.239-.41-.45-.725-.63.149.256.025.33-.056.449-.24-.225-.465-.434-.899-.599.12.149.3.3.12.465-.239-.149-.494-.3-1.078-.42.135.149.404.3.238.45-.315-.122-.66-.212-1.035-.258.181.15.342.289.192.405-.345-.12-.806-.255-1.255-.135l.284.284c.03.037-.659.03-1.121.035.165.225.337.449.435.854-.045.045-.27.016-.483 0 .225.449.599.57.688.765-.135.096-.314.075-.523 0 .164.314.494.539.748.81-.074.044-.18.074-.464.037.239.26.524.494.869.704-.06.07-.271.069-.479.075.314.304.719.464 1.094.663-.195.136-.33.105-.465.105.255.225.72.329 1.139.464-.09.135-.164.165-.344.195.449.254 1.078.135 1.258.27-.045.119-.164.209-.314.27.719.045 2.697-.015 3.072-1.514-.736-.807-2.084-1.752-4.391-2.921l.04.016zM7.6.103c.236-.007.436.135.652.201.529-.17.65.063.91.159.577-.12.752.141 1.029.419l.322-.009c.869.507 1.305 1.536 1.457 2.065.152-.529.584-1.559 1.457-2.065l.321.007c.277-.283.453-.539 1.029-.418.261-.105.38-.33.911-.166.33-.104.62-.375 1.057-.045.368-.149.726-.195 1.045.09.495-.06.653.061.774.21.108 0 .809-.104 1.132.36.81-.09 1.064.464.774.988.165.255.337.494-.05.975.15.269.062.553-.27.913.091.374-.074.63-.374.839.06.51-.48.81-.629.914-.061.3-.181.584-.795.734-.089.449-.464.523-.824.614 1.185.675 2.188 1.558 2.188 3.731l.181.299c1.349.809 2.562 3.402.674 5.514-.119.659-.329 1.124-.511 1.648-.269 2.113-2.082 3.101-2.561 3.221-.689.525-1.438 1.02-2.442 1.363-.942.961-1.976 1.336-2.994 1.336h-.092c-1.033 0-2.063-.375-3.012-1.335-1.007-.344-1.754-.838-2.447-1.363-.479-.12-2.283-1.107-2.562-3.221-.187-.524-.394-1.004-.518-1.662-1.894-2.113-.681-4.705.666-5.515l.172-.3c0-2.172 1.005-3.057 2.188-3.73-.359-.09-.72-.165-.823-.615-.615-.15-.735-.434-.795-.734-.15-.105-.689-.404-.629-.928-.3-.211-.465-.465-.375-.854-.314-.346-.404-.645-.27-.915-.39-.479-.209-.733-.045-.974C3.236 1.329 3.491.76 4.3.85 4.614.385 5.32.491 5.423.491c.121-.15.285-.285.779-.225.314-.285.675-.24 1.049-.102.151-.12.286-.164.406-.164L7.6.103z"/>
                        </svg>
                        <p className="text-center p-0.5 px-1">Raspberry</p>
                      </div>
                      <div className="flex flex-row place-self-end border rounded-full">
                        <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3776AB" className="h-7 mx-0.5 p-0.5 place-self-center">
                          <title>Python icon</title>
                          <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
                        </svg>
                        <p className="text-center p-0.5 px-1">Python</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-3 py-2">
                <a href="https://github.com/GiorCocc/python_project-unipr" target="_blank" rel="noreferrer" className="w-1/2 m-1">
                  <div>
                    <Img alt="Progetti Python Università" className="block object-cover object-center w-full h-full rounded-lg" fluid={props.data.python.childImageSharp.fluid}></Img>
                    <div className="flex flex-col justify-between">
                      <p className="place-self-start align-center">Programmi UniPr python</p>
                      <div className="flex flex-row place-self-end border rounded-full">
                        <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3776AB" className="h-7 mx-0.5 p-0.5 place-self-center">
                          <title>Python icon</title>
                          <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
                        </svg>
                        <p className="text-center p-0.5 px-1">Python</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="https://github.com/GiorCocc/arduino" target="_blank" rel="noreferrer" className="w-1/2 m-1">
                  <div>
                    <Img alt="Progetti Arduino Università" className="block object-cover object-center w-11/12 mx-auto xs:w-full rounded-lg" fluid={props.data.arduino.childImageSharp.fluid}></Img>
                    <div className="flex flex-col justify-between">
                      <p className="place-self-start align-center">Progetti UniPr arduino</p>
                      <div className="flex flex-row gap-3 overflow-x-auto">
                        <div className="flex flex-row place-self-end border rounded-full">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#00979D" className="h-7 mx-0.5 p-0.5 place-self-center">
                                <title>Arduino icon</title>
                                <path d="M23.82 12a5.78 5.78 0 0 0-5.88-5.67c-.29 0-.6.02-.9.05-2.52.37-4.2 2.18-5.13 3.57-.95-1.39-2.64-3.2-5.14-3.57-.3-.03-.6-.05-.9-.05A5.78 5.78 0 0 0 0 12a5.78 5.78 0 0 0 5.87 5.67c.3 0 .6-.02.92-.06 2.52-.36 4.2-2.17 5.14-3.56.95 1.39 2.63 3.2 5.14 3.57.31.03.6.05.91.05A5.78 5.78 0 0 0 23.82 12zM6.48 15.6c-.2.04-.43.04-.63.04A3.77 3.77 0 0 1 2 11.98a3.78 3.78 0 0 1 3.86-3.66c.2 0 .42.02.63.04 2.37.35 3.82 2.67 4.31 3.62-.5.95-1.95 3.3-4.31 3.62zM13 12c.49-.93 1.94-3.27 4.31-3.62.2-.04.42-.04.62-.04A3.76 3.76 0 0 1 21.8 12a3.78 3.78 0 0 1-3.86 3.66c-.2 0-.42-.02-.62-.04-2.36-.35-3.82-2.69-4.31-3.62zm-8.79.59h3.54v-1.16H4.22v1.16zm14.13 0h1.19v-1.16h-1.2v-1.19H17.2v1.2H16v1.15h1.2v1.18h1.15V12.6zM24 7.06c0 .3-.22.51-.53.51a.51.51 0 0 1-.53-.5c0-.28.24-.52.53-.52.31 0 .53.22.53.51zm-.91 0c0 .22.16.4.4.4.22 0 .38-.18.38-.4s-.16-.4-.38-.4c-.24-.02-.4.16-.4.4zm.3.26h-.1V6.8l.2-.01c.09 0 .14.01.18.03.04.02.06.06.06.11 0 .06-.04.1-.11.11.05.02.07.06.09.13l.03.13h-.12c-.02-.02-.02-.07-.04-.13-.02-.05-.04-.07-.11-.07h-.05l-.02.22zm.02-.3h.06c.07 0 .1-.01.1-.07 0-.05-.03-.07-.1-.07h-.07v.14h.01z"/>
                            </svg>
                            <p className="text-center p-0.5 px-1">Arduino</p>
                        </div>
                        <div className="flex flex-row place-self-end border rounded-full">
                          <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00599C" className="h-7 mx-0.5 p-0.5 place-self-center">
                              <title>C++ icon</title>
                              <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z"/>
                            </svg>
                            <p className="text-center p-0.5 px-1">C</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="p-4 md:p-8 mx-auto">
              <ProjectImg className="w-full h-full max-w-4xl justify-center"></ProjectImg>
            </div>
            <div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-3 py-2">
                  <div className="w-1/2 m-1">
                    <a href="https://github.com/GiorCocc/Sito" target="_blank" rel="noreferrer" className="">
                      <Img className="object-cover object-center w-full mx-auto xs:w-11/12 rounded-lg" fluid={props.data.logo.childImageSharp.fluid} alt="Logo del sito"></Img>
                      <div className="flex flex-col justify-between">
                        <p className="place-self-start align-center">Portfolio personale</p>
                        <div className="flex flex-row gap-3 overflow-x-auto">
                          <div className="flex flex-row place-self-end border rounded-full">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#E34F26" className="h-7 mx-1 p-0.5 place-self-center">
                                <title>HTML5 icon</title>
                                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                            </svg>
                            <p className="text-center p-0.5 px-1">HTML</p>
                          </div>
                          <div className="flex flex-row place-self-end border rounded-full">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#1572B6" className="h-7 mx-1 p-0.5 place-self-center">
                              <title>CSS3 icon</title>
                              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
                            </svg>
                            <p className="text-center p-0.5 px-1">CSS</p>
                          </div>
                          <div className="flex flex-row place-self-end border rounded-full">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#F7DF1E" className="h-7 mx-1 p-0.5 place-self-center">
                              <title>JavaScript icon</title>
                              <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
                            </svg>
                            <p className="text-center p-0.5 px-1">Javascript</p>
                          </div>
                        </div>
                        
                      </div>
                    </a>
                  </div>
                  <a href="https://github.com/GiorCocc/password-generator" rel="noreferrer" target="_blank" className="w-1/2 m-0.5">
                    <div>
                      <Img alt="Programma per la generazione di password casuali" className="block object-cover object-center w-full h-full rounded-lg" fluid={props.data.password.childImageSharp.fluid}></Img>
                      <div className="flex flex-col justify-between">
                        <p className="place-self-start align-center">Generatore di Password</p>
                        <div className="flex flex-row place-self-end border rounded-full">
                          <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3776AB" className="h-7 mx-0.5 p-0.5 place-self-center">
                            <title>Python icon</title>
                            <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
                          </svg>
                          <p className="text-center p-0.5 px-1">Python</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/* <div className="w-full py-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg" src="https://dummyimage.com/600x360/F3F4F7/8693ac"></img>
                  <div className="flex flex-col justify-between">
                    <p className="place-self-start align-center">Nome progetto</p>
                    <div className="place-self-end border rounded-full">
                      <p className="text-center">Categoria</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-3 py-2">
                  <a href="https://github.com/GiorCocc/bubble-bobble" target="_blank" rel="noreferrer" className="w-1/2 m-1">
                    <div>
                      <Img alt="Bubble Bobble" className="block object-cover object-center w-full h-full rounded-lg" fluid={props.data.bb.childImageSharp.fluid}></Img>
                      <div className="flex flex-col justify-between">
                        <p className="place-self-start align-center">Blubble Bobble</p>
                        <div className="flex flex-row place-self-end border rounded-full">
                          <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3776AB" className="h-7 mx-0.5 p-0.5 place-self-center">
                            <title>Python icon</title>
                            <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
                          </svg>
                          <p className="text-center p-0.5 px-1">Python</p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="https://github.com/GiorCocc/3-in-a-row" target="_blank" rel="noreferrer" className="w-1/2 m-1">
                    <div>
                      <Img alt="3-in-a-row" className="block object-cover object-center w-full h-full rounded-lg" fluid={props.data.inarow.childImageSharp.fluid}></Img>
                      <div className="flex flex-col justify-between">
                        <p className="place-self-start align-center">3 in a Row</p>
                        <div className="flex flex-row place-self-end border rounded-full">
                          <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3776AB" className="h-7 mx-0.5 p-0.5 place-self-center">
                            <title>Python icon</title>
                            <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
                          </svg>
                          <p className="text-center p-0.5 px-1">Python</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div>
                  {/* <a href="https://github.com/GiorCocc/gioco-esame" target="_blank" rel="noreferrer" className="w-full py-2">
                    <Img alt="Videogioco C# stile super Mario" className="block object-cover object-center w-full h-full rounded-lg" fluid={props.data.bigboi.childImageSharp.fluid}></Img>
                    <div className="flex flex-col justify-between">
                      <p className="place-self-start align-center">Big Boi Running</p>
                      <div className="flex flex-row place-self-end border rounded-full">
                        <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#239120" className="h-7 mx-0.5 p-0.5 place-self-center">
                          <title>C Sharp icon</title>
                          <path d="M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zM9.426 7.12a5.55 5.55 0 011.985.38v1.181a4.5 4.5 0 00-2.25-.566 3.439 3.439 0 00-2.625 1.087 4.099 4.099 0 00-1.012 2.906 3.9 3.9 0 00.945 2.754 3.217 3.217 0 002.482 1.023 4.657 4.657 0 002.464-.634l-.004 1.08a5.543 5.543 0 01-2.625.555 4.211 4.211 0 01-3.228-1.297 4.793 4.793 0 01-1.212-3.409 5.021 5.021 0 011.365-3.663 4.631 4.631 0 013.473-1.392 5.55 5.55 0 01.12-.004 5.55 5.55 0 01.122 0zm5.863.155h.836l-.555 2.652h1.661l.567-2.652h.81l-.555 2.652 1.732-.004-.15.697H17.91l-.412 1.98h1.852l-.176.698h-1.816l-.58 2.625h-.83l.567-2.625h-1.65l-.555 2.625h-.81l.555-2.625h-1.74l.131-.698h1.748l.401-1.976h-1.826l.138-.697h1.826zm.142 3.345L15 12.6h1.673l.423-1.98z"/>
                        </svg>
                        <p className="text-center p-0.5 px-1">C#</p>
                      </div>
                    </div>
                  </a> */}
                </div>
              </div>
            </div>

        </div>
      </div>
    </section>
    
    
                                    
      
      {/* Mettere in evidenza i progetti che sto svolgendo */}
      {/* Aggiungere uno schema a griglia con i progetti svolti */}
      {/* Elencare cose che possono servire al sito */}
      <Footer></Footer>
    </div>
  )

export default Projects

export const data = graphql`
  query 
  {
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
    logo: file(relativePath: { eq: "Logo-iniziali-e-nome11.png" }) {
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