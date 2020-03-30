const connection = require('../database/connection');

module.exports = {
    
    // List submissions
    async list(req, res) {

        const { page = 1 } = req.query;
        // List 10 submissions every page
        const check = await connection('submissions')
            .limit(10)
            .offset((page - 1) * 20)
            .select('*');

        return res.json(check);
    },

    // Delete submissions
    async delete(req, res) {

        const {
            id,
            permissions // Mudar depois para recuperar esse valor pela database
        } = req.headers;

        if(permissions !== 'admin'){
            return res.status(401).send("You cannot delete this submission.");
        }
        check = await connection.from('submissions').where('id', id);
        if(check == ''){
            return res.status(400).send("There is not a submission with the id \"" + id +"\"");
        }

        await connection.from('submissions').where('id', id).delete();
        return res.status(200).send("Submission deleted.");
    }
}

