/**
 * http://usejsdoc.org/
 */
var express = require('express');
var router = express.Router();
var db = require('./db');
//var producer = require('../mq/produce');
var mqtt = require('../mq/mqtt_client');


var driver_id = 300000000;

//-------------------------------------------------------------
/* POST create a logistic driver. */
router.post('/create_driver', function(req, res, next) {
	if (req.body) {
		console.log(req.body);
		db.create_driver(driver_id, req.body.name, req.body.china_id,
				req.body.phone, req.body.license, req.body.enterprise_uni_code,
				req.body.status, req.body.china_id_screen_url, //v2.0
				req.body.license_screen_url, //v2.0
				Date.now(), Date.now());
		res.send("success");

		//////////////////////
		/*/ Produce a message to all shippers
		producer.create_topic('new_driver');
		producer.produce("new_driver", "driver_id", driver_id, function(data){
			console.log("log 28:" + data);
		});
		*/
		mqtt.connect_pub("new_driver", "driver_id="+driver_id);
		
		driver_id = driver_id + 1;
		

	} else {
		res.send("test create_driver");
	}
});

/* POST update a logistic driver. */
router.post('/update_driver', function(req, res, next) {
	if (req.body) {
		db.update_driver(req.body.id, req.body.status);
		res.send("success");
	} else {
		res.send("test update_driver");
	}
});

/* POST query a logistic driver. */
router.post('/query_driver', function(req, res, next) {
	res.send("test query_driver");
});

router.post('/nearest_drivers', function(req, res, next) {
	console.log(req.body);
	res.send("test nearest_drivers, please call nearest_trucks");
	//return db.get_nearest_drivers(req.body.log, req.body.lat, req.body.limit);
});

/* POST delete a logistic driver. */
router.post('/delete_driver', function(req, res, next) {
	res.send("test delete_driver");
});

////////////////////////////////////////////////////////////////////////////////////
//
//PAGES
//
////////////////////////////////////////////////////////////////////////////////////
router.get('/add', function(req, res, next) {
	console.log(req.body);
	res.render('driver_add', {
		title : 'Add Driver',
		message : "Hello"
	});
});

router.get('/my', function(req, res, next) {
	console.log(req.body);
	res.render('my_driver', {
		title : 'My Driver',
		message : "Hello"
	});
});

module.exports = router;