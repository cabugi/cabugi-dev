import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Navbar from "../resources/Navbar"
import "./styles.css"

import api from '../../Api';

export default function Ranking() {
    return(
        <ranking className = "ranking">
            <Navbar />
            <users>
                <table class="rankingTable">
                    <thead>
                        <tr>
                            <th> Posição </th>
                            <th> Username</th>
                            <th> Pontuação</th>
                            <th> Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> 1 </td>
                            <td> placeholder </td>
                            <td> 0 </td>
                            <td> CE </td>
                        </tr>
                        <tr>
                            <td> 1 </td>
                            <td> placeholder </td>
                            <td> 0 </td>
                            <td> CE </td>
                        </tr>
                        <tr>
                            <td> 1 </td>
                            <td> placeholder </td>
                            <td> 0 </td>
                            <td> SP </td>
                        </tr>
                    </tbody>
                </table>
            </users>
        </ ranking>
    )
}