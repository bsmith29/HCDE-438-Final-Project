import React from "react";
import './AdditionalInfoCard.css';

export function AdditionalInfoCard() {
    return (
        <div className={"CardLayout"}>
            <div className={'Card'}>
                <div className={'CardContent'}>
                    <img className={"Image"} src={"https://www.rd.com/wp-content/uploads/2018/02/30_Adorable-Puppy-Pictures-that-Will-Make-You-Melt_124167640_YamabikaY.jpg?fit=700%2C467"} alt="An image of a white dog" />
                    <h2 className={'CardHeader'}>Dog Maintenance</h2>
                    <p className={'CardDescription'}>
                        Excited about your new dog but have no idea where to start?
                        Click on the button to learn more about what it takes to take care of a dog!
                    </p>

                </div>
                <button>Check it Out!</button>
            </div>
        </div>
    )
}