import React, { useState } from 'react';
import Navbar from "../resources/Navbar"
import "./styles.css"

import api from '../../Api/api';

export default function RegisterForm() {

    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function HandleRegister(e) {
        e.preventDefault();

        const userData = {
            username,
            name,
            email,
            password,
            country: "",
            state: "",
            city: "",
            school_org: "",
            birthday: "",
            contact: ""
        };

        try {
            const res = await api.post('/users', userData);

            console.log(res);
        } catch(err)
        {
            console.log(err);
        }
    }

    return (
        <div className="regform">
            <Navbar />

            <form className="register-form" onSubmit={HandleRegister}>
                <h1>Criar conta</h1>

                <div className="inputData"> 

                    <label>Nome</label>
                    <input 
                        placeholder="Nome"
                        value={name}
                        onChange={ e => setName(e.target.value) }
                    />
                    <label>Nome de usuário</label>
                    <input
                        placeholder="Nome de usuário"
                        value={username}
                        onChange={ e => setUsername(e.target.value) }
                    />
                    <label>Email</label>
                    <input
                        placeholder="Email"
                        value={email}
                        onChange={ e => setEmail(e.target.value) }
                    />
                    <label>Senha</label>
                    <input 
                        type="password"
                        placeholder="Pelo menos 6 caracteres"
                        value={password}
                        onChange={ e => setPassword(e.target.value) }
                    />
                    <button className="submit-button" type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    );
}