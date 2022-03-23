import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/homefood.png";
import "../styles/Home.css"; 
import Wrapper from "../components/Wrapper/Wrapper";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <Wrapper>
          <h1 style={{ fontWeight: "bold" }}> Making the Most of what you Have </h1>
          <p>We are here to help you find ways to use all the ingredients you 
            have on hand. We believe that mindful meal planning is not confined
            to your kitchen. Join us on a journey towards a Full Plate - both for yourself
            and for others</p>
          <Link to="/Recipes">
            <button> Get Started</button>
          </Link>
        </Wrapper>
      </div>
    </div>
  );
}

export default Home;
