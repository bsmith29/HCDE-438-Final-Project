import React from 'react';
import './Recommendations.css';
import {DogCard} from "../../components/DogCard/DogCard.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";
import {AdditionalInfoCard} from "../../components/Additional Info Card/AdditionalnfoCard.jsx";

const Recommendations = () => (
    <div>
        <h1>Recommendations</h1>
        <NavBar />
        <h3>Your Recommendations:</h3>
        <div className={"DogCardLayout"}>
            <DogCard />
            <DogCard />
            <DogCard />
        </div>

        <div className={"DogCardLayout"}>
            <h3>Tips:</h3>
            <p></p>
            <p></p>
            <AdditionalInfoCard />
            <AdditionalInfoCard />
        </div>
    </div>
)

export default Recommendations;