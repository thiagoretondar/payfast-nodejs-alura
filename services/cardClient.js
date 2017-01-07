var restify = require('restify');

var client = restify.createJsonClient({
	url: 'http://localhost:3001'
});

client.post('/cartoes/autoriza', function(error, req, res, responseReturned) {
	console.log('Using card services');
	console.log(responseReturned);
});