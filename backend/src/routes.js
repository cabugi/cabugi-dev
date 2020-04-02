const routes = require("express").Router();
const usersController = require('./controllers/usersController');
const sessionController = require('./controllers/sessionController');
const submissionsController = require('./controllers/submissionsController')
const problemsController = require('./controllers/problemsController')

routes.get('/users', usersController.list);
routes.get('/users/login', sessionController.check);
routes.post('/users', usersController.register);
routes.delete('/users', usersController.delete);

routes.get('/submissions', submissionsController.list);
routes.post('/submissions', submissionsController.send);
routes.delete('/submissions', submissionsController.delete);


routes.post('/problems', problemsController.create);
routes.get('/problems', problemsController.list);

module.exports = routes;
