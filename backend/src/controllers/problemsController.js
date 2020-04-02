const connection = require('../database/connection');

module.exports = {

    async create(req, res) {

        const {
            user_id,
            title
        } = req.body;

        const checkDuplicate = await connection('problems')
        .where('title', title)
        .select('*')
        .first();

        if(checkDuplicate){
            return res.status(400).send("There is already a problem with the title " + title);
        }
        await connection('problems').insert({
            user_id,
            title
        });
        return res.status(201).send("Problem created.");
    },
}