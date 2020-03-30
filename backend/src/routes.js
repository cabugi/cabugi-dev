const routes = require("express").Router();
const connection = require('./database/connection');
const crypto = require('crypto');



routes.get('/users', async (req, res) => {
    const { username } = req.body;
    const check = await connection('users').select('*');    
    return res.json({check});
});

routes.post('/users/register', async (req, res)  => {

        const {
            username,
            name,
            email,
            password,
            country,
            state,
            city,
            school_org,
            birthday,
            contact,
        } = req.body;


        // Check if a user with that username or email exists
        const checkUsername = await connection.select('*').from('users').where('username', username);
        const checkEmail = await connection.select('*').from('users').where('email', email);       
        if(checkUsername.length || checkEmail.length) return res.status(400).send("User already exists");

        // Generate a random id to user
        const id = crypto.randomBytes(4).toString('HEX');
        const permissions = 'user';

        await connection('users').insert({
            id,
            username,
            name,
            email,
            password,
            country,
            state,
            city,
            school_org,
            birthday,
            permissions,
            contact
        });

        return res.status(200).send("User created.");
});

routes.delete('/users/delete', async (req, res)  => {
    const {
        loggedUser,
        username,
        permissions
    } = req.headers;
    if(permissions !== 'admin' && loggedUser!=username){
        return res.status(401).send("You cannot delete this account.");
    }
    await connection.from('users').where('username', username).delete();

    return res.status(200).send("User deleted.");
});



module.exports = routes;
