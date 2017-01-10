var restify = require('restify');

function cardClient() {
	this._client = restify.createJsonClient({
		url: 'http://localhost:3001'
	});
}

cardClient.prototype.authorize = function(card, callback) {
	this._client.post('/cartoes/autoriza', card, callback);
}


module.exports = function() {
	return cardClient;
}