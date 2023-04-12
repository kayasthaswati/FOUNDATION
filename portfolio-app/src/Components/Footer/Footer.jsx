import React from 'react'
import './Footer.css'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Wave from '../../img/wave.png'
const Footer = () => {
  return (
    <div className="footer" id="Footer">
      <img src={Wave} alt="" style={{width:'100%'}}/>
      <div className="f-content">
        <span>swati829955@gmail.com</span>
        <div className="f-icons">
        <a href="https://www.instagram.com/kayastha_swati/?next=%2F">
            <Insta color='white' size='3rem'/></a>
            <a href="https://www.linkedin.com/in/swati-srivastava-972790202/">
            <LinkedIn color='white' size='3rem'/></a>
            <a href="https://github.com/kayasthaswati">
            <Github color='white' size='3rem'/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
