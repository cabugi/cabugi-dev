import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import logo from '../logo/logo.svg';

export default function Navbar() {
    return (
        <div className="Navbar">
            <h1><Link to="/" className="LOGO"><img src={logo} alt="" /></Link></h1>
            <nav>
                <ul className="nav_links">
                    <li><Link to="/problemas"> Problemas</Link></li>
                    <li><Link to="/"> Contests </Link></li>
                    <li><Link to="/ranking"> Rankings </Link></li>
                    <li><Link to="/"> Sobre </Link></li>
                </ul>
            </nav>
            <div className="Account">
                <Link to="/login" className="Login"> Entrar </Link>
                <Link to="/register" className="register-button"><button>Cadastre-se</button></Link>
            </div>
        </div>
    );
}
