import React from "react"

export default function Corsi(){
    return(
        <div className="py-5">
            <h1 className="text-center font-bold text-gray-100 text-4xl">Corsi</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-3">
                <a href="https://www.udemy.com/course/unitycourse/" target="_blank" rel="noreferrer" className="flex flex-col pt-5 gap-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:translate-x-1 ">
                    <div className="flex flex-row">
                        <h1 className="font-bold text-xl text-giallo_chiaro1">Complete C# Unity Game Developer 2D</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#FFC85B" className="ml-5 mt-2">
                            <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                        </svg>
                    </div>
                    <p className="text-lg font-semibold text-gray-100 text-justify">Sviluppo di videogiochi platform in linguaggio C# e motore grafico Unity</p>
                    <p className="text-md font-medium text-gray-300">Novembre 2019 - Maggio 2020</p>
                </a>
                <a href="https://www.udemy.com/course/android-o-sviluppare-app-con-firebase-da-zero/" target="_blank" rel="noreferrer" className="flex flex-col pt-5 gap-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:translate-x-1">
                    <div className="flex flex-row">
                        <h1 className="text-giallo_chiaro1 font-bold text-xl">Android O: Sviluppa App da zero con Firebase</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#FFC85B" className="ml-5 mt-2">
                            <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                        </svg>
                    </div>
                    <p className="text-lg font-semibold text-gray-100 text-justify">Sviluppo di applicazioni android</p>
                    <p className="text-md font-medium text-gray-300">Giugno 2018 - Settembre 2018</p>
                </a>
                <a href="https://www.udemy.com/course/sviluppa-un-app-con-la-grafica-di-instagram-usando-flutter/" target="_blank" rel="noreferrer" className="flex flex-col pt-5 gap-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:translate-x-1">
                    <div className="flex flex-row">
                        <h1 className="text-giallo_chiaro1 font-bold text-xl">Sviluppa un'app usando Flutter</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#FFC85B" className="ml-5 mt-2">
                            <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                        </svg>
                    </div>
                    <p className="text-lg font-semibold text-gray-100 text-justify">Sviluppo di applicazioni crossplatform con Flutter</p>
                    <p className="text-md font-medium text-gray-300">Febbraio 2021 - </p>
                </a>
                <a href="https://www.udemy.com/course/html_e_css_da_zero/" target="_blank" rel="noreferrer" className="flex flex-col pt-5 gap-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:translate-x-1">
                    <div className="flex flex-row">
                        <h1 className="text-giallo_chiaro1 font-bold text-xl">HTML, CSS e Bootstrap da zero</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#FFC85B" className="ml-5 mt-2">
                            <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                        </svg>
                    </div>
                    <p className="text-lg font-semibold text-gray-100 text-justify">Basi per lo sviluppo web e la creazione di pagine online</p>
                    <p className="text-md font-medium text-gray-300">Novembre 2020 - </p>
                </a>

            </div>
        </div>
    )
}