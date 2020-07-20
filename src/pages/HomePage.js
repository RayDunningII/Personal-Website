import React from 'react';
import Hero from '../components/Hero'

function HomePage(props) {

    return(
       <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
    )
}


export default HomePage; 