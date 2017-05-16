/**
 * New node file
 */
var express = require('express');
var router = express.Router();
var db = require('./db');

var cargo_id = 500000000;

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
				cargo_id,
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
		cargo_id = cargo_id + 1;
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


////////////////////////////////////////////////////////////////////////////////////
//
//PAGES
//
////////////////////////////////////////////////////////////////////////////////////
router.get('/add', function(req, res, next) {
console.log(req.body);
res.render('cargo_add', {
title : 'Add cargo',
message : "Hello"
});
});

router.get('/my', function(req, res, next) {
console.log(req.body);
res.render('my_cargo', {
title : 'My cargo',
message : "Hello"
});
});

module.exports = router;