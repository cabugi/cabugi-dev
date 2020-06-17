import React from 'react';
import './styles.css';
import Navbar from '../resources/Navbar/index'

export default function Home() {

    return (
        <div className="Home">
            <Navbar />
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