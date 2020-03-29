const express = require('express');

const app = express();

app.get('/blog/:postName', (req, res) => {
	res.send(req.params.postName);
});

app.listen(2020);
