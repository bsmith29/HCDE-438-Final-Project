// Here are some of my imports that I have made
import React from 'react';
import './Home.css';
import {DogCard} from "../../components/DogCard/DogCard.jsx";
import Filter from "../../components/Filter/Filter.jsx";

// import { DogCard } from './components/DogCard';

export function Home() {


    return (
        // This is the home page where the user has access to the nav bar, a filter, and their different dog options
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
            <h2 className={"Title"}>PupSupport</h2>
            <p>Welcome to PupSupport!</p>
            <p>If you want to do some research on potential dogs, then this is the place to be!!</p>
            {/*The Nav Bar where the user can go to different pages */}
            <div style={{ padding: '20px', margin: '10px' }}>
                <ul>
                    <li><a href="./pages/Home/Home.jsx">Home</a></li>
                    <li><a href="./pages/Favorites.jsx">Favorites</a></li>
                    <li><a href="./pages/Recommendations/Recommendations.jsx">Recommendations</a></li>
                </ul>
            </div>
            {/*< Filter />*/}
            {/*This consists of the different information a user can see at first glance on a specific dog*/}
            {/*Some content would include: The name of the dog, a description, and its temperament tags as well */}
            <div className={'DogCard'}>
                <div className={'DogCardContent'}>
                    <img className={"DogImage"} src={"https://www.rd.com/wp-content/uploads/2018/02/30_Adorable-Puppy-Pictures-that-Will-Make-You-Melt_124167640_YamabikaY.jpg?fit=700%2C467"} alt="An image of a white dog" />
                    <h2 className={'DogCardHeader'}>Dog's Name</h2>
                    <p className={'DogCardDescription'}>Dog's Description</p>

                    <div className={'DogTags'}>
                        <span className="tag">
                            Loving
                        </span>
                    </div>
                </div>
                <div className={'Heart'}>
                    <img className={"HeartImage"} src={"https://media.istockphoto.com/id/1439973042/vector/red-heart-flat-icon-the-symbol-of-love-vector-illustration.jpg?s=2048x2048&w=is&k=20&c=6V9Br8Yh8p_PTYkNwBKi_q-JJlG9Jq3dckt2QJMF4LE="} alt={"An image of a red heart"} />

                </div>
            </div>


        </div>
    );
}