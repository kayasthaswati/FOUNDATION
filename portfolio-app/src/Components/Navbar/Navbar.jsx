import React from 'react'
import Toogle from '../Toogle/Toogle'
import './Navbar.css'
import {Link} from 'react-scroll'
import Resume from './Resume.pdf';
const Navbar = () =>{
  return (
    <div className="n-wrapper">
        <div className="n-left">
       <div className="n-name">
        Portfolio Website
       </div>
      <Toogle/>
        </div>

        <div className="n-right">
        <div className="n-list">
    <ul>
      <li><Link to ='Navbar' smooth={true} activeClass="activeClass">
        Home</Link></li>
        <li><Link to='Intro' smooth={true}>About Me</Link></li>
        <li><Link to='Services' smooth={true}>Projects</Link></li>
        <li><Link to='contact-form' smooth={true}>Contact</Link></li>
        <li><Link to='footer' smooth={true}>Socials</Link></li>
    </ul>
</div>


 <a href={Resume} download>
<button className="button"> CV</button>
</a>


        </div>
    </div>
  )
}

export default Navbar
