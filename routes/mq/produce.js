/**
 * New node file
 */

var kafka = require('kafka-node');
var KeyedMessage = kafka.KeyedMessage;
var Producer = kafka.Producer;
var client = new kafka.Client('111.231.10.132:12181');

var producer = new Producer(client);
console.log('producer connecting kafka.........');

function produce(atopic, key, message, cb) {
	console.log(4);

	var payloads = [ {
		topic : atopic,
		messages : new KeyedMessage(key, message)
	} ];

	producer.on('ready', function() {
		console.log(3);
	});

	producer.send(payloads, function(err, data) {
		if (!err) {
			console.log(err);
		}
		console.log(data);
		console.log(key + message);
		cb(data);
	});

}

module.exports = produce;
