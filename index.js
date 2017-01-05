var express = require('express');
var app =  express();

app.listen(3000, function() {
	console.log("Server running on port 3000");
});

app.get('/test', function(req, res) {
	console.log('Received request on /test with success');
	res.send('Ok!');
});