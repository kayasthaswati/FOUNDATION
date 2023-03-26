import React from 'react'
import Typical from 'react-typical'
export default function Porfile() {
  return (
    <div className='profile-container'>
        <div className="profile-parent">
            <div className="profile-details">
                <div className="colz">
                    <a href="https://www.facebook.com/profile.php?id=100077761115364">
                     <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href="https://github.com/kayasthaswati">
                     <i className='fa fa-google'></i>
                    </a>
                    <a href="https://github.com/kayasthaswati">
                     <i className='fa fa-github-square'></i>
                    </a>
                    <a href="https://www.instagram.com/kayastha_swati/?next=%2F">
                     <i className='fa fa-instagram'></i>
                    </a>
                    <a href="https://twitter.com/kayastha_swati">
                     <i className='fa fa-twitter'></i>
                    </a>
                </div>
           <div className="profile-details-name">
            <span className="primary-text">

              {""}
              Hello , I'm <span className="highlighted-text">Swati Srivastava</span>
            </span>
           </div>
              <div className="profile-details-role">
               <span className="primary-text">
               {/*<h1>
                {" "}
                <Typical
                 loop={Infinity}
                  steps={[
                    "Software Developer",
                    1000 ,
                    "Full Stack Developer",
                    1000 ,
                    "Data Analyst",
                    1000 ,
                    "Dveloper",
                    1000 ,
                    "Developerrr",
                    1000 ,
                  ]}
               />
               </h1>*/}
              </span>
     <span className="profile-role-tagline">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, beatae!
     </span>
              </div>
              <div className="profile-options">
                <button className='btn primary-btn'>
                  Hire me
                </button>
                <a href="C:\Users\91829\Desktop\web development\foundations\react-learning\src\PortfolioContainer\Home\resume_swati_srivastava_nu.pdf" download="resume_swati_srivastava_nu.pdf"></a>
                <button className="btn highlighted-btn">
                  Get Resume
                </button>
              </div>

            </div>
        </div>
      
    </div>
  );
}
