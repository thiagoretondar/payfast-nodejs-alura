module.exports = function(app) {

	app.get('/payments', function(req, res) {
		console.log('Received request on /payments with success');
		res.send('Ok!');
	});

	app.post('/payments/payment', function(req, res) {
		var payment = req.body;
		console.log(payment);
		res.send('Ok!');
	});

};