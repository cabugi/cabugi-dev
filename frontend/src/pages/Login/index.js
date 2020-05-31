import React from 'react';
import Navbar from "../resources/Navbar"
import "./styles.css"

export default function LoginForm() {
    return (
        <div className="logform">
            <Navbar />

            <form className="login-form">
                <h1>Entrar</h1>

                <div className="loginData"> 
                    <label for="name">Nome de usuário/Email</label>
                    <input className="log-username"></input>
                    <label for="name">Senha</label>
                    <input className="log-password" type="password"></input>
                    <button className="login-button" type="submit">Entrar</button>
                </div>
            </form>
        </div>
    );
}