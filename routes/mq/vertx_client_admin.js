/**
 * New node file
 */



////////////////////////////////////////
//Create a topic
var Vertx = require("vertx-js/vertx");
var AdminUtils = require("vertx-kafka-client-js/admin_utils");
var adminUtils = AdminUtils.create(Vertx.vertx(), "localhost:2181", true);
// Create topic 'myNewTopic' with 2 partition and 1 replicas
adminUtils.createTopic("myNewTopic", 2, 1, function (result, result_err) {
  if (result_err == null) {
    console.log("Creation of topic myNewTopic successful!")} else {
    console.log("Creation of topic myNewTopic failed: " + result_err.getLocalizedMessage())}
});


////////////////////////////////////////
//Delete a topic
var Vertx = require("vertx-js/vertx");
var AdminUtils = require("vertx-kafka-client-js/admin_utils");
var adminUtils = AdminUtils.create(Vertx.vertx(), "localhost:2181", true);
// Delete topic 'myNewTopic'
adminUtils.deleteTopic("myNewTopic", function (result, result_err) {
  if (result_err == null) {
    console.log("Deletion of topic myNewTopic successful!")} else {
    console.log("Deletion of topic myNewTopic failed: " + result_err.getLocalizedMessage())}
});



///////////////////////////////////////
//Change a topic’s configuration
var Vertx = require("vertx-js/vertx");
var AdminUtils = require("vertx-kafka-client-js/admin_utils");
var adminUtils = AdminUtils.create(Vertx.vertx(), "localhost:2181", true);
// Set retention to 1000 ms and max size of the topic partition to 1 kiByte
var properties = {};
properties["delete.retention.ms"] = "1000";
properties["retention.bytes"] = "1024";
adminUtils.changeTopicConfig("myNewTopic", properties, function (result, result_err) {
  if (result_err == null) {
    console.log("Configuration change of topic myNewTopic successful!")} else {
    console.log("Configuration change of topic myNewTopic failed: " + result_err.getLocalizedMessage())}
});



//////////////////////////////////////
//Check if a topic exists
var Vertx = require("vertx-js/vertx");
var AdminUtils = require("vertx-kafka-client-js/admin_utils");
var adminUtils = AdminUtils.create(Vertx.vertx(), "localhost:2181", true);
adminUtils.topicExists("myNewTopic", function (result, result_err) {
  if (result_err == null) {
    console.log("Topic myNewTopic exists: " + result);
  } else {
    console.log("Failed to check if topic myNewTopic exists: " + result_err.getLocalizedMessage())}
});

