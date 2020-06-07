const connection = require('../database/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {

	async check(req, res) {

		const { user, password } = req.body;

		// DB query
		const databasePassword = await connection('users').where({
			username: `${user}`,
		}).orWhere("email", user).select('password').first();

		// Check if user exists
		if(databasePassword === undefined || (await bcrypt.compare(password, databasePassword['password']) == false)) {
			return res.status(401).send({message: "Wrong username or password"});
		}

		const userId = await connection('users')
			.where('username', user)
			.orWhere('email', user)
			.select('id')
			.first();
		
		// Generate token for session
		// change secret key later
		await jwt.sign({userId}, 'senhafoda', {expiresIn: '1h'}, (err, token) => {
			return res.status(200).send({auth: true, token});
		});
	}
}
