import React from 'react';
import Content from '../components/Content'
import Hero from '../components/Hero'

function AboutPage(props) {
    
    return(
     <div>
         <Hero title={props.title} />

         <Content>
         <p>I am a software engineer and Army veteran with a passion for technology and just creating things.</p>
         <p> I've gone so far from where I was just a few years ago, it really shows how hard work pays off.</p> 
         <p> I love creating with teams on new and exciting projects.</p>
         <p> I am always up to challenge myself to tackle tough problems and learn and grow from it. </p>
         <p> I'm a fun person and love to have a few laughs while enjoying the work I'm doing. </p>
         </Content>

     </div>
    )
}


export default AboutPage; 