/**
 * New node file
 */

var kafka = require('kafka-node');
var KeyedMessage = kafka.KeyedMessage;
var Producer = kafka.Producer;
var client = new kafka.Client('111.231.10.132:12181');

var producer = new Producer(client);
console.log('producer connecting kafka.........');

producer.create_topic = function(topic){
	producer.createTopics([topic,], false, function (err, data) {
		console.log("create_topic: " + topic);
		console.log(data);
	});
};

producer.produce = function(atopic, key, message, cb) {
	console.log(atopic);
	console.log(key);
	console.log(message);

	var payloads = [ {
		topic : "test", //atopic,
		messages : new KeyedMessage(key, message)
	} ];

	producer.on('ready', function() {
		console.log(3);
	});

	producer.send(payloads, function(err, data) {
		if (!err) {
			console.log(err);
		}
		console.log("kafka data sent!");
		console.log(data);
		console.log(key + message);
		if(cb !== undefined){
			cb(data);
		}
	});

};

module.exports = producer;
