/**
 * New node file
 */
//var MongoClient = require('mongodb').MongoClient;
var mongoose = require("mongoose");
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var express = require('express');
var router = express.Router();

var data;
var insertDocuments;
var findDocuments;

mongoose.Promise = global.Promise;
mongoose.set('debug', true);
var db = mongoose.connect('mongodb://test2:test2@123.206.192.28:27017/logi');
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
	reg_time:Date,
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

var Schema_dirver = db.model("drvier", Schema_dirver);
var Schema_shipper = db.model("shipper", Schema_shipper);
var Schema_order = db.model("order", Schema_order);

router.create_driver = function(vid,
		vname,
		vchina_id,
		vphone,
		vlicense,
		venterprise_uni_code,
		vstatus,
		vreg_time,
		vlast_login) {
	var adriver = new Schema_dirver({
		id : vid,
		name : vname,
		china_id:vchina_id,
		phone : vphone,
		license:vlicense,
		enterprise_uni_code:venterprise_uni_code,
		status: vstatus,
		reg_time:vreg_time,
		last_login : vlast_login//Date.now()
	});
	adriver.save(function(err) {
		if(err){
		    console.log(err);
		  }else{
		    console.log('success');
		  }
		//db.close();
	});
};

router.create_shipper = function(vid,
		vname,
		vchina_id,
		vphone ,
		venterprise_uni_code,
		vreg_time,
		vlast_login) {
	var adriver = new Schema_shipper({
		id : vid,
		name : vname,
		china_id : vchina_id,
		phone : vphone,
		enterprise_uni_code:venterprise_uni_code,
		reg_time:vreg_time,
		last_login : vlast_login
	});
	adriver.save(function(err) {
		if(err){
		    console.log(err);
		  }else{
		    console.log('success');
		  }
		//db.close();
	});
};

router.create_order = function(vid,
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
		vlast_op) {
	var adriver = new Schema_order({
		id : vid,
		name : vname,
		enterprise_id:venterprise_id,
		driver_id:vdriver_id,
		truck_id:vtruck_id,
		status:vstatus,
		desc:vdesc,
		gen_pic_url:vgen_pic_url,
		accept_order_pic_url:vaccept_order_pic_url,
		deliver_pic_url:vdeliver_pic_url,
		arrived_pic_url:varrived_pic_url,
		accept_delivery_pic_url:vaccept_delivery_pic_url,
		last_op : vlast_op
	});
	adriver.save(function(err) {
		if(err){
		    console.log(err);
		  }else{
		    console.log('success');
		  }
		//db.close();
	});
};

router.update_driver = function(vid, vstatus) {
	Schema_dirver.update({
		id : vid
	}, {
		status : vstatus
	}, function(err) {
		if(err){
		    console.log(err);
		  }else{
		    console.log('success');
		  }
		//db.close();
	});
};

router.update_order = function(vid, vstatus) {
	Schema_dirver.update({
		id : vid
	}, {
		status : vstatus
	}, function(err) {
		if(err){
		    console.log(err);
		  }else{
		    console.log('success');
		  }
		//db.close();
	});
};

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