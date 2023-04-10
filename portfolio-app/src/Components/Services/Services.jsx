import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './Resume.pdf';
const Services = () => {
  return (
    <div className="services">
      <div className="awesome">
<span>My Awesome </span>
<span>Projects</span>
<spane>Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Dolor, vero.</spane>
<a href={Resume} download>
<button className="button s-button"> Download CV</button>
</a>
<div className="blur s-blurl" style={{ background :"#ABF1FF94" }}></div>
      </div>

      <div className="cards">
      
      <div style={{left : '14rem'}}>
        <Card
        emoji={HeartEmoji}
        heading = {'Design'}
        detail = {"Figma , Sketch"}
        />
      </div>
      <div style={{left : '14rem'}}>
        <Card
        emoji={HeartEmoji}
        heading = {'Design'}
        detail = {"Figma , Sketch"}
        />
      </div>
      <div style={{top:"12rem", left:"-4rem"}}>
        <Card
          emoji={Glasses}
          heading={"Data Analysis"}
          detail = {"python"}
        />
      </div>
      <div style={{top:"19rem", left:"12rem"}}>
        <Card
          emoji={Humble}
          heading={"Website"}
          detail = {"HTML , CSS "}
        />
      </div>
      <div className="blur s-blur2" style={{background : "var(--purple)"}}></div>
      </div>
    </div>
  )
}

export default Services
