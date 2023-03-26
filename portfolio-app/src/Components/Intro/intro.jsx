import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
const Intro = () => {
  return (
    <div className='intro'>
      <div className="i-left">
         <div className="i-name">
            <span>Hy! I Am </span>
            <span>Swati Srivastava</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laborum culpa mollitia eaque eius pariatur tempora consequuntur ipsa. Officia, eveniet.</span>
         </div>
         <button className=" button i-button"> Hire Me</button>
         <div className="i-icons">
            <a href="https://github.com/kayasthaswati">
            <img src={Github} alt="" />
            </a>
           <a href="https://www.linkedin.com/in/swati-srivastava-972790202/">
           <img src={LinkedIn} alt="" />
           </a>
           <a href="https://www.instagram.com/kayastha_swati/?next=%2F">
           <img src={Instagram} alt="" />
           </a>
           
         </div>
      </div>
      <div className="i-right">
      <img src={Vector1} alt="" />
      <img src={Vector2} alt="" />
      <img src={boy} alt="" />
      <div>
        <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
        
      </div>
      </div>
    </div>
  )
}

export default Intro
