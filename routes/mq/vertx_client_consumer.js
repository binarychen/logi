/**
 * New node file
 */

var KafkaConsumer = require("vertx-kafka-client-js/kafka_consumer");

// creating the consumer using map config
var config = {};
config["bootstrap.servers"] = "localhost:9092";
config["key.deserializer"] = "org.apache.kafka.common.serialization.StringDeserializer";
config["value.deserializer"] = "org.apache.kafka.common.serialization.StringDeserializer";
config["group.id"] = "my_group";
config["auto.offset.reset"] = "earliest";
config["enable.auto.commit"] = "false";

// use consumer for interacting with Apache Kafka
var consumer = KafkaConsumer.create(vertx, config);

////////////////////

//register the handler for incoming messages
consumer.handler(function(record) {
	console
			.log("Processing key=" + record.key() + ",value=" + record.value()
					+ ",partition=" + record.partition() + ",offset="
					+ record.offset());
});

// subscribe to several topics
var topics = new (Java.type("java.util.HashSet"))();
topics.add("topic1");
topics.add("topic2");
topics.add("topic3");
consumer.subscribe(topics, function(ar, ar_err) {
	if (ar_err == null) {
		console.log("subscribed");
	} else {
		console.log("Could not subscribe " + ar_err.getMessage());
	}
});

// or just subscribe to a single topic
consumer.subscribe("a-single-topic", function(ar, ar_err) {
	if (ar_err == null) {
		console.log("subscribed");
	} else {
		console.log("Could not subscribe " + ar_err.getMessage());
	}
});

//////////////////////////////////

//registering handlers for assigned and revoked partitions
consumer.partitionsAssignedHandler(function(topicPartitions) {

	console.log("Partitions assigned");
	Array.prototype.forEach.call(topicPartitions, function(topicPartition) {
		console.log(topicPartition.topic + " " + topicPartition.partition);
	});
});

consumer.partitionsRevokedHandler(function(topicPartitions) {

	console.log("Partitions revoked");
	Array.prototype.forEach.call(topicPartitions, function(topicPartition) {
		console.log(topicPartition.topic + " " + topicPartition.partition);
	});
});

// subscribes to the topic
consumer.subscribe("test", function(ar, ar_err) {

	if (ar_err == null) {
		console.log("Consumer subscribed");
	}
});

/////////////////////////////

//consumer is already member of a consumer group

//unsubscribing request
consumer.unsubscribe(function(ar, ar_err) {

	if (ar_err == null) {
		console.log("Consumer unsubscribed");
	}
});


///////////////////////////////////////

consumer.close(function (res, res_err) {
	  if (res_err == null) {
	    console.log("Consumer is now closed");
	  } else {
	    console.log("close failed");
	  }
	});




////////////////////////////////////////

//setting handler for errors
consumer.exceptionHandler(function (e) {
  console.log("Error = " + e.getMessage());
});