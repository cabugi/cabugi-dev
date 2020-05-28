import React from 'react';
import Navbar from "../resources/Navbar"
import "./styles.css"

export default function RegisterForm() {
    return (
        <div className="regform">
            <Navbar />

            <form className="register-form" action="localhost:2999/register" method="post">
                <h1>Criar conta</h1>

                <div className="inputData"> 

                    <label for="name">Nome</label>
                    <input className="name" placeholder="Nome"></input>
                    <label for="name">Nome de usuário</label>
                    <input className="username" placeholder="Nome de usuário"></input>
                    <label for="name">Email</label>
                    <input className="email" placeholder="Email"></input>
                    <label for="name">Senha</label>
                    <input className="password" type="password" placeholder="Pelo menos 6 caracteres"></input>
                    <button className="submit-button" type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    );
}