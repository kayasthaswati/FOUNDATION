import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
const Services = () => {
  return (
    <div className="services">
      <div className="awesome">
<span>My Awesome </span>
<span>Projects</span>
<spane>Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Dolor, vero.</spane>
<button className="button s-button"> Download CV</button>
<div className="blur s-blurl" style={{ background :"#ABF1FF94" }}></div>
      </div>

      <div className="cards">
      
      <div>
        <Card
        emoji={HeartEmoji}
        heading = {'Design'}
        detail = {"Figma , Sketch"}
        />
      </div>

      </div>
    </div>
  )
}

export default Services
