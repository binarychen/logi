/**
 * New node file
 */
var express = require('express');
var router = express.Router();
var db = require('./db');


//-------------------------------------------------------------
/* POST create a logistic truck. */
router.post('/create_truck', function(req, res, next) {
	if(req.body){
		console.log(req.body);
		/*
		    id : Number,
			vin:String,
			license_plate:String,
			name : String,
			driver_id:Number,
			self_weight:Number,
			brand:String,
			bear_part_length:Number,
			bear_part_width:Number,
			bear_part_height:Number,
			type:Number,
			eval_level:Number,
			status:Number,
			loc_longitude:Number,
			loc_latitude:Number,
			desc:String,
			desc_pic_url:String,
			last_update: Date
		 */
		db.create_truck(
				req.body.id,
				req.body.vin,
				req.body.license_plate,
				req.body.vehicle_license,
				req.body.vehicle_license_screen_url,
				req.body.name,
				req.body.driver_id,
				req.body.self_weight,
				req.body.brand,
				req.body.bear_part_length,
				req.body.bear_part_width,
				req.body.bear_part_height,
				req.body.type,
				req.body.eval_level,
				req.body.status,
				req.body.vehicle_thumb_url,
				req.body.loc_longitude,
				req.body.loc_latitude,
				req.body.desc,
				req.body.desc_pic_url,
				Date.now()
				);
		res.send("success");
	}else{
		res.send("test create_truck");
	}
});

/* POST update a logistic truck. */
router.post('/update_truck', function(req, res, next) {
	if(req.body){
		console.log(req.body);
		db.update_truck(req.body.id, req.body.status);
		res.send("success");
	}else{
		res.send("test update_truck");
	}
});

/* POST query a logistic truck. */
router.post('/query_truck', function(req, res, next) {
res.send("test query_truck");
});

/* POST delete a logistic truck. */
router.post('/delete_truck', function(req, res, next) {
res.send("test delete_truck");
});

router.post('/nearest_trucks', function(req, res, next){
	console.log(req.body);
	res.send("test nearest_trucks");
	return db.get_nearest_trucks(req.body.long, req.body.lat, req.body.distance);
});


module.exports = router;