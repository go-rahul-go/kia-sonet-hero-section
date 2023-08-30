

import React from 'react'
import { kiaLogo } from '../data';
import "../style.css";

const Header = () => {
  return (
    <header className="heading">
        <div className="left">
            <a>Cars</a>
            <a>Buy</a>
            <a>Owners</a>
            <a>VR Showroom</a>
        </div>
        <div className="logo">
            <img src={kiaLogo.url} alt={kiaLogo.alt}/>
        </div>
        <div className="right">
            <a>Kia Cealer</a>
            <a>Discover Kia</a>
            <a>Find a Dealer</a>
        </div>
    </header>
  )
}

export default Header;