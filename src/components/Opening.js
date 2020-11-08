import React from "react"
import styles from "../styles/opening.module.css"
import myface from "../images/website.jpeg"

export default function Opening() {
  return <div className={styles.container}>
    <h1>Hey, I'm Chandler Brtek!</h1>
    <p>
        I'm a software engineer based in Omaha, NE. I always enjoy a 
        new challenge, whether front-end or back-end. 
    </p>
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
    <h2>Experience</h2>
    <h3>Aviture</h3>
    <h3>Proxibid</h3>
    <h2>Skills</h2>
    <ul>
        <li>React</li>
        <li>Javascript</li>
        <li>Python</li>
        <li>Kotlin</li>
        <li>Java</li>
        <li>SQL</li>
        <li>C</li>
        <li>AngularJS</li>
    </ul>
    <h2>Education</h2>
    <h3>Univeristy of Texas at Austin</h3>
    <h3>University of Nebraska Omaha</h3>
    <h2>Projects</h2>
    <h2>Contact Me</h2>
    <p>Have something interesting? Shoot me an email at chandlerbrtek@gmail.com. I'll get back to you as fast as I can.</p>
    <p>Thanks for stopping by my slice of the net!</p>
  </div>
}
