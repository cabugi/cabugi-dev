import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:2999',
    headers: {'Access-Control-Allow-Origin': '*'},
    
});

export default api;