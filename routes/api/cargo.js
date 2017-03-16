/**
 * New node file
 */
var express = require('express');
var router = express.Router();
var db = require('./db');


//-------------------------------------------------------------
/* POST create a logistic cargo. */
router.post('/create_cargo', function(req, res, next) {
	if(req.body){
		console.log(req.body);
		/*
		 	id : Number,
			name : String,
			enterprise_id:Number,
			enterprise_erp_id:String,
			net_weight:Number,
			unit_weight:Number,
			unit_length:Number,
			unit_width:Number,
			unit_height:Number,
			cargo_type:Number,
			desc:String,
			gen_pic_url:String,
			status:Number,
			last_op: Date
		 */
		db.create_cargo(
				req.body.id,
				req.body.name,
				req.body.enterprise_id,
				req.body.enterprise_erp_id,
				req.body.net_weight,
				req.body.unit_weight,
				req.body.unit_length,
				req.body.unit_width,
				req.body.unit_height,
				req.body.cargo_type,
				req.body.desc,
				req.body.gen_pic_url,
				req.body.status,
				Date.now()
				);
		res.send("success");
	}else{
		res.send("test create_cargo");
	}
});

/* POST update a logistic cargo. */
router.post('/update_cargo', function(req, res, next) {
	if(req.body){
		console.log(req.body);
		db.update_cargo(req.body.id, req.body.status);
		res.send("success");
	}else{
		res.send("test update_cargo");
	}
});

/* POST query a logistic cargo. */
router.post('/query_cargo', function(req, res, next) {
res.send("test query_cargo");
});

/* POST delete a logistic cargo. */
router.post('/delete_cargo', function(req, res, next) {
res.send("test delete_cargo");
});

module.exports = router;