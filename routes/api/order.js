/**
 * http://usejsdoc.org/
 */
var express = require('express');
var router = express.Router();
var db = require('./db');


//-------------------------------------------------------------
/* POST create a logistic order. */
router.post('/create_order', function(req, res, next) {
	if(req.body){
		console.log(req.body);
		/*
		vid,
		vname ,
		venterprise_id,
		vdriver_id,
		vtruck_id,
		vstatus,
		vdesc,
		vgen_pic_url,
		vaccept_order_pic_url,
		vdeliver_pic_url,
		varrived_pic_url,
		vaccept_delivery_pic_url,
		vlast_op
		 */
		
		db.create_order(
				req.body.id,
				req.body.name,
				Date.now(),
				req.body.receiver_name,
				req.body.receiver_address,
				req.body.receiver_mobile,
				req.body.shipper_id,
				req.body.cargo_id,
				req.body.enterprise_id,
				req.body.driver_id,
				req.body.truck_id,
				req.body.from_latitude,
				req.body.from_longitude,
				req.body.to_latitude,
				req.body.to_longitude,
				req.body.status,
				req.body.desc,
				req.body.gen_pic_url,
				req.body.accept_order_pic_url,
				req.body.deliver_pic_url,
				req.body.arrived_pic_url,
				req.body.accept_delivery_pic_url,
				Date.now()
				);
		res.send("success");
	}else{
		res.send("test create_order");
	}
});

/* POST update a logistic order. */
router.post('/update_order', function(req, res, next) {
res.send("test update_order");
	if(req.body){
		console.log(req.body);
		db.update_order(req.body.id, req.body.status);
		res.send("success");
	}else{
		res.send("test update_order");
	}
});

/* POST query a logistic order. */
router.post('/query_order', function(req, res, next) {
res.send("test query_order");
});


/* POST delete a logistic order. */
router.post('/delete_order', function(req, res, next) {
res.send("test delete_order");
});


router.post('/nearest_orders', function(req, res, next){
	console.log(req.body);
	res.send("test nearest_orders");
	return db.get_nearest_orders(req.body.long, req.body.lat, req.body.distance);
});



module.exports = router;