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

        <p>Technical Skills:</p>
        <p>Front-end: JavaScript, React.js, JQuery, HTML, CSS, React-Hooks, Bootstrap.js</p>
        <p>Back-end: Node.js, Express</p>
        <p>Databases: MySql, MongoDB</p>
        <p>Libraries: React-Router, Axios, React-Slick, Babel, Webpack, MaterialUI</p>
        <p>Other: Agile WorkFlow, Git WorkFlow</p>

         Email: dunningray@gmail.com || Phone: (209) 352-2682 || GitHub: https://github.com/RayDunningII || Personal Site: https://raydunning.herokuapp.com/ 
         </Content>

     </div>
    )
}


export default AboutPage; 