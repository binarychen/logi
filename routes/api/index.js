var express = require('express');
var router = express.Router();
var db = require('db');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.send("test it");
});

/* GET create a logistic order. */
router.get('/create_order', function(req, res, next) {
  res.send("test create_order");
});


//-------------------------------------------------------------
/* POST create a logistic order. */
router.post('/create_order', function(req, res, next) {
	if(req.body){
		console.log(req.body);
		
	}else{
		res.send("test create_order");
	}
});

/* POST update a logistic order. */
router.post('/update_order', function(req, res, next) {
  res.send("test update_order");
});

/* POST query a logistic order. */
router.post('/query_order', function(req, res, next) {
  res.send("test query_order");
});

/* POST delete a logistic order. */
router.post('/delete_order', function(req, res, next) {
  res.send("test delete_order");
});

module.exports = router;
