module.exports = function(app) {

	app.get('/payments', function(req, res) {
		console.log('Received request on /payments with success');
		res.send('Ok!');
	});

	app.post('/payments/payment', function(req, res) {
		var payment = req.body;
		console.log('Processing request for new payment');

		payment.status = 'created';
		payment.date = new Date();

		var connection = app.persistence.connectionFactory();
		var paymentDao = new app.persistence.paymentDao(connection);

		paymentDao.save(payment, function(error, result) {

			if (error) {
				console.log('Error on creation of payment: ' + error);
			} else {
				console.log('Payment created!');
				res.json(payment);
			}
		});
	});

};
