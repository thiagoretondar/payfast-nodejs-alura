var memCached = require('memcached');

var client = new memCached('localhost:11211', {
	retries: 10,
	retry: 10000,
	remove: true,
	maxKeySize: 10
});

client.get('payment-20', function(error, cacheReturned) {

	if (error || !cacheReturned) {
		console.log('MISS - key not found');
	} else {
		console.log('HIT - value: ' + JSON.stringify(cacheReturned));
	}

});

client.set('payment-20', {'id' : 30}, 100000, function(error) {
	console.log('New key added to the cache!');
});