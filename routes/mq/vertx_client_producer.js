/**
 * New node file
 */


var KafkaProducer = require("vertx-kafka-client-js/kafka_producer");

// creating the producer using map and class types for key and value serializers/deserializers
var config = {};
config["bootstrap.servers"] = "localhost:9092";
config["key.serializer"] = "org.apache.kafka.common.serialization.StringSerializer";
config["value.serializer"] = "org.apache.kafka.common.serialization.StringSerializer";
config["acks"] = "1";

// use producer for interacting with Apache Kafka
var producer = KafkaProducer.create(vertx, config);



//////////////////////////////////////

var KafkaProducerRecord = require("vertx-kafka-client-js/kafka_producer_record");

for (var i = 0;i < 5;i++) {

  // only topic and message value are specified, round robin on destination partitions
  var record = KafkaProducerRecord.create("test", "message_" + i);

  producer.write(record, function (done, done_err) {

    if (done_err == null) {

      var recordMetadata = done;
      console.log("Message " + record.value() + " written on topic=" + recordMetadata.topic + ", partition=" + recordMetadata.partition + ", offset=" + recordMetadata.offset);
    }

  });
}


///////////////////////////////////////////////

producer.close(function (res, res_err) {
	  if (res_err == null) {
	    console.log("Producer is now closed");
	  } else {
	    console.log("close failed");
	  }
	});