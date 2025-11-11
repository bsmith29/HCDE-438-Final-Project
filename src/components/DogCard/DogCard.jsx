import React from 'react';
import './DogCard.css';

export function DogCard() {
    return (
        <div className={'DogCard'}>
            <h2 className={'DogCard__header'}>Dog's Name</h2>
            <p>Dog's Description</p>

            <div className={'DogTags'}>Dogs tags</div>

        </div>
    )
}