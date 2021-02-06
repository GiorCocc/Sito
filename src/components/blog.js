import React from "react";
function Blog() {
    return (
        <>
            <div id="blog" className="bg-transparent px-4 xl:px-0 py-12 mt-10 lg:mt-20 f-f-p">
                <div className="mx-auto container">
                    <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-gray-900">Ultimi post</h1>
                    <div className="mt-12 lg:mt-24">
                        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                            <div className="rounded-2xl shadow-lg hover:shadow-xl">
                                <img className="w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(1).png" alt="computer" />
                                <div className="py-4 px-8 w-full flex justify-between bg-giallo">
                                    <p className="text-sm text-white font-semibold tracking-wide">Autore</p>
                                    <p className="text-sm text-white font-semibold tracking-wide">Data</p>
                                </div>
                                <div className="bg-white px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                                    <h1 className="text-4xl text-gray-900 font-semibold tracking-wider">Titolo post</h1>
                                    <p className="text-gray-700 text-lg leading-8 tracking-wide mt-6 w-11/12">Primo paragrafo del post</p>
                                    <div className="w-full mt-4 justify-end flex items-center cursor-pointer">
                                        <p className="text-base tracking-wide text-giallo">Read more</p>
                                        <svg className="ml-3 lg:ml-6" xmlns="http://www.w3.org/2000/svg" width={20} height={18} viewBox="0 0 20 18" fill="none">
                                            <path d="M11.7998 1L18.9998 8.53662L11.7998 16.0732" stroke="#4338ca" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M1 8.53662H19" stroke="#4338ca" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="h-5 w-2" />
                                </div>
                            </div>
                            <div>
                                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                                    <div>
                                        <img className="w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(2).png" alt="games" />
                                        <div className="py-2 px-4 w-full flex justify-between bg-giallo">
                                            <p className="text-sm text-white font-semibold tracking-wide">Autore</p>
                                            <p className="text-sm text-white font-semibold tracking-wide">Data</p>
                                        </div>
                                        <div className="bg-white px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                            <h1 className="text-lg text-gray-900 font-semibold tracking-wider">Titolo post</h1>
                                            <p className="text-gray-700 text-base leading-8 pr-4 tracking-wide mt-2">Primo paragrafo del post</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img className="w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(3).png" alt="notes" />
                                        <div className="py-2 px-4 w-full flex justify-between bg-giallo">
                                            <p className="text-sm text-white font-semibold tracking-wide">Autore</p>
                                            <p className="text-sm text-white font-semibold tracking-wide">Data</p>
                                        </div>
                                        <div className="bg-white px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                            <h1 className="text-lg text-gray-900 font-semibold tracking-wider">Titolo post</h1>
                                            <p className="text-gray-700 text-base leading-8 pr-4 tracking-wide mt-2">Primo paragrafo del post</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                                    <div>
                                        <img className="w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(4).png" alt="laptop" />
                                        <div className="py-2 px-4 w-full flex justify-between bg-giallo">
                                            <p className="text-sm text-white font-semibold tracking-wide">Autore</p>
                                            <p className="text-sm text-white font-semibold tracking-wide">Data</p>
                                        </div>
                                        <div className="bg-white px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                            <h1 className="text-lg text-gray-900 font-semibold tracking-wider">Titolo del post</h1>
                                            <p className="text-gray-700 text-base leading-8 pr-4 tracking-wide mt-2">Primo paragrafo del post</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img className="w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(5).png" alt="worker" />
                                        <div className="py-2 px-4 w-full flex justify-between bg-giallo">
                                            <p className="text-sm text-white font-semibold tracking-wide">Autore</p>
                                            <p className="text-sm text-white font-semibold tracking-wide">Data</p>
                                        </div>
                                        <div className="bg-white px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                            <h1 className="text-lg text-gray-900 font-semibold tracking-wider">Titolo</h1>
                                            <p className="text-gray-700 text-base leading-8 pr-4 tracking-wide mt-2">Primo paragrafo del post</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog;
