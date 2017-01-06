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

			req.assert("payment_type", "Payment type is mandatory").notEmpty();
			req.assert("value", "Value is mandatory and must be decimal").notEmpty().isFloat();

			var validationErrors = req.validationErrors();

			if (validationErrors) {
				console.log("Validation Errors found: " + validationErrors);
				res.status(500).send(validationErrors);
				return;
			}

			if (error) {
				console.log('Error on creation of payment: ' + error);
			} else {
				console.log('Payment created!');
				res.location('/payments/payment/' + result.insertId);
				res.status(201).json(payment);
			}
		});
	});

};
