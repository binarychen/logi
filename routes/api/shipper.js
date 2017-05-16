/**
 * http://usejsdoc.org/
 */
var express = require('express');
var router = express.Router();
var db = require('./db');

var shipper_id = 200000000;

//-------------------------------------------------------------
/* POST create a logistic shipper. */
router.post('/create_shipper', function(req, res, next) {
	if (req.body) {
		console.log(req.body);
		db.create_shipper(
				shipper_id, 
				req.body.name, 
				req.body.china_id,
				req.body.china_id_screen_url, 
				req.body.phone,
				req.body.enterprise_uni_code, 
				Date.now(), 
				Date.now());
		res.send("success");
		shipper_id = shipper_id + 1;
	} else {
		res.send("test create_shipper");
	}
});

/* POST update a logistic shipper. */
router.post('/update_shipper', function(req, res, next) {
	if (req.body) {
		console.log(req.body);
		db.update_shipper(req.body.id, req.body.status);
		res.send("success");
	} else {
		res.send("test update_shipper");
	}
});

/* POST query a logistic shipper. */
router.post('/query_shipper', function(req, res, next) {
	res.send("test query_shipper");
});

/* POST delete a logistic shipper. */
router.post('/delete_shipper', function(req, res, next) {
	res.send("test delete_shipper");
});

////////////////////////////////////////////////////////////////////////////////////
//
//PAGES
//
////////////////////////////////////////////////////////////////////////////////////
router.get('/add', function(req, res, next) {
	console.log(req.body);
	res.render('shipper_add', {
		title : 'Add Shipper',
		message : "Hello"
	});
});

router.get('/my', function(req, res, next) {
	console.log(req.body);
	res.render('my_shipper', {
		title : 'My Shipper',
		message : "Hello"
	});
});

module.exports = router;