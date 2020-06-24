import React, { useState } from 'react';
import Cookies from 'js-cookie'
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

            Cookies.set('session-token', response.data['token'], {
                path: "/",
            });
        
            console.log(Cookies.get('session-token'));
            
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

                    <floatLabel className = "label-float">
                    <input
                        value={user}
                        onChange={e => setUser(e.target.value)}
                        placeholder=" "
                        required
                    />
                    <label>Nome ou email</label>
                    </ floatLabel>

                    <floatLabel className = "label-float">
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder=" "
                        required
                    />
                    <label>Senha</label>
                    </ floatLabel>
                    
                    <button className="login-button" type="submit">Entrar</button>
                </div>
            </form>

        </div>
    );
}