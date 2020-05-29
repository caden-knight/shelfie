require('dotenv').config();
const express = require('express'),
	massive = require('massive'),
	{ SERVER_PORT, CONNECTION_STRING } = process.env;
	port = SERVER_PORT, 
	ctrl = require('./controller'), 
	app = express(); 

app.use(express.json());

massive({
	connectionString: CONNECTION_STRING,
	ssl: {rejectUnauthorized: false}
})
	.then((db) => {
		app.set('db', db);
		console.log('connected son');
	})
	.catch((err) => console.log(err));

app.listen(SERVER_PORT, () => console.log(`I'm watching you Wazowski ${SERVER_PORT}`));

app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.createProduct)
app.delete('/api/product/:id', ctrl.removeProduct)
