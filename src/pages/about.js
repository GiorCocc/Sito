import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import {graphql, Link} from "gatsby"
import img from "../img/me.jpg"
import Skills from "../components/skill"
import SkillImg from "../img/undraw_developer_activity_bv83.svg"
import Tools from "../components/tools"
import Form from "../components/form"
import ContactImg from "../img/undraw_contact_us_15o2.svg"
import SEO from "../components/seo"
import Timeline from "../components/timeline"



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
        <h1 className="text-center text-3xl lg:text-5xl font-semibold tracking-wider text-gray-900">Info e contatti</h1>
        <div className="md:max-w-screen mx-4 flex flex-wrap pt-4 my-8">
        <aside className="w-full bg-giallo_chiaro lg:w-1/3 py-9 lg:px-6 xl:px-12 rounded-xl">
          <div className="flex flex-col h-full justify-between m-4">
            <div>
              <h2 className="text-front text-3xl font-thin leading-none mb-4 xs:text-center">Studente</h2>
              <p className="text-front text-md font-thin leading-none mb-4 xs:text-center">Ingegneria informatica, elettronica e delle telecomunicazioni</p>
              <h1 className="text-4xl tracking-tight font-bold text-black sm:text-5xl xs:text-center md:text-6xl">Giorgio Coccapani</h1>
              <div className="relative inline-block leading-none">
                <div className="grid place-items-center">
                  <div className="rounded-full relative z-10">
                    <img aria-hidden="true" className="rounded-full mx-auto my-5 xs:w-1/2 lg:w-full place-self-center" src="https://res.cloudinary.com/giorgio-coccapani/image/upload/v1613479494/gc_sito/me_diqya9.jpg" alt="Giorgio Coccapani"></img>
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
                    <p className="text-base font-base tracking-wide text-gray-900">+39 3455317940</p>
                  </div>
                  <a href="https://www.google.com/maps/place/43011+Busseto+PR/@44.979188,10.0343186,15z/data=!3m1!4b1!4m5!3m4!1s0x4780f7d82e7e7f0d:0xe06a52d037fd1044!8m2!3d44.9808926!4d10.0421718" target="_blank" rel="noreferrer" className="bg-white mb-6 shadow-lg py-10 rounded-3xl flex flex-col items-center hover:bg-giallo hover:shadow-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 50 51" fill="none">
                      <path d="M1 10.0439L17 1L33 10.0439L49 1V40.1904L33 49.2344L17 40.1904L1 49.2344V10.0439Z" stroke="#4A5568" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M17 1V40.1904" stroke="#4A5568" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M33 10.0439V49.2344" stroke="#4A5568" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h2 className="text-lg font-bold tracking-wide mt-4 mb-5 text-gray-700">Location</h2>
                    <div className="text-gray-700 text-base tracking-wide text-center">
                      <p className="leading-7">44°58′45.84″N 10°02′35.92″E</p>
                    </div>
                  </a>
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
          <p className="text-justify text-lg text-gray-600 mb-3">
            Ciao a tutti, mi chiamo Coccapani Giorgio, ho 20 anni e sono un aspirante sviluppatore. Studio  <strong>ingegneria informatica, elettronica e telecomunicazioni presso l’Università degli studi di Parma</strong>. Nella vita sono un grande appassionato di tecnologia, in tutti i suoi aspetti, dall’hardware a, soprattutto il <strong>software</strong>, dai videogiochi ai programmi che utilizziamo nella vita di tutti i giorni.
          </p>
          <p className="text-justify text-lg text-gray-600 mb-3">
            La mia carriera come sviluppatore è iniziata intorno alle scuole medie, quanto ho iniziato ad avventurarmi in progetti fallimentari nello sviluppo di applicazioni android, prima in java e successivamente in linguaggio Kotlin. Da questi progetti ho capito solo una cosa, che dietro una semplicissima applicazione o gioco per smartphone c’è un mondo intero fatto di <strong>duro lavoro e di passione</strong>.  Solo una volta iniziato il liceo scientifico mi sono davvero appassionato alla programmazione e ho deciso di intraprendere questo percorso. Durante gli anni del liceo ho potuto gettare delle solide basi nella programmazione in linguaggio C e C++, ho potuto entrare e dare una semplicissima occhiata al mondo del web, limitandomi però al linguaggio HTML. Il mio percorso di studi al liceo si è poi concluso con un grande progetto, realizzato assieme a due mie compagni: la realizzazione di un semplice <Link to="https://github.com/GiorCocc/gioco-esame" target="_blank" rel="noreferrer" className="text-giallo font-bold">videogioco</Link>, basato sul motore grafico Unity e linguaggio C#.
          </p>
          <p className="text-justify text-lg text-gray-600 mb-3">
            La scelta dell’università è stata dettata principalmente dalla voglia di seguire le mie passioni, di consolidare le basi di programmazione e di comprendere come si progettano circuiti e sistemi elettronici e capire come i dati che ci permettono di rimanere connessi e di lavorare nel modo più efficiente possibile vengono trasmessi in ogni angolo del pianeta. Grazie al corso di elettronica ho potuto sperimentare con la board <Link to="https://github.com/GiorCocc/arduino" target="_blank" rel="noreferrer" className="text-giallo font-bold">Arduino</Link>, con la quale, grazie ai corsi universitari, ho potuto realizzare alcuni progetti (estremamente semplici e banali) che mi hanno dato la possibilità di capire realmente lo sviluppo di sistemi elettronici digitali. Ora invece mi sto lanciando su progetti più complessi e differenti con Raspberry, cercando di creare applicazioni e sistemi per il mondo Linux, che sto imparando a conoscere, e la robotica
          </p>
          <p className="text-justify text-lg text-gray-600 mb-3">
            La mia passione rimane comunque lo sviluppo software, dal momento che reputo questo settore il più <strong>entusiasmante e stimolante</strong>. Sono convinto che a livello di hardware abbiamo già raggiunto un ottimo livello in termini di potenza, efficienza e affidabilità e che nei prossimi decessi, si ci potranno essere delle innovazioni sensazionali, ma tutto ciò che abbiamo creato fino ad oggi ci permette di arrivare davvero molto in alto come genere umano;  e quindi, a mio avviso, ora tutto si gioca a livello software per poter sfruttare al meglio le <strong>potenzialità</strong> offerte dall’elettronica che altrimenti verrebbero sprecate e non ci sarebbe più <strong>innovazione</strong>. Dal momento che ogni giorno ci interfacciamo più con un software che con un dispositivo hardware, premendo e spostando elementi virtuali e inviando dati da un estremo all’altro del pianeta, il nostro compito come sviluppatori è quello di rendere hardware e software il più compatibili possibili in modo da creare una <strong>sinergia</strong> perfetta tra queste due metà e di sfruttare a pieno le possibilità offerte da entrambe le parti. Dobbiamo rendere mondo, non un posto migliore, ma più semplice per noi, per poter affrontare le <strong>sfide</strong> di tutti i giorni e quelle che verranno nel modo più semplice possibili così da permetterci di puntare sempre più in alto, di rendere ciò che ora reputiamo complesso semplice e porci obbiettivi più alti.
          </p>
          <p className="text-justify text-lg text-gray-600 mb-3">
            Ma ora basta parlare di me e di filosofeggiare. Qui sotto c’è un form contatti. Scrivete pure liberamente, se trovate problemi con il sito, se qualcosa non funziona o per consigli e opportunità che volete offrirmi. Siate liberi di contattarmi in qualunque momento e io cercherò di rispondermi e di correggere eventuali errori.
          </p>

          <Timeline></Timeline>    
          
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

