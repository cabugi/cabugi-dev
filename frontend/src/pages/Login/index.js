import React, { useState } from 'react';
import Navbar from "../resources/Navbar"
import "./styles.css"
import api from "../../Api"


export default function LoginForm() {

    const [user, setUser] = useState();
    const [password, setPassword] = useState();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('/users/login', { user, password });

            console.log(response.data);
        } catch (err) {
            console.log(err);
            alert("deu erro viu");
        }
    }

    return (
        <div className="logform">
            <Navbar />

            <form className="login-form" onSubmit={handleLogin}>

                <div className="loginData">
                    <h1>Entrar</h1>

                    <input
                        value={user}
                        onChange={e => setUser(e.target.value)}
                        placeholder="Nome ou email"
                        required
                    />

                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Senha"
                        required
                    />
                    <button className="login-button" type="submit">Entrar</button>
                </div>
            </form>

        </div>
    );
}