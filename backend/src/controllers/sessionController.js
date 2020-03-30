const connection = require('../database/connection');

module.exports = {

	async check(req, res) {

		const { username, password} = req.body;

		const checkUser = await connection('users').where({
				username: `${username}`,
				password: `${password}`
			}).select('username', 'password').first();

		if(!checkUser) {
			return res.status(404).send("Wrong username or password");
		}
		return res.status(200).send("User found");
	}
}
