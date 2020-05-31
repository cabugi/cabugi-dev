const connection = require('../database/connection');
const bcrypt = require('bcrypt');

module.exports = {

	async check(req, res) {

		const { username, password } = req.body;

		let hash = bcrypt.hashSync(password, 10);

		const db_json = await connection('users').where({
				username: `${username}`,
			}).select('password').first();
		
		if( db_json !== undefined && !bcrypt.compareSync(hash, db_json['password']) ) {
			return res.status(200).send("User found");
		}

		return res.status(401).send("Wrong username or password");
	}
}
