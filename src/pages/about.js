import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import {graphql} from "gatsby"
import img from "../img/me.jpg"
import Skills from "../components/skill"
import SkillImg from "../img/undraw_developer_activity_bv83.svg"
import Tools from "../components/tools"
import Form from "../components/form"
import ContactImg from "../img/undraw_contact_us_15o2.svg"
import SEO from "../components/seo"



export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default function Post({data}) {
  return (
    <div>
      <SEO title="About"></SEO>
      <Header></Header>
      <div className="f-f-p pt-16 lg:pt-32 mx-auto container xl:px-0">
        <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-gray-900">Info e contatti</h1>
        <div className="md:max-w-screen mx-4 flex flex-wrap pt-4 my-8">
        <aside className="w-full bg-giallo_chiaro lg:w-1/3 py-9 lg:border-r border-line lg:px-6 xl:px-12 rounded-xl">
          <div className="flex flex-col h-full justify-between m-4">
            <div>
              <h2 className="text-front text-3xl font-thin leading-none mb-4 xs:text-center">Studente</h2>
              <p className="text-front text-md font-thin leading-none mb-4 xs:text-center">Ingegneria informatica, elettronica e delle telecomunicazioni</p>
              <h1 className="text-4xl tracking-tight font-bold text-black sm:text-5xl xs:text-center md:text-6xl">Giorgio Coccapani</h1>
              <div className="relative inline-block leading-none">
                <div className="grid place-items-center">
                  <div className="rounded-full relative z-10">
                    <img aria-hidden="true" className="rounded-full mx-auto my-5 xs:w-1/2 lg:w-full place-self-center" src={img} alt="Giorgio Coccapani"></img>
                  </div>
                </div>
                <div className="flex my-3 gap-3 w-full justify-between">
                  {/* Inserire le voci sulla posizione, sulla condizione e una per scaricare il file con il curriculum */}
                  <p className="break-words w-full">Focus on:</p>
                  <p className="break-words text-justify w-full">Javascript e web developement</p>  
                </div>
                <div className="flex my-3 gap-3 w-full justify-between">
                  <p className="break-words w-full">Condizione:</p>
                  <p className="break-words w-full">Disponibile</p>  
                </div>
                {/* <div className="bg-linkedin rounded-xl p-3">
                  <div className="flex flex-row justify-around">
                    <p className="text-center text-white font-bold">Download</p>
                  </div>
                </div> */}
                <h1 className="text-center text-2xl text-bold mb-3">Contatti</h1>
                <div className="grid xs:grid-cols-1 sm:grid-cols-2 sm:gap-6 lg:grid-cols-1 xl:grid-cols-2 xl:gap-6 ">
                  <div className="bg-white mb-6 lg:mb-0 xl:mb-6 shadow-lg py-10 rounded-3xl flex flex-col items-center hover:bg-giallo hover:shadow-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
                      <path d="M7.64706 2H18.9412L24.5882 16.1866L17.5294 20.4426C20.5533 26.6039 25.5157 31.5905 31.6471 34.6291L35.8824 27.5358L50 33.2105V44.5597C50 46.0647 49.405 47.5081 48.346 48.5723C47.287 49.6365 45.8506 50.2344 44.3529 50.2344C33.3391 49.5618 22.951 44.8619 15.1487 37.0215C7.34636 29.1811 2.66932 18.7423 2 7.67463C2 6.16963 2.59496 4.72626 3.65398 3.66206C4.71301 2.59786 6.14937 2 7.64706 2Z" stroke="#052E47" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h2 className="text-lg font-bold tracking-wide mt-4 mb-5 text-gray-900">Telefono</h2>
                    <p className="text-base font-semibold tracking-wide text-gray-900">+39 3455317940</p>
                  </div>
                  <div className="bg-white mb-6 shadow-lg py-10 rounded-3xl flex flex-col items-center hover:bg-giallo hover:shadow-2xl">
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
                </div>
                <a href="mailto: giorcocc@gmail.com">
                  <div className="bg-white shadow-lg  py-10 rounded-3xl flex flex-col items-center hover:bg-giallo hover:shadow-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width={64} height={51} viewBox="0 0 64 51" fill="none">
                      <path d="M55.8571 1H7.85714C4.07004 1 1 4.08504 1 7.89062V42.3438C1 46.1493 4.07004 49.2344 7.85714 49.2344H55.8571C59.6442 49.2344 62.7142 46.1493 62.7142 42.3438V7.89062C62.7142 4.08504 59.6442 1 55.8571 1Z" stroke="#4A5568" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M1 7.89014L31.8571 28.562L62.7142 7.89014" stroke="#4A5568" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h2 className="text-lg font-bold tracking-wide mt-4 mb-5 text-gray-700"><a href="mailto: giorcocc@gmail.com">Email</a></h2>
                    <div className="text-gray-700 text-base tracking-wide text-center">
                      <p>giorcocc@gmail.com</p>
                    </div>
                  </div>
                </a>
                
              </div>
            </div>
          </div>
        </aside>
        <main className="lg:w-2/3 lg:pl-8 xl:pl-12">
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis orci tortor. Ut quis ultricies erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc tincidunt enim non est scelerisque, id venenatis odio commodo. Aenean aliquet ultricies ipsum ac placerat. Suspendisse potenti. In hac habitasse platea dictumst. Nunc tempor interdum ipsum nec pellentesque. Vivamus felis turpis, dapibus sed purus non, malesuada pretium sem. Proin tempor odio odio, consectetur sollicitudin mauris elementum nec. Nam lobortis lectus sit amet consectetur auctor. Mauris vel tortor pulvinar, rutrum mi eget, luctus turpis. Maecenas dictum porttitor varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ultrices vel sapien a interdum. Donec interdum mauris porttitor auctor accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam leo ipsum, convallis in vestibulum ac, pretium tempus nunc. Mauris molestie justo eu iaculis gravida. Sed efficitur posuere justo, ac auctor dui interdum sit amet. Nullam non fringilla mauris. Sed eget risus nec ligula egestas aliquet eu sed dui. Cras consequat efficitur felis, at facilisis tortor consectetur in. Duis egestas, dolor venenatis mollis auctor, orci ipsum condimentum odio, eu sollicitudin purus nulla a mauris. Maecenas hendrerit auctor luctus. Suspendisse sit amet lectus non leo dignissim rhoncus eu sit amet dolor. Praesent dictum accumsan diam, a consectetur libero feugiat et. Suspendisse potenti. Morbi ultrices vulputate sapien, sed elementum velit fringilla quis. Nam orci elit, lacinia ac nulla ac, fermentum bibendum leo. In euismod tortor nec mi sollicitudin, rhoncus malesuada erat sodales. Integer auctor cursus dignissim.Donec non mollis purus. Mauris et fringilla eros. Integer dapibus quam ac lectus commodo, volutpat tincidunt dui placerat. Suspendisse consectetur posuere magna, gravida auctor erat finibus sit amet. Aenean maximus mattis ex vel sollicitudin. Mauris pellentesque tortor at magna lacinia, a gravida tortor venenatis. Nulla facilisi. Nam bibendum placerat ipsum, nec lacinia risus ultricies in. Ut dolor nibh, molestie consequat imperdiet egestas, mollis vitae mi. Quisque et tortor sed nisi faucibus congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus elementum volutpat. Sed pretium aliquet lacus eget fermentum. Aliquam blandit, velit eget hendrerit euismod, libero libero dictum arcu, eget rutrum nibh libero eget ipsum. Maecenas imperdiet purus a nunc fringilla, vitae accumsan erat efficitur.Praesent ut nunc a arcu vestibulum lobortis in vitae mauris. Fusce semper non nisi eget vestibulum. Sed a tortor porta, lacinia augue non, volutpat mauris. Nullam tempus blandit lorem sit amet lacinia. Ut laoreet id metus et convallis. Fusce lacinia sagittis posuere. Vestibulum ac purus sapien. Nulla elementum sem ut hendrerit pulvinar. Mauris a enim non diam mollis lobortis. Pellentesque ultrices mauris sit amet massa euismod porta. Donec rutrum pharetra nisl ac imperdiet.       
          </p>
          
        </main>








        
        <div className=" bg-gray-700 rounded-2xl p-8 my-8">
          <h1 className="xl:text-5xl pt-10 text-3xl text-gray-200 text-center font-bold mb-4">Skills e Strumenti</h1>
          {/* <p className="text-xl text-gray-200 text-center xl:w-3/5 mx-auto w-11/12">
            [testo]
          </p> */}
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 pt-2">
            <SkillImg className="w-full h-auto lg:p-8"></SkillImg>
            <Skills></Skills>
          </div>
          <Tools></Tools>
        </div>
        <div className="place-items-auto rounded-3xl">
          <h1 className="xl:text-5xl pt-10 text-3xl text-gray-800 text-center font-bold mb-4">Contatti</h1>
          <p className="text-xl text-gray-600 text-center xl:w-3/5 mx-auto w-11/12">
            Se vuoi lasciare un messaggio, anche anonimo, compila questo form in modo che tu possa essere contattato da me in qualunque momento (tutti i campi, ad eccezione del messaggio sono facoltativi)
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:pl-2 xl:pl-6 p-5 ">
            <div>
              <ContactImg className="w-full h-full lg:p-8"></ContactImg>
            </div>
            <div>
              <Form></Form>
            </div>
          </div>
        </div>
        
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

