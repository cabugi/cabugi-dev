import React from 'react';
import './styles.css';
import backgroundImage from "./wfh_1.svg"
import Navbar from '../resources/Navbar/index'
import "./Lottie"
import LottieControl from './Lottie';

export default function Home() {

    return (
        <div className="Home">
            <Navbar />
            <div className="content">

                <div className="clean-block">
                    <div className="text">
                        <h1>Bem-vindo à plataforma de programadores</h1>
                        <p>Comece já a estudar programação competitiva no site ai mt bom cria conta por favor</p>
                        <button className="button" type="button">Cadastre-se</button>
                    </div>
                </div>
                <div className="animation">
                    <LottieControl loop="true" autoplay="true" />
                </div>
            </div>
        </div>
    );
}