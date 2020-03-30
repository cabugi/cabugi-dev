const connection = require('../database/connection');

module.exports = {
	
	async check(req, res) {

		const { username } = req.body;

		const checkUser = await connection('users').where({
				username: `${username}`,
			}).select('username').first();

		if(!checkUser) {
			return res.status(404).send("User with that username not found");
		}
		return res.status(200).send("User found");
	}
}
