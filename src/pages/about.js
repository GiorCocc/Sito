import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import {graphql} from "gatsby"
import Social from "../components/social"
import Skills from "../components/skill"
import SkillImg from "../img/undraw_developer_activity_bv83.svg"


export default function Post({data}) {
  return (
    <div>
      <Header></Header>
      <p>Post{data.site.siteMetadata.title}</p>
      <div className=" bg-gray-700 rounded-2xl">
        <h1 className="xl:text-5xl pt-10 text-3xl text-gray-200 text-center font-bold mb-4">Skills e Strumenti</h1>
        <p className="text-xl text-gray-200 text-center xl:w-3/5 mx-auto w-11/12">
          [testo]
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 pt-2">
          <SkillImg className="w-full h-full p-8"></SkillImg>
          <Skills></Skills>
        </div>
      </div>
      
      <Footer></Footer>
    </div>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`