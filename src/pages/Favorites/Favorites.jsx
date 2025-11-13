import React from 'react';
import './Favorites.css';
import {DogCard} from "../../components/DogCard/DogCard.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";

const Favorites = () => (
    <div>
        <h1>Favorites</h1>
        <NavBar />
        <h3>Your Favorite Pups:</h3>
        <div className={"DogCardLayout"}>
            <DogCard />
            <DogCard />
            <DogCard />
        </div>

        <button>Add to Favorites</button>
        <p>Nuggets</p>
    </div>




)

export default Favorites;

