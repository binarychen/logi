/**
 * New node file
 */
'use strict';

var consume = function(){
	
	var kafka = require('kafka-node');
	var Consumer = kafka.Consumer;
	
	var client = new kafka.client('111.231.10.132:12181');
	
	var Offset = kafka.Offset;
	var offset = new Offset(client);
	
	console.log('consumer connecting......');
	
	var topics = [{
		topic: 'new_cargo',
		partition: 0,
		offset: 537
	},{
		topic: 'new_driver',
		partition: 1,
		offset: 310
	},{
		topic: 'new_truck',
		partition: 2,
		offset: 20103
	},{
		topic: 'new_order',
		partition: 3,
		offset: 42055
	}];
	
	var options = {
		autoCommit: false,
		autoCommitMsgCount: 100,
		autoCommitIntervalMs: 1000,
		fetchMaxWaitMs: 100,
		fetchMinBytes: 1,
		fetchMaxBytes: 1024*10,
		fromOffset: true,
		fromBeginning: false
	};
	
	var consumer = new Consumer(client, topics, options);
	
	consumer.on('message', function(message){
		var key = message.key.toString();
		console.log(key);
		if(key !== -1){
			console.log(message);
			try{
				var msg = JSON.parse(message.value);
				ServerRouter.dispatch(key, msg);
			}catch(e){
				console.log(e);
			}
		}else{
			console.log(message);
		}
	});
	
	consumer.on('error', function(message){
		console.log(message);
		console.log('kafka error!');
	});
};

module.exports = consume;