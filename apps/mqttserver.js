/**
 * http://usejsdoc.org/
 */

var mosca = require('mosca');
var MqttServer = new mosca.Server({
    port: 1883
});

MqttServer.on('clientConnected', function(client){
    console.log('client connected', client.id);
});

/**
 * 监听MQTT主题消息
 **/
MqttServer.on('published', function(packet, client) {
    var topic = packet.topic;
    console.log('message-arrived--->','topic ='+topic+',message = '+ packet.payload.toString());

});

MqttServer.on('ready', function(){
    console.log('mqtt is running...');
    //MqttServer.authenticate = authenticate;
});