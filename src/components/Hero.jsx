


import React from 'react'
import {video} from "../data";
import "../style.css";
import Header from './Header';
const Hero = () => {
  return (
    <div className='hero'>
        <Header/>
        <video autoPlay loop className="video" muted>
        
            <source src={video.url} alt={video.alt}/>
        </video>
    </div>
  )
}

export default Hero;