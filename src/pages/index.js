import React from "react"
import Opening from "../components/Opening"
import AboutMe from "../components/AboutMe"
import ContactMe from "../components/ContactMe"
import ExpEdu from "../components/ExpEdu"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import styles from "../styles/global.module.css"

export default function Home() {
  return <div className={styles.container}>
      <Opening/>
      <AboutMe/>
      <ExpEdu/>
      <Skills/>
      <Projects/>
      <ContactMe/>
    </div>
}
