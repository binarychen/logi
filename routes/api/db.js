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
//var db = mongoose.connect('mongodb://test2:testTest2@123.206.192.28:27017/logi');
var db = mongoose.connect('mongodb://123.206.192.28:27017/logi');
var Schema = mongoose.Schema;

db.connection.on("error", function(error) {
	console.log("数据库连接失败：" + error);
});

db.connection.once("open", function() {
	console.log("数据库连接成功");
});

var Schema_driver = new Schema({
	id : Number,
	name : String,
	china_id:String,
	phone : String,
	license : String,
	enterprise_uni_code : String,
	status : Number,
	china_id_screen_url : String,
	license_screen_url : String,
	reg_time : Date,
	last_login : Date
}, {
	versionKey : false
});

var Schema_shipper = new Schema({
	id : Number,
	name : String,
	china_id : String,
	phone : String,
	enterprise_uni_code:String,
	reg_time:Date,
	last_login : Date
}, {
	versionKey : false
});

var Schema_shipper_enterprise = new Schema({
	id : Number,
	name : String,
	enterprise_uni_code : String,
	business_license_code : String,
	business_license_screen_url : String,
	shipper_id : Number,
	op_range : String,
	last_order : Date
}, {
	versionKey : false
});

var Schema_order = new Schema({
	id : Number,
	name : String,
	order_time : String,
	receiver_name : String,
	receiver_address : String,
	receiver_mobile : String,
	shipper_id : Number,
	cargo_id : Number,
	enterprise_id : Number,
	driver_id : Number,
	truck_id : Number,
	from_location : {
		type: [Number],
		index: {
			type: '2dsphere',
			sparse: true
		}
	},
	to_location : {
		type: [Number],
		index: {
			type: '2dsphere',
			sparse: true
		}
	},
	/*from_latitude : Number,
	from_longitude : Number,
	to_latitude : Number,
	to_longitude : Number,
	*/
	status : Number, // 取消订单，已下单，已接单，已装车，已收货，完成订单
	desc : String,
	gen_pic_url : String,
	accept_order_pic_url : String,
	deliver_pic_url : String,
	arrived_pic_url : String,
	accept_delivery_pic_url : String,
	last_op : Date
// order create time
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
	location : {
		type: [Number],
		index: {
			type: '2dsphere',
			sparse: true
		}
	},
	/*
	loc_longitude:Number,
	loc_latitude:Number,
	*/
	desc:String,
	desc_pic_url:String,
	last_update: Date
}, {
	versionKey : false
});

var Schema_truck_media = new Schema({
	id : Number,
	vid : Number,
	type : Number, // 0：图片；1：视频
	file_name : String,
	file_url : String,
	show_order : Number
}, {
	versionKey : false
});

var Schema_cargo_media = new Schema({
	id : Number,
	cargo_id : Number,
	type : Number, // 0：图片；1：视频
	file_name : String,
	file_url : String,
	show_order : Number
}, {
	versionKey : false
});

var Schema_order_media = new Schema({
	id : Number,
	order_id : Number,
	type : Number, // 0：图片；1：视频
	file_name : String,
	file_url : String,
	show_order : Number
}, {
	versionKey : false
});

var Model_driver = db.model("driver", Schema_driver);
var Model_shipper = db.model("shipper", Schema_shipper);
var Model_order = db.model("order", Schema_order);
var Model_cargo = db.model("cargo", Schema_cargo);
var Model_shipper_enterprise = db
		.model("enterprise", Schema_shipper_enterprise);
var Model_truck = db.model("truck", Schema_truck);
var Model_truck_media = db.model("truck_media", Schema_truck_media);
var Model_cargo_media = db.model("cargo_media", Schema_cargo_media);
var Model_order_media = db.model("order_media", Schema_order_media);


router.create_driver = function(vid,
		vname,
		vchina_id,
		vphone,
		vlicense,
		venterprise_uni_code,
		vstatus,
		vchina_id_screen_url,
		vlicense_screen_url,
		vreg_time,
		vlast_login) {
	var adriver = new Model_driver({
		id : vid,
		name : vname,
		china_id:vchina_id,
		phone : vphone,
		license : vlicense,
		enterprise_uni_code : venterprise_uni_code,
		status : vstatus,
		china_id_screen_url : vchina_id_screen_url,
		license_screen_url : vlicense_screen_url,
		reg_time : vreg_time,
		last_login : vlast_login
	// Date.now()
	});
	adriver.save(function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log('success');
		}

	});
};

router.create_shipper = function(vid,
		vname,
		vchina_id,
		vchina_id_screen_url,
		vphone ,
		venterprise_uni_code,
		vreg_time,
		vlast_login) {
	var adriver = new Model_shipper({
		id : vid,
		name : vname,
		china_id : vchina_id,
		china_id_screen_url : vchina_id_screen_url,
		phone : vphone,
		enterprise_uni_code:venterprise_uni_code,
		reg_time:vreg_time,
		last_login : vlast_login
	});
	adriver.save(function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log('success');
		}
	});
};

router.create_order = function(vid, 
		vname, 
		vorder_time, 
		vreceiver_name,
		vreceiver_address, 
		vreceiver_mobile, 
		vshipper_id, 
		vcargo_id,
		venterprise_id, 
		vdriver_id, 
		vtruck_id, 
		vfrom_latitude, 
		vfrom_longitude,
		vto_latitude, 
		vto_longitude, 
		vstatus,
		vdesc, 
		vgen_pic_url,
		vaccept_order_pic_url, 
		vdeliver_pic_url, 
		varrived_pic_url,
		vaccept_delivery_pic_url, 
		vlast_op) {
	
	console.log(vid);
	
	var adriver = new Model_order({
		id : vid,
		name : vname,
		order_time : vorder_time,
		receiver_name : vreceiver_name,
		receiver_address : vreceiver_address,
		receiver_mobile : vreceiver_mobile,
		shipper_id : vshipper_id,
		cargo_id : vcargo_id,
		enterprise_id : venterprise_id,
		driver_id : vdriver_id,
		truck_id : vtruck_id,
		from_location : [vfrom_longitude, vfrom_latitude],
		to_location : [vto_longitude, vto_latitude],
		/*from_latitude : vfrom_latitude,
		from_longitude : vfrom_longitude,
		to_latitude : vto_latitude,
		to_longitude : vto_longitude,
		*/
		status : vstatus,
		desc : vdesc,
		gen_pic_url : vgen_pic_url,
		accept_order_pic_url : vaccept_order_pic_url,
		deliver_pic_url : vdeliver_pic_url,
		arrived_pic_url : varrived_pic_url,
		accept_delivery_pic_url : vaccept_delivery_pic_url,
		last_op : vlast_op
	});
	adriver.save(function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log('success');
		}
		// db.close();
	});
};

router.create_cargo = function(vid, vname, venterprise_id, venterprise_erp_id,
		vnet_weight, vunit_weight, vunit_length, vunit_width, vunit_height,
		vcargo_type, vdesc, vgen_pic_url, vstatus, vlast_op) {
	var acargo = new Model_cargo({
		id : vid,
		name : vname,
		enterprise_id : venterprise_id,
		enterprise_erp_id : venterprise_erp_id,
		net_weight : vnet_weight,
		unit_weight : vunit_weight,
		unit_length : vunit_length,
		unit_width : vunit_width,
		unit_height : vunit_height,
		cargo_type : vcargo_type,
		desc : vdesc,
		gen_pic_url : vgen_pic_url,
		status : vstatus,
		last_op : vlast_op
	});
	acargo.save(function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log('success');
		}
		// db.close();
	});
};

router.create_enterprise = function(vid, vname, venterprise_uni_code,
		vbusiness_license_code, vbusiness_license_screen_url, vshipper_id,
		vop_range, vlast_order) {
	var aenterprise = new Model_shipper_enterprise({
		id : vid,
		name : vname,
		enterprise_uni_code : venterprise_uni_code,
		business_license_code : vbusiness_license_code,
		business_license_screen_url : vbusiness_license_screen_url,
		shipper_id : vshipper_id,
		op_range : vop_range,
		last_order : vlast_order
	});
	aenterprise.save(function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log('success');
		}
		// db.close();
	});
};

router.create_truck = function(vid, vvin, vlicense_plate, vvehicle_license,
		vvehicle_license_screen_url, vname, vdriver_id, vself_weight, vbrand,
		vbear_part_length, vbear_part_width, vbear_part_height, vtype,
		veval_level, vstatus, vvehicle_thumb_url, vloc_longitude,
		vloc_latitude, vdesc, vdesc_pic_url, vlast_update) {
	var atruck = new Model_truck({
		id : vid,
		vin : vvin,
		license_plate : vlicense_plate,
		vehicle_license : vvehicle_license,
		vehicle_license_screen_url : vvehicle_license_screen_url,
		name : vname,
		driver_id : vdriver_id,
		self_weight : vself_weight,
		brand : vbrand,
		bear_part_length : vbear_part_length,
		bear_part_width : vbear_part_width,
		bear_part_height : vbear_part_height,
		type : vtype,
		eval_level : veval_level,
		status : vstatus,
		vehicle_thumb_url : vvehicle_thumb_url,
		location : [vloc_longitude, vloc_latitude],
		/*
		loc_longitude : vloc_longitude,
		loc_latitude : vloc_latitude,
		*/
		desc : vdesc,
		desc_pic_url : vdesc_pic_url,
		last_update : vlast_update
	});
	atruck.save(function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log('success');
		}

	});
};

router.create_truck_media = function(vid, vvid, vtype, vfile_name, vfile_url,
		vshow_order) {
	var atruck_media = new Model_truck_media({
		id : vid,
		vid : vvid,
		type : vtype, // 0：图片；1：视频
		file_name : vfile_name,
		file_url : vfile_url,
		show_order : vshow_order
	});
	atruck_media.save(function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log('success');
		}
		// db.close();
	});
};

router.create_cargo_media = function(vid, 
		vvid, 
		vtype, 
		vfile_name, 
		vfile_url,
		vshow_order) {
	var acargo_media = new Model_cargo_media({
		id : vid,
		vid : vvid,
		type : vtype, // 0：图片；1：视频
		file_name : vfile_name,
		file_url : vfile_url,
		show_order : vshow_order
	});
	acargo_media.save(function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log('success');
		}
	});
};

router.update_driver = function(vid, vstatus) {
	Schema_driver.update({
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
	Schema_driver.update({
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

router.get_nearest_trucks = function(longitude, latitude, distance){
	console.log('search TRUCK: long='+longitude+' lat='+ latitude + ' dis='+distance);
	Model_truck.find({
		location : {
			$near : {
				$geometry : {
					type : 'Point',
					coordinates :  [ parseFloat(longitude), parseFloat(latitude) ]
				},
				$maxDistance: distance
			}
		}		
	}).limit(10).skip(0).lean().exec(function(err, doc) {
	    if (err) {
	        console.log(err);
	    }
        //callback(doc);
	    console.log(doc);
    });
};

router.get_nearest_orders = function(longitude, latitude, distance){
	console.log('search ORDER: long='+longitude+' lat='+ latitude + ' dis='+distance);
	
	Model_order.find({
		from_location : {
			$near : {
				$geometry : {
					type : 'Point',
					coordinates :  [ parseFloat(longitude), parseFloat(latitude) ]
				},
				$maxDistance: distance
			}
		}		
	}).limit(10).skip(0).lean().exec(function(err, doc) {
	    if (err) {
	        console.log(err);
	    }
        //callback(doc);
	    console.log(doc);
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