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

    return (<h1>{JSON.stringify(user)}</h1>);

}