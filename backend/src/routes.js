const routes = require("express").Router();
const usersController = require('./controllers/usersController');

routes.get('/users', usersController.list);
routes.post('/users/register', usersController.register);
routes.delete('/users/delete', usersController.delete);

module.exports = routes;
