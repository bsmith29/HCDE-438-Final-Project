// Here are some of my imports that I have made
import React from 'react';
import './Home.css';
import {DogCard} from "../../components/DogCard/DogCard.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";
// import {Filter} from "../../components/Filter/Filter.jsx";


export function Home() {


    return (
        // This is the home page where the user has access to the nav bar, a filter, and their different dog options
        <div>

            <h2 className={"Title"}>PupSupport</h2>
            <p>Welcome to PupSupport!</p>
            <p>If you want to do some research on potential dogs, then this is the place to be!!</p>

            {/*The Nav Bar where the user can go to different pages */}
            <NavBar />
            <p></p>

            {/*< Filter />*/}
            {/*This consists of the different information a user can see at first glance on a specific dog*/}
            {/*Some content would include: The name of the dog, a description, and its temperament tags as well */}
            <div className={"DogCardLayout"}>
                <DogCard />
                <DogCard />
                <DogCard />
            </div>






        </div>
    );
}