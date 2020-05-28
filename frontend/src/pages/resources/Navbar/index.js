import React from 'react';
import './styles2.css';

export default function Navbar(){
    return(
    <navbar>
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
        <a href="#" className="register"><button>Registre-se</button></a>
    </navbar>
    );
}
