import React, { useState } from 'react';
import Navbar from "../resources/Navbar"
import "./styles.css"

import api from '../../Api';

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
            alert('Usuario cadastrado com sucesso!');
        } catch (err) {
            alert('Algum erro ocorreu durante o cadastro. Tente novamente.');
        }
    }

    return (
        <div className="regform">
            <Navbar />

            <form className="register-form" onSubmit={HandleRegister}>
                <h1>Criar conta</h1>

                <div className="inputData">

                <floatLabel className = "reg-label-float">
                    <input
                        placeholder=" "
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                    <label>Nome</label>
                    </floatLabel>

                    <floatLabel className = "reg-label-float">
                    <input
                        placeholder=" "
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                    <label>Nome de usuário</label>
                    </floatLabel>

                    <floatLabel className = "reg-label-float">
                    <input
                        type="email"
                        placeholder=" "
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <label>Email</label>
                    </floatLabel>

                    <floatLabel className = "reg-label-float">
                    <input
                        type="password"
                        placeholder=" "
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        minLength="6"
                    />
                    <label>Senha</label>
                    </floatLabel>

                    <button className="submit-button" type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    );
}