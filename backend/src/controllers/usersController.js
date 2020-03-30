const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async list(req, res) {

        const { page = 1 } = req.query;

        const check = await connection('users')
            .limit(20)
            .offset((page - 1) * 20)
            .select('*');

        return res.json(check);
    },

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
            }).select('*');

        if(check.length) {
            return res.status(400).send("User already exists");
        }

        // Generate a random id to user
        const id = await crypto.randomBytes(4).toString('HEX');
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

        return res.status(201).send("User created.");
    },

    async delete(req, res) {

        const {
            loggedUser,
            username,
            permissions
        } = req.headers;

        if(permissions !== 'admin' || loggedUser != username){
            return res.status(401).send("You cannot delete this account.");
        }

        await connection.from('users').where('username', username).delete();

        return res.status(200).send("User deleted.");
    }
}

