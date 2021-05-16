import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import './styles.css';
import api from '../../Api';
export default function Profile() {
    const location = useLocation();
    const path = location.pathname;
    const [user, setUser] = useState([]);
    const routes = path.split("/");
    const username = routes[(routes.length-1)];
    useEffect(() => 
        {api.post('/users/profile', {username}).then(response=>setUser(response.data))
        });

    return (

        <div className="card">
            <div className="box-1">
                <div className="img-placeholder"></div>
                <div className="id">
                    <h1>{user.username}</h1>
                </div>
            </div>
            
            <div className="box-2">
                description temporary description temporary description temporary description
            </div>
            <div className="box-3">
                <table className = "stats">
                    <tr><td className="alignright"><b>score: </b></td> <td><p>{user.score}</p></td></tr>
                    <tr><td className="alignright"><b>permission:</b></td> <td><p>{user.permissions}</p></td></tr>
                </table>
            </div>
            
        </div>
    );

}