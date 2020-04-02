const connection = require('../database/connection');

module.exports = {

    async create(req, res) {

        const {
            user_id,
            title
        } = req.body;

        await connection('problems').insert({
            user_id,
            title
        });
        return res.status(201).send("Problem created.");
    },
}