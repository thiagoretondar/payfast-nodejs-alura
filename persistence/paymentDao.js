function paymentDao(connection) {
	this._connection = connection;
}

paymentDao.prototype.save = function(payment, callback) {
	this._connection.query('INSERT INTO payments SET ?', payment, callback);
};

paymentDao.prototype.list = function(payment) {
	this._connection.query('SELECT * FROM payments', callback);
};

paymentDao.prototype.searchById = function(id, callback) {
	this._connection.query('SELECT * FROM payments WHERE id = ?', id, callback);
};

paymentDao.prototype.update = function(payment, callback) {
	this._connection.query('UPDATE payments SET status = ? WHERE id = ?', [payment.status, payment.id], callback);
}

module.exports = function(){
		return paymentDao;
};
