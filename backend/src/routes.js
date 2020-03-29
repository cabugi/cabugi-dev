const routes = require("express").Router();
const connection = require('./database/connection');
const crypto = require('crypto');



routes.get('/users', async(req, res) => {
    const { username } = req.body;

    const check = await connection.select('*').from('users').where('username', username);
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
        if(check.length || checkEmail) return res.status(400).send("User already exists");

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



module.exports = routes;
