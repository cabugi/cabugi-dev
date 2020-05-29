import React from 'react';
import Navbar from "../resources/Navbar"
import "./styles.css"

export default function LoginForm() {
    return (
        <div className="logform">
            <Navbar />

            <form className="register-form" action="localhost:2999/register" method="post">
                <h1>Entrar</h1>

                <div className="inputData"> 
                    <label for="name">Nome de usuário/Email</label>
                    <input className="username"></input>
                    <label for="name">Senha</label>
                    <input className="password" type="password"></input>
                    <button className="submit-button" type="submit">Entrar</button>
                </div>
            </form>
        </div>
    );
}