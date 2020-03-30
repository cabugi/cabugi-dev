const routes = require("express").Router();
const connection = require('./database/connection');
const crypto = require('crypto');
const judge = require('./judge/judge')
const fs = require('fs')

routes.get('/users', async(req, res) => {
    const { username } = req.body;

    const check = await connection.select('*').from('users').where('username', username);
    return res.json({check});
});

routes.post('/submit', async(req, res) => {
    const body = req.body;

    if (typeof body["source"] == "undefined") {
        res.status(400).send("Invalid source code");
    }else if (typeof body["problem"] == "undefined") {
        res.status(400).send("Problem not found");
    }else {

        // Generate a random submisssion id
        const id = crypto.randomBytes(4).toString('HEX');
        fs.writeFile(`./src/judge/submissions/submission_${id}.cpp` ,body["source"], function (err) {
            if (err) throw err;
        });

        res.status(200).send(await judge(body["problem"], `./src/judge/submissions/submission_${id}.cpp`, "./src/judge/config/config.yml"));
     }
})

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
        if (checkUsername.length || checkEmail.length) return res.status(400).send("User already exists");

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
