import React from "react";

//images
import maps from "../assets/maps.png";
import search from "../assets/search.png";
import don from "../assets/don.jpeg";
import linkedin from "../assets/icons/linkedin.png";
import mail from "../assets/icons/mail.png"

import "../styles/About.css";

function About() {
  return (
  <>
  <div className="wrapper">
    <h1 className="about-title">Here's how we can help</h1>
      <div className="products-container">
        <div className="about-image">
          <img src={search} alt="search.png" />
          <p>At Full Plate, we curate meal ideas based on 
            what you already have on hand, so you can spend 
            your time and energy savoring rather than stressing.
          </p>
        </div>
        <div className="about-image" >
          <img src={maps} alt="maps" />
          <p>Sharing is caring. Here is an alternative for your 
            unused ingredients so you can donate to help your community.
          </p>
        </div>
      </div>
    </div>
    <div className="wrapper">
     <h2 className="team-card">Meet the Developer</h2>
      <div className="team-card-container">
         <div className="team-image-card">
           <div className="leftTeamContainer">
             <img className="headshot" src={don} alt="don-forrest" />
             <h3 className="name">Don Forrest</h3> 
             <h3 className="role">Software Engineer</h3>
             <ul className="social">
              <li>
                <a href="mailto:forrestusbal@gmail.com" target="_blank" rel="noreferrer">
                  <img className="icon" src={mail} alt="mail" />
                  <span>E-mail</span>
                </a> 
              </li>
              <li>
                <a href="https://www.linkedin.com/in/don-forrest-usbal/" target="_blank" rel="noreferrer">
                  <img className="icon" src={linkedin} alt="linkedin" />
                  <span>Linkedin</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="rightTeamContainer">
            <p>
              Hi! I&apos;m Don Forrest Usbal. A Software Engineer based out of Palayan, Philippines.
            </p>
          </div>
        </div>
      </div> 
    </div>
  </>
  );
}

export default About;
