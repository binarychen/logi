/**
 * http://usejsdoc.org/
 */
var express = require('express');
var router = express.Router();
var db = require('./db');


//-------------------------------------------------------------
/* POST create a logistic driver. */
router.post('/create_driver', function(req, res, next) {
	if(req.body){
		console.log(req.body);
		db.create_driver(
				req.body.id,
				req.body.name,
				req.body.china_id,
				req.body.phone,
				req.body.license,
				req.body.enterprise_uni_code,
				req.body.status,
				Date.now(),
				Date.now()
				);
		res.send("success");
	}else{
		res.send("test create_driver");
	}
});

/* POST update a logistic driver. */
router.post('/update_driver', function(req, res, next) {
if(req.body){
	db.update_driver(req.body.id, req.body.status);
	res.send("success");
}else{
	res.send("test update_driver");
}
});

/* POST query a logistic driver. */
router.post('/query_driver', function(req, res, next) {
res.send("test query_driver");
});

/* POST delete a logistic driver. */
router.post('/delete_driver', function(req, res, next) {
res.send("test delete_driver");
});

module.exports = router;