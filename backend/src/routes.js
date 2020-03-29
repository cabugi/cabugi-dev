const routes = require("express").Router();

routes.get('/routes', (request, response)=> {

    return response.json({
        status: 'Its working!'
    });

});


module.export = routes;
