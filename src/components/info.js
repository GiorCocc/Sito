import React from "react"

export default function Info(){
    return(
        <div className="f-f-p pt-16 lg:pt-32 mx-auto container px-4 xl:px-0">
                    <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-gray-900">Contatti</h1>
                    <div className="mt-12 lg:mt-24">
                        {/* Inserire qualche scritta */}
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                            <div className="bg-white cursor-pointer shadow-lg py-10 rounded-3xl flex flex-col items-center hover:bg-giallo hover:shadow-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
                                    <path d="M7.64706 2H18.9412L24.5882 16.1866L17.5294 20.4426C20.5533 26.6039 25.5157 31.5905 31.6471 34.6291L35.8824 27.5358L50 33.2105V44.5597C50 46.0647 49.405 47.5081 48.346 48.5723C47.287 49.6365 45.8506 50.2344 44.3529 50.2344C33.3391 49.5618 22.951 44.8619 15.1487 37.0215C7.34636 29.1811 2.66932 18.7423 2 7.67463C2 6.16963 2.59496 4.72626 3.65398 3.66206C4.71301 2.59786 6.14937 2 7.64706 2Z" stroke="#052E47" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <h2 className="text-lg font-bold tracking-wide mt-4 mb-5 text-gray-900">Telefono</h2>
                                <p className="text-base font-semibold tracking-wide text-gray-900">+39 3455317940</p>
                            </div>
                            <div className="bg-white shadow-lg cursor-pointer py-10 rounded-3xl flex flex-col items-center hover:bg-giallo hover:shadow-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 50 51" fill="none">
                                    <path d="M1 10.0439L17 1L33 10.0439L49 1V40.1904L33 49.2344L17 40.1904L1 49.2344V10.0439Z" stroke="#4A5568" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M17 1V40.1904" stroke="#4A5568" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M33 10.0439V49.2344" stroke="#4A5568" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <h2 className="text-lg font-bold tracking-wide mt-4 mb-5 text-gray-700">Location</h2>
                                <div className="text-gray-700 text-base tracking-wide text-center">
                                    <p className="leading-7">Busseto, 43011</p>
                                    <p className="leading-7">Parma</p>
                                    <p className="leading-7">Italia</p>
                                </div>
                            </div>
                            {/* <div className="bg-white shadow-lg cursor-pointer py-10 rounded-3xl flex flex-col items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width={50} height={51} viewBox="0 0 50 51" fill="none">
                                    <path d="M25 49.2344C38.2548 49.2344 49 38.4367 49 25.1172C49 11.7976 38.2548 1 25 1C11.7452 1 1 11.7976 1 25.1172C1 38.4367 11.7452 49.2344 25 49.2344Z" stroke="#4A5568" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M25 11.7183V25.117L33 33.1562" stroke="#4A5568" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <h2 className="text-lg font-bold tracking-wide mt-4 mb-5 text-gray-700">Office Timings</h2>
                                <div className="text-gray-700 text-base tracking-wide text-center">
                                    <p className="leading-7">Mon - Thu</p>
                                    <p className="leading-7">(1:00 p.m - 10:00 p.m)</p>
                                    <p className="leading-7">Fri</p>
                                    <p>(2:00 p.m - 10:00 p.m)</p>
                                </div>
                            </div> */}
                            <div className="bg-white shadow-lg cursor-pointer py-10 rounded-3xl flex flex-col items-center hover:bg-giallo hover:shadow-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" width={64} height={51} viewBox="0 0 64 51" fill="none">
                                    <path d="M55.8571 1H7.85714C4.07004 1 1 4.08504 1 7.89062V42.3438C1 46.1493 4.07004 49.2344 7.85714 49.2344H55.8571C59.6442 49.2344 62.7142 46.1493 62.7142 42.3438V7.89062C62.7142 4.08504 59.6442 1 55.8571 1Z" stroke="#4A5568" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M1 7.89014L31.8571 28.562L62.7142 7.89014" stroke="#4A5568" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <h2 className="text-lg font-bold tracking-wide mt-4 mb-5 text-gray-700"><a href="mailto: giorcocc@gmail.com">Email</a></h2>
                                <div className="text-gray-700 text-base tracking-wide text-center">
                                    <a href="mailto: giorcocc@gmail.com">giorcocc@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}