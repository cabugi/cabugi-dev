const connection = require('../database/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {

	async check(req, res) {

		const { user, password } = req.body;

		let hash = bcrypt.hashSync(password, 10);

		// DB query
		const db_json = await connection('users').where({
				username: `${user}`,
			}).orWhere("email", user).select('password').first();
		
		// Check if user exists
		if( db_json === undefined && bcrypt.compareSync(hash, db_json['password']) ) {
			console.log("opa")
			return res.status(401).send("Wrong username or password");
		}
		
		// Generate token for session
		// change secret key later
		jwt.sign({user: user}, 'senhafoda', (err, token) => {
			return res.send({
				token: token
			});
		});
	}
}
