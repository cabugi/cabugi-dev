const connection = require('../database/connection');

module.exports = {
    async list(req, res) {

        const {
            title = '',
            page = 1
        } = req.query;

        const problems = await connection('problems')
            .limit(10)
            .offset((page - 1) * 10)
            .select('*')
            .where("title", 'like', '%' + title + '%');

        return res.json(problems);
    },

    async create(req, res) {

        const {
            user_id,
            title
        } = req.body;

        const checkDuplicate = await connection('problems')
            .where('title', title)
            .select('*')
            .first();

        if (checkDuplicate) {
            return res.status(400).send("There is already a problem with the title " + title);
        }
        await connection('problems').insert({
            user_id,
            title
        });
        return res.status(201).send("Problem created.");
    },
}