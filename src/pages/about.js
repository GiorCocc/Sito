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
      <div className="grid sm:grid-cols-1 md:grid-cols-2 bg-gray-700 rounded-2xl">
        <SkillImg className="w-full p-8"></SkillImg>
        <Skills></Skills>
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