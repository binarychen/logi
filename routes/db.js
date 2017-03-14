/**
 * New node file
 */
var MongoClient = require('mongodb').MongoClient;
var mongoose = require("mongoose");
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var express = require('express');
var router = express.Router();
var oam = require('./oam');

var data;
var insertDocuments;
var findDocuments;

mongoose.Promise = global.Promise;
mongoose.set('debug', true);
var db = mongoose.connect('mongodb://test:test@123.206.192.28:27017/logi');
var Schema = mongoose.Schema;

db.connection.on("error", function(error) {
	console.log("数据库连接失败：" + error);
});

db.connection.once("open", function() {
	console.log("数据库连接成功");
});

var Schema_dirver = new Schema({
	id : Number,
	name : String,
	china_id:String,
	phone : String,
	license:String,
	enterprise_uni_code:String,
	status: Number,
	reg_time:Data,
	last_login : Date
}, {
	versionKey : false
});

var Schema_shipper = new Schema({
	id : Number,
	name : String,
	china_id : Number,
	phone : String,
	enterprise_uni_code:String,
	reg_time:Date,
	last_login : Date
}, {
	versionKey : false
});

var Schema_shipper_enterprise = new Schema({
	id : Number,
	enterprise_uni_code:String,
	shipper_id:Number,
	op_range:Number,
	last_order : Date
}, {
	versionKey : false
});

var Schema_order = new Schema({
	id : Number,
	name : String,
	enterprise_id:Number,
	driver_id:Number,
	truck_id:Number,
	status:Number,
	desc:String,
	gen_pic_url:String,
	accept_order_pic_url:String,
	deliver_pic_url:String,
	arrived_pic_url:String,
	accept_delivery_pic_url:String,
	last_op : Date
}, {
	versionKey : false
});

var Schema_cargo = new Schema({
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
}, {
	versionKey : false
});

var Schema_truck = new Schema({
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
}, {
	versionKey : false
});

mongoose.model("drvier", Schema_dirver);
mongoose.model("shipper", Schema_shipper);
mongoose.model("order", Schema_order);

router.create_driver = function() {
	var adriver = new Schema_dirver({
		name : "sam976",
		id : 123,
		phone : "18706888888",
		date : Date.now()
	});
	adriver.save(function(err) {
	});
}

router.create_shipper = function() {
	var adriver = new Schema_shipper({
		name : "sam976",
		id : 123,
		phone : "18706888888",
		date : Date.now()
	});
	adriver.save(function(err) {
	});
}

router.create_order = function() {
	var adriver = new Schema_order({
		name : "sam976",
		id : 123,
		phone : "18706888888",
		date : Date.now()
	});
	adriver.save(function(err) {
	});
}

router.update_driver = function() {
	Schema_dirver.update({
		name : "sam976"
	}, {
		id : 456,
		phone : "12345678910"
	}, function(error) {
	});
}

router.update_shipper = function() {
	Schema_dirver.update({
		name : "sam976"
	}, {
		id : 456,
		phone : "12345678910"
	}, function(error) {
	});
}

router.update_order = function() {
	Schema_dirver.update({
		name : "sam976"
	}, {
		id : 456,
		phone : "12345678910"
	}, function(error) {
	});
}

/*
 * router.dbConn = function(tableName) { console.log("table:-"+tableName); var
 * MongoClient = mongodb.MongoClient; var url =
 * 'mongodb://123.206.192.28:27017//logi'; console.log(url);
 * console.log("test"); MongoClient.connect(url, function(err, db) { var
 * collection = db.collection(tableName);
 * 
 * collection.find().toArray(function(err, data) { console.log("DB Selected:-",
 * data); }); }); }
 */

module.exports = router;