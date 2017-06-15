/**
 * New node file
 */

var mqtt = require('mqtt');

mqtt.connect_pub = function(atopic, amessage) {

	var client = mqtt.connect('tcp://111.231.10.132:1883', {
		username : "eric",
		password : "nio#1234"
	});

	client.on('connect', function() {
		console.log(atopic+"--"+amessage);
		client.publish(atopic, amessage);
	});

	client.on('message', function(topic, message) {
		// message is Buffer
		console.log(message.toString());
		client.end();
	});
	
	/*
	client.end(false, function() {
		console.log("close myself.");
	});
	*/
};

module.exports = mqtt;