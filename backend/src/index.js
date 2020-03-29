const express = require('express');
const app = express();

app.get('/', (request, response)=> {
    return response.json({
        status: 'Hello World!'
    });

});

app.listen(2020);
