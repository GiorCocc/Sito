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
      <title>{data.site.siteMetadata.title} ~ About</title>
      <Header></Header>
      <h1 className="text-center mx-auto text-3xl lg:text-5xl tracking-wider text-gray-900 my-5">Info e contatti</h1>
      <div className="md:max-w-screen mx-auto p-4 flex flex-wrap pt-4 my-8">
      <aside className="w-full bg-giallo_chiaro lg:w-1/3 py-9 lg:border-r border-line lg:px-6 xl:px-12 rounded-xl">
        <div className="flex flex-col h-full justify-between m-4">
          <div>
            <h2 className="text-front text-3xl font-thin leading-none mb-4 xs:text-center">Studente</h2>
            <h1 className="text-4xl tracking-tight font-bold text-black sm:text-5xl xs:text-center md:text-6xl">Giorgio Coccapani</h1>
            <div className="relative inline-block leading-none">
              <div className="grid place-items-center">
                <div className="rounded-full relative z-10">
                  <img aria-hidden="true" className="rounded-full mx-auto my-5 xs:w-1/2 lg:w-full place-self-center" src={img} alt="Giorgio Coccapani"></img>
                </div>
              </div>
              <div>
                {/* Inserire le voci sulla posizione, sulla condizione e una per scaricare il file con il curriculum */}
              </div>
              {/* <div>
                <div className="xs:hidden sm:hidden md:hidden lg:grid grid-cols-2 gap-3 mt-8 ">
                  <div className="bg-white shadow-lg py-10 rounded-3xl flex flex-col items-center hover:bg-linkedin hover:shadow-2xl">
                    <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={80} height={80} fill="currentcolor">
                      <title>Linkedin icon</title>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>                                </svg>
                    <p className="mt-4 text-lg"><a href="https://www.linkedin.com/in/giorgio-coccapani-4b7834186/" target="_blanck">Linkedin</a></p>
                  </div>
                  <div className="bg-white shadow-lg py-10 rounded-3xl flex flex-col items-center hover:bg-facebook hover:shadow-2xl">
                    <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={80} height={80} fill="currentcolor">
                      <title>Facebook icon</title>
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <p className="mt-4 text-lg"><a href="https://www.facebook.com/giorcocc/" target="_blanck">Facebook</a></p>
                  </div>
                  <div className="bg-white shadow-lg py-10 rounded-3xl flex flex-col items-center hover:bg-instagram hover:shadow-2xl">
                    <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={80} height={80} fill="currentcolor">
                      <title>Instagram icon</title>
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                    </svg>
                    <p className="mt-4 text-lg"><a href="https://www.instagram.com/giorgio_coccapani/" target="_blanck">Instagram</a></p>
                  </div>
                  <div className="bg-white shadow-lg py-10 rounded-3xl flex flex-col items-center hover:bg-twitter hover:shadow-2xl">
                    <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={80} height={80} fill="currentcolor">
                      <title>Twitter icon</title>
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>                                </svg>
                    <p className="mt-4 text-lg"><a href="https://twitter.com/giorcocc" target="_blanck">Twitter</a></p>
                  </div>
                  <div className="bg-white shadow-lg py-10 rounded-3xl flex flex-col items-center hover:bg-gray-400 hover:shadow-2xl">
                    <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={80} height={80} fill="currentcolor">
                      <title>GitHub icon</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>                                </svg>
                    <p className="mt-4 text-lg"><a href="https://github.com/GiorCocc" target="_blanck">GitHub</a></p>
                  </div>
                </div>
              </div> */}
              <div className="grid xs:grid-cols-1 sm:grid-cols-2 sm:gap-6 lg:grid-cols-1 xl:grid-cols-2 xl:gap-6 ">
              <div className="bg-white  cursor-pointer shadow-lg py-10 rounded-3xl flex flex-col items-center hover:bg-giallo hover:shadow-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
                  <path d="M7.64706 2H18.9412L24.5882 16.1866L17.5294 20.4426C20.5533 26.6039 25.5157 31.5905 31.6471 34.6291L35.8824 27.5358L50 33.2105V44.5597C50 46.0647 49.405 47.5081 48.346 48.5723C47.287 49.6365 45.8506 50.2344 44.3529 50.2344C33.3391 49.5618 22.951 44.8619 15.1487 37.0215C7.34636 29.1811 2.66932 18.7423 2 7.67463C2 6.16963 2.59496 4.72626 3.65398 3.66206C4.71301 2.59786 6.14937 2 7.64706 2Z" stroke="#052E47" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h2 className="text-lg font-bold tracking-wide mt-4 mb-5 text-gray-900">Telefono</h2>
                <p className="text-base font-semibold tracking-wide text-gray-900">+39 3455317940</p>
              </div>
              <div className="bg-white mb-6 shadow-lg cursor-pointer py-10 rounded-3xl flex flex-col items-center hover:bg-giallo hover:shadow-2xl">
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
      </aside>
      <main className="lg:w-2/3 lg:pl-8 xl:pl-12">
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis orci tortor. Ut quis ultricies erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc tincidunt enim non est scelerisque, id venenatis odio commodo. Aenean aliquet ultricies ipsum ac placerat. Suspendisse potenti. In hac habitasse platea dictumst. Nunc tempor interdum ipsum nec pellentesque. Vivamus felis turpis, dapibus sed purus non, malesuada pretium sem. Proin tempor odio odio, consectetur sollicitudin mauris elementum nec. Nam lobortis lectus sit amet consectetur auctor. Mauris vel tortor pulvinar, rutrum mi eget, luctus turpis. Maecenas dictum porttitor varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ultrices vel sapien a interdum. Donec interdum mauris porttitor auctor accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam leo ipsum, convallis in vestibulum ac, pretium tempus nunc. Mauris molestie justo eu iaculis gravida. Sed efficitur posuere justo, ac auctor dui interdum sit amet. Nullam non fringilla mauris. Sed eget risus nec ligula egestas aliquet eu sed dui. Cras consequat efficitur felis, at facilisis tortor consectetur in. Duis egestas, dolor venenatis mollis auctor, orci ipsum condimentum odio, eu sollicitudin purus nulla a mauris. Maecenas hendrerit auctor luctus. Suspendisse sit amet lectus non leo dignissim rhoncus eu sit amet dolor. Praesent dictum accumsan diam, a consectetur libero feugiat et. Suspendisse potenti. Morbi ultrices vulputate sapien, sed elementum velit fringilla quis. Nam orci elit, lacinia ac nulla ac, fermentum bibendum leo. In euismod tortor nec mi sollicitudin, rhoncus malesuada erat sodales. Integer auctor cursus dignissim.Donec non mollis purus. Mauris et fringilla eros. Integer dapibus quam ac lectus commodo, volutpat tincidunt dui placerat. Suspendisse consectetur posuere magna, gravida auctor erat finibus sit amet. Aenean maximus mattis ex vel sollicitudin. Mauris pellentesque tortor at magna lacinia, a gravida tortor venenatis. Nulla facilisi. Nam bibendum placerat ipsum, nec lacinia risus ultricies in. Ut dolor nibh, molestie consequat imperdiet egestas, mollis vitae mi. Quisque et tortor sed nisi faucibus congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus elementum volutpat. Sed pretium aliquet lacus eget fermentum. Aliquam blandit, velit eget hendrerit euismod, libero libero dictum arcu, eget rutrum nibh libero eget ipsum. Maecenas imperdiet purus a nunc fringilla, vitae accumsan erat efficitur.Praesent ut nunc a arcu vestibulum lobortis in vitae mauris. Fusce semper non nisi eget vestibulum. Sed a tortor porta, lacinia augue non, volutpat mauris. Nullam tempus blandit lorem sit amet lacinia. Ut laoreet id metus et convallis. Fusce lacinia sagittis posuere. Vestibulum ac purus sapien. Nulla elementum sem ut hendrerit pulvinar. Mauris a enim non diam mollis lobortis. Pellentesque ultrices mauris sit amet massa euismod porta. Donec rutrum pharetra nisl ac imperdiet.       
        </p>
        
      </main>
      <div className=" bg-gray-700 rounded-2xl p-8 my-8">
        <h1 className="xl:text-5xl pt-10 text-3xl text-gray-200 text-center font-bold mb-4">Skills e Strumenti</h1>
        <p className="text-xl text-gray-200 text-center xl:w-3/5 mx-auto w-11/12">
          [testo]
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 pt-2">
          <SkillImg className="w-full h-full lg:p-8"></SkillImg>
          <Skills></Skills>
        </div>
        <Tools></Tools>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:pl-2 xl:pl-6 p-5">
        <div>
          <ContactImg className="w-full h-full p-8"></ContactImg>
        </div>
        <div>
          <Form></Form>
        </div>
      </div>
      
      </div>
      <Footer></Footer>
    </div>
  )
}

