const crypto = require('crypto');
const connection = require('../database/connection');
const bcrypt = require('bcrypt')

module.exports = {

    // List users
    async list(req, res) {

        const { page = 1 } = req.query;
        // List 20 users every page
        const check = await connection('users')
            .limit(20)
            .offset((page - 1) * 20)
            .select('*');

        return res.json(check);
    },

    // Register user
    async register(req, res) {

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
        const check = await connection('users').where({
            username: `${username}`,
            email: `${email}`,
            }).select('username', 'email').first();

        if(check) {
            return res.status(400).send("User already exists");
        }

        // Generate a random id to user
        const id = await crypto.randomBytes(4).toString('HEX');
        const permissions = 'user';

        bcrypt.hash(password, 10, async function(err, hash) {
            await connection('users').insert({
                id,
                username,
                name,
                email,
                "password": hash,
                country,
                state,
                city,
                school_org,
                birthday,
                permissions,
                contact
            });
        });

        return res.status(201).send("User created.");
    },

    async delete(req, res) {

        const {
            loggedUser,
            username,
            permissions // Mudar depois para recuperar esse valor pela database
        } = req.headers;

        if(permissions !== 'admin' || loggedUser != username){
            return res.status(401).send("You cannot delete this account.");
        }

        await connection.from('users').where('username', username).delete();

        return res.status(200).send("User deleted.");
    }
}

