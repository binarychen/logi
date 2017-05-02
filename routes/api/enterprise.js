/**
 * New node file
 */
var express = require('express');
var router = express.Router();
var db = require('./db');


//-------------------------------------------------------------
/* POST create a logistic enterprise. */
router.post('/create_enterprise', function(req, res, next) {
	if(req.body){
		console.log(req.body);
		/*
		  	id : Number,
			enterprise_uni_code:String,
			shipper_id:Number,
			op_range:String,
			last_order : Date
		 */
		db.create_enterprise(
				req.body.id,
				req.body.name,
				req.body.enterprise_uni_code,
				req.body.business_license_code,
				req.body.business_license_screen_url,
				req.body.shipper_id,
				req.body.op_range,
				Date.now()
				);
		res.send("success");
	}else{
		res.send("test create_enterprise");
	}
});

/* POST update a logistic enterprise. */
router.post('/update_enterprise', function(req, res, next) {
	if(req.body){
		console.log(req.body);
		db.update_enterprise(req.body.id, req.body.shipper_id);
		res.send("success");
	}else{
		res.send("test update_enterprise");
	}
});

/* POST query a logistic enterprise. */
router.post('/query_enterprise', function(req, res, next) {
res.send("test query_enterprise");
});

/* POST delete a logistic enterprise. */
router.post('/delete_enterprise', function(req, res, next) {
res.send("test delete_enterprise");
});

module.exports = router;