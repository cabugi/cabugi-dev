import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';

export default function Navbar(){
    return(
    <navbar className="Navbar">
        <h1><Link to= "/" className="LOGO">LOGO</Link></h1>
        <nav>
            <ul className="nav_links">
                <li><Link to="/"> Problemas</Link></li>
                <li><Link to="/"> Contests </Link></li>
                <li><Link to="/"> Perfil </Link></li>
                <li><Link to="/"> Rankings </Link></li>
                <li><Link to="/"> Sobre </Link></li>
            </ul>
        </nav>
        <account className="Account">
            <Link to="/" className="Login"> Entrar </Link>
            <Link to="/register" className="register-button"><button>Registre-se</button></Link>
        </account>
    </navbar>
    );
}
