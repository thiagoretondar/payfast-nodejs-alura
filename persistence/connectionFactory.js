var mysql = require('mysql');

function createDbConnection() {
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : 'toor',
		database : 'payfast'
	});
}

module.exports = function() {
	return createDbConnection;
};
