import React from "react"
import styles from "../styles/aboutme.module.css"
import myface from "../images/website.jpeg"

export default function AboutMe() {
  return <div>
    <h2>About Me</h2>
    <p>
        I have a passion for constantly improving both as a person and a software engineer. What I love about software engineering 
        is how it melds art and science into one space. I strive to write beautiful code that can be understood by both humans and 
        machines alike. 
    </p>
    <img className={styles.image} src={myface}/>
    <p>
        After graduating from the University of Nebraska at Omaha in December of 2019, I decided to hop into my next project, 
        grad school, at the University of Texas at Austin. I also work as a software engineer at Aviture, which provides me 
        no shortage of interesting problems to solve. Between the two, I'm learning more than I ever thought possible.
    </p>
  </div>
}
