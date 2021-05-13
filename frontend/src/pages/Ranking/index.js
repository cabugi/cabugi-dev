import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../resources/Navbar";
import "./styles.css";

import api from '../../Api';

export default function Ranking() {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        api.get('users').then(response => setUsers(response.data))
    }, [])

    users.sort((a, b) => {
        return b.score - a.score;
    });

    return (
        <div className="ranking">
            <Navbar />
            <div className="users">
                <table className="rankingTable">
                    <thead>
                        <tr>
                            <th> Posição </th>
                            <th> Username</th>
                            <th> Pontuação</th>
                            <th> Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.score}</td>
                                <td>{user.state}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}