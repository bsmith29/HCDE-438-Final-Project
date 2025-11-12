import React from 'react';
import './DogCard.css';

export function DogCard() {
    return (
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
    )
}