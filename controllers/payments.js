module.exports = function(app) {

	app.get('/payments', function(req, res) {
		console.log('Received request on /payments with success');
		res.send('Ok!');
	});

};