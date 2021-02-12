import React from "react"
import SEO from "../components/seo"
import FullLogo from "../img/Full_name_logo-removebg-preview.svg"
import NotFound from "../img/undraw_page_not_found_su7k.svg"


export default function Error(){
    return(
        <div>
            <SEO title="Error!" description="Errore nel caricamento della pagina. Forse hai digitato male il link o qualcosa è andato storto..."></SEO>
            <div className="flex flex-col place-items-center gap-6 p-10 h-screen">
                <NotFound className="w-3/12 h-full"></NotFound>
                <h1 class="text-5xl font-bold text-giallo">Ops...</h1>
                <p className="text-xl text-gray-600 text-center font-semibold xl:w-3/5 mx-auto w-11/12">
                    Pare che la pagina che hai cercato non esista...
                </p>
                <p className="text-xl text-gray-600 text-center xl:w-3/5 mx-auto w-11/12">
                    Se hai riscontrato qualche problema, per favore, contattami con il form dedicato disponibile sul sito
                </p>
                <div className="bg-gray-700 hover:bg-giallo text-2xl m-5 p-5 rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    <a href="/" className="h-full w-full text-gray-200 hover:text-gray-700">Torna al sito</a>
                </div>
                <FullLogo className="w-2/3 h-full "></FullLogo>
            </div>
        </div>
    )
}
