import React from 'react';
import './styles.css';

export default function Home() {

    return (
        <div className="Home">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"/>
            
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,700&display=swap" rel="stylesheet"/>             
            <div className="background-image" ></div>
            <div className="clean-block clean-hero">
                <div className="text">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis vitae leo.</p>
                    <button className="button" type="button">Learn More</button>
                    </div>
            </div>
        </div>
    );
}