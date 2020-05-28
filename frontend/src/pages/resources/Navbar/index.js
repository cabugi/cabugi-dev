import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';

export default function Navbar(){
    return(
    <navbar className="Navbar">
        <h1>LOGO</h1>
        <nav>
            <ul className="nav_links">
                <li><a href="#"> Problemas</a></li>
                <li><a href="#"> Contests </a></li>
                <li><a href="#"> Perfil </a></li>
                <li><a href="#"> Rankings </a></li>
                <li><a href="#"> Sobre </a></li>
            </ul>
        </nav>
        <Link to="/register" className="register-button"><button>Registre-se</button></Link>
    </navbar>
    );
}
