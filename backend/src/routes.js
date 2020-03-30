const routes = require("express").Router();
const usersController = require('./controllers/usersController');
const sessionController = require('./controllers/sessionController');
const submissionsController = require('./controllers/submissionsController')

routes.get('/users', usersController.list);
routes.post('/users/register', usersController.register);
routes.delete('/users/delete', usersController.delete);
routes.get('/users/login', sessionController.check);

routes.get('/submissions', submissionsController.list);
routes.delete('/submissions/delete', submissionsController.delete);

module.exports = routes;
