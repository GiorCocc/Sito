import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import {graphql} from "gatsby"
import img from "../img/me.jpg"

export default function Projects({data}) {
  return (
    <div>
      <title>{data.site.siteMetadata.title} ~ Progetti</title>
      <Header></Header>
      <div className="f-f-p pt-16 lg:pt-32 mx-auto container px-4 xl:px-0">
          <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-gray-900">Progetti</h1> 
          <p className="m-5 text-center">Qui trovate una raccolta dei progetti che ho realizzato che sono reperibili su github per un approfondimento</p>  
      </div>
      <section class="overflow-hidden text-gray-700 body-font">
        <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3">
            <div>
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <div className="w-1/2 p-1 md:p-2">
                    <div>
                      <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg" src="https://dummyimage.com/500x300/F3F4F7/8693ac"></img>
                      <div className="flex flex-col justify-between">
                        <p className="place-self-start align-center">Nome progetto</p>
                        <div className="place-self-end border rounded-full">
                          <p className="text-center">Categoria</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 p-1 md:p-2">
                    <div>
                      <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg" src="https://dummyimage.com/500x300/F3F4F7/8693ac"></img>
                      <div className="flex flex-col justify-between">
                        <p className="place-self-start align-center">Nome progetto</p>
                        <div className="place-self-end border rounded-full">
                          <p className="text-center">Categoria</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg" src="https://dummyimage.com/600x360/F3F4F7/8693ac"></img>
                  <div className="flex flex-col justify-between">
                    <p className="place-self-start align-center">Nome progetto</p>
                    <div className="place-self-end border rounded-full">
                      <p className="text-center">Categoria</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <div className="w-full p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg" src="https://dummyimage.com/600x360/F3F4F7/8693ac"></img>
                  <div className="flex flex-col justify-between">
                    <p className="place-self-start align-center">Nome Progetto</p>
                    <div className="place-self-end border rounded-full">
                        <p className="text-center">Categoria</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-1/2 p-1 md:p-2">
                  <div>
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg" src="https://dummyimage.com/500x300/F3F4F7/8693ac"></img>
                    <div className="flex flex-col justify-between">
                      <p className="place-self-start align-center">Nome progetto</p>
                      <div className="place-self-end border rounded-full">
                        <p className="text-center">Categoria</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <div>
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg" src="https://dummyimage.com/500x300/F3F4F7/8693ac"></img>
                    <div className="flex flex-col justify-between">
                      <p className="place-self-start align-center">Nome progetto</p>
                      <div className="place-self-end border rounded-full">
                        <p className="text-center">Categoria</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <div className="w-1/2 p-1 md:p-2">
                    <div>
                      <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg" src="https://dummyimage.com/500x300/F3F4F7/8693ac"></img>
                      <div className="flex flex-col justify-between">
                        <p className="place-self-start align-center">Nome progetto</p>
                        <div className="place-self-end border rounded-full">
                          <p className="text-center">Categoria</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 p-1 md:p-2">
                    <div>
                      <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg" src="https://dummyimage.com/500x300/F3F4F7/8693ac"></img>
                      <div className="flex flex-col justify-between">
                        <p className="place-self-start align-center">Nome progetto</p>
                        <div className="place-self-end border rounded-full">
                          <p className="text-center">Categoria</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg" src="https://dummyimage.com/600x360/F3F4F7/8693ac"></img>
                  <div className="flex flex-col justify-between">
                    <p className="place-self-start align-center">Nome progetto</p>
                    <div className="place-self-end border rounded-full">
                      <p className="text-center">Categoria</p>
                    </div>
                  </div>
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
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`