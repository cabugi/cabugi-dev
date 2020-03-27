const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send("Opa td bom?");
}); 
app.listen(2020);