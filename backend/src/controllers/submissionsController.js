const connection = require('../database/connection');
const judge = require('../judge/judge')
const fs = require('fs')

module.exports = {
    
    // List submissions
    async list(req, res) {

        const { page = 1 } = req.query;
        // List 10 submissions every page
        const check = await connection('submissions')
            .limit(10)
            .offset((page - 1) * 10)
            .select('*');

        return res.json(check);
    },

    async listByUser(req, res) {
        const {username} = req.headers;
        const { page = 1 } = req.query;
        // List 10 submissions every page
        const check = await connection('submissions')
            .limit(10)
            .offset((page - 1) * 10)
            .select('*')
            .where('username', username);

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
    },

        // Send submissions
    async send(req, res) {
        const body = req.body;

        if (typeof body["username"] == "undefined") {
            res.status(400).send("Invalid username");
        }
        else if (typeof body["source"] == "undefined") {
            res.status(400).send("Invalid source code");
        }else if (typeof body["problem"] == "undefined") {
            res.status(400).send("Problem not found");
        }else {
            let id = (await connection('submissions')).length + 1;
            
            fs.writeFile(`./src/judge/submissions/submission_${id}.cpp`, body["source"], function (err) {
                if (err) throw err;
            });
            
            let response = await judge(body["problem"], `./src/judge/submissions/submission_${id}.cpp`, "./src/judge/config/config.yml");
            for (let i = 0; i < response.length; i++)
                response[i] = JSON.stringify(response[i]);
            
            response = response.join(";");

            // Generate a submission ID
            await connection('submissions').insert({
                "problem_id": body["problem"],
                "user_id": body["username"],
                "language": "CPP17",
                response
            });

            //await connection.from('submissions').column
            res.status(200).send(response);
        }
    }
}

