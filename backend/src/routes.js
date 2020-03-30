const routes = require("express").Router();
const usersController = require('./controllers/usersController');
const sessionController = require('./controllers/sessionController');

routes.get('/users', usersController.list);
routes.post('/users/register', usersController.register);
routes.delete('/users/delete', usersController.delete);

routes.get('/users/login', sessionController.check);

module.exports = routes;
