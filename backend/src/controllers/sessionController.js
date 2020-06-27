const connection = require('../database/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {

	async login(req, res) {

		const { user, password } = req.body;

		// DB query
		const databasePassword = await connection('users').where({
			username: `${user}`,
		}).orWhere("email", user).select('password').first();

		// Check if user exists
		if (databasePassword === undefined || (await bcrypt.compare(password, databasePassword['password']) == false)) {
			return res.status(401).send({ message: "Wrong username or password" });
		}

		const userData = await connection('users')
			.where('username', user)
			.orWhere('email', user)
			.first();

		console.log(userData);

		// Generate token for session
		// change secret key later
		await jwt.sign({ userId: userData['id'] }, 'senhafoda', { expiresIn: '30' }, (err, token) => {
			return res.status(200).send({ auth: true, token, username: userData['username'] });
		});
	},

	async verifyToken(req, res, next) {
		const token = req.headers['x-acess-token'];

		await jwt.verify(token, 'senhafoda', (err, decoded) => {
			if (err) return res.status(401).send({ message: "Unauthorized", "error": err });
		})

		next();
	}

}
