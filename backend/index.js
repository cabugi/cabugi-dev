const express = require('express');
const app = express();

app.get('/', (request, response) => {
	return response.json({message: "Opa tudo bom?"});
});

app.listen(9190);