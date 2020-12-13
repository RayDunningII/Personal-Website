import React from 'react';
import Content from '../components/Content'
import Hero from '../components/Hero'

function AboutPage(props) {
    
    return(
     <div>
         <Hero title={props.title} />

         <Content>
        <p> I am a Software Engineer and Army veteran with a passion for technology and simply creating things.</p>
        <p>I've come so far from where I was just a few years ago and it really shows how hard work pays off.</p> 
        <p>I love working on teams where we can collaborate on creating new applications.</p>
        <p> I enjoy challenging myself and tackling tough problems.</p> 
        <p>I believe my time in the military meeting and collaborating with so many people gives me a unique perspective.</p>

        <p><b>Front-end: JavaScript, React.js, JQuery, HTML, CSS, React-Hooks, Bootstrap.js</b></p>
        <p><b>Back-end: Node.js, Express</b></p>
        <p><b>Databases: MySql, MongoDB</b></p>
        <p><b>Libraries: React-Router, Axios, React-Slick, Babel, Webpack, MaterialUI</b></p>
        <p><b>Other: Agile WorkFlow, Git WorkFlow</b></p>

         <p><b>Email: dunningray@gmail.com || Phone: (209) 352-2682</b></p> 
         </Content>

     </div>
    )
}


export default AboutPage; 