import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { RecipeContext } from "../Context/RecipeContext";
import { BsFillHeartFill } from 'react-icons/bs';

import RecipeTile from "../components/RecipeTile";
//styles
import "../styles/Favourites.css";
import  basket  from '../assets/basket.png';
const apiKey = `${process.env.REACT_APP_RECIPE_API_KEY}`;


export default function Favourites() {

    return (
    <>
    <div className="wrapper">
      <div className="recipesHeader">
        <img className="basket" src={basket} alt="basket-fav-icon" />
        <div className="searchHeader">
          <h1 className="pageTitle">My Favourites</h1>
            <form class="search" >
              <input className="app__input"
                  type="text"
                  placeholder="Search your saved recipes!"
                  autoComplete="Off"/>
            </form>
            <p className="noFavourites">Looks like you don´t have any favorites yet. Go to recipes and search.</p>
             <Link  to="/Recipes">
            <button className="gotoRecipesButton"> Go to Recipes!</button>
            </Link>
         </div>
          </div>
        </div>
   
    </>
     );
}

