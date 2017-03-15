/**
 * http://usejsdoc.org/
 */
var express = require('express');
var router = express.Router();
var db = require('./db');


//-------------------------------------------------------------
/* POST create a logistic shipper. */
router.post('/create_shipper', function(req, res, next) {
	if(req.body){
		console.log(req.body);
		db.create_shipper(
				req.body.id,
				req.body.name,
				req.body.china_id,
				req.body.phone,
				req.body.enterprise_uni_code,
				Date.now(),
				Date.now()
				);
		res.send("success");
	}else{
		res.send("test create_shipper");
	}
});

/* POST update a logistic shipper. */
router.post('/update_shipper', function(req, res, next) {
	if(req.body){
		console.log(req.body);
		db.update_shipper(req.body.id, req.body.status);
		res.send("success");
	}else{
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

module.exports = router;