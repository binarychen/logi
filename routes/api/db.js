/**
 * New node file
 */
// var MongoClient = require('mongodb').MongoClient;
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
	china_id : String,
	phone : String,
	license : String,
	enterprise_uni_code : String,
	status : Number,
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
	enterprise_uni_code : String,
	reg_time : Date,
	last_login : Date
}, {
	versionKey : false
});

var Schema_shipper_enterprise = new Schema({
	id : Number,
	name: String,
	enterprise_uni_code : String,
	shipper_id : Number,
	op_range : String,
	last_order : Date
}, {
	versionKey : false
});

var Schema_order = new Schema({
	id : Number,
	name : String,
	enterprise_id : Number,
	driver_id : Number,
	truck_id : Number,
	from_latitude : Number,
	from_longitude : Number,
	to_latitude : Number,
	to_longitude : Number,
	status : Number,
	desc : String,
	gen_pic_url : String,
	accept_order_pic_url : String,
	deliver_pic_url : String,
	arrived_pic_url : String,
	accept_delivery_pic_url : String,
	last_op : Date
}, {
	versionKey : false
});

var Schema_cargo = new Schema({
	id : Number,
	name : String,
	enterprise_id : Number,
	enterprise_erp_id : String,
	net_weight : Number,
	unit_weight : Number,
	unit_length : Number,
	unit_width : Number,
	unit_height : Number,
	cargo_type : Number,
	desc : String,
	gen_pic_url : String,
	status : Number,
	last_op : Date
}, {
	versionKey : false
});

var Schema_truck = new Schema({
	id : Number,
	vin : String,
	license_plate : String,
	name : String,
	driver_id : Number,
	self_weight : Number,
	brand : String,
	bear_part_length : Number,
	bear_part_width : Number,
	bear_part_height : Number,
	type : Number,
	eval_level : Number,
	status : Number,
	loc_longitude : Number,
	loc_latitude : Number,
	desc : String,
	desc_pic_url : String,
	last_update : Date
}, {
	versionKey : false
});

var Model_dirver = db.model("drvier", Schema_dirver);
var Model_shipper = db.model("shipper", Schema_shipper);
var Model_order = db.model("order", Schema_order);
var Model_cargo = db.model("cargo", Schema_cargo);
var Model_shipper_enterprise = db
		.model("enterprise", Schema_shipper_enterprise);
var Model_truck = db.model("truck", Schema_truck);

router.create_driver = function(vid, vname, vchina_id, vphone, vlicense,
		venterprise_uni_code, vstatus, vreg_time, vlast_login) {
	var adriver = new Model_dirver({
		id : vid,
		name : vname,
		china_id : vchina_id,
		phone : vphone,
		license : vlicense,
		enterprise_uni_code : venterprise_uni_code,
		status : vstatus,
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
		// db.close();
	});
};

router.create_shipper = function(vid, vname, vchina_id, vphone,
		venterprise_uni_code, vreg_time, vlast_login) {
	var adriver = new Model_shipper({
		id : vid,
		name : vname,
		china_id : vchina_id,
		phone : vphone,
		enterprise_uni_code : venterprise_uni_code,
		reg_time : vreg_time,
		last_login : vlast_login
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

router.create_order = function(vid, vname, venterprise_id, vdriver_id,
		vtruck_id, vfrom_latitude, vfrom_longitude, vto_latitude,
		vto_longitude, vstatus, vdesc, vgen_pic_url, vaccept_order_pic_url,
		vdeliver_pic_url, varrived_pic_url, vaccept_delivery_pic_url, vlast_op) {
	var adriver = new Model_order({
		id : vid,
		name : vname,
		enterprise_id : venterprise_id,
		driver_id : vdriver_id,
		truck_id : vtruck_id,
		from_latitude : vfrom_latitude,
		from_longitude : vfrom_longitude,
		to_latitude : vto_latitude,
		to_longitude : vto_longitude,
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

router.create_enterprise = function(vid, vname, venterprise_uni_code, vshipper_id,
		vop_range, vlast_order) {
	var aenterprise = new Model_shipper_enterprise({
		id : vid,
		name : vname,
		enterprise_uni_code : venterprise_uni_code,
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

router.create_truck = function(vid, vvin, vlicense_plate, vname, vdriver_id,
		vself_weight, vbrand, vbear_part_length, vbear_part_width,
		vbear_part_height, vtype, veval_level, vstatus, vloc_longitude,
		vloc_latitude, vdesc, vdesc_pic_url, vlast_update) {
	var atruck = new Model_truck({
		id : vid,
		vin : vvin,
		license_plate : vlicense_plate,
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
		loc_longitude : vloc_longitude,
		loc_latitude : vloc_latitude,
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
		// db.close();
	});
};

router.update_driver = function(vid, vstatus) {
	Model_dirver.update({
		id : vid
	}, {
		status : vstatus
	}, function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log('success');
		}
		// db.close();
	});
};

router.update_cargo = function(vid, vstatus) {
	Model_cargo.update({
		id : vid
	}, {
		status : vstatus
	}, function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log('success');
		}
		// db.close();
	});
};

router.update_enterprise = function(vid, vshipper_id) {
	Model_shipper_enterprise.update({
		id : vid
	}, {
		shipper_id : vshipper_id
	}, function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log('success');
		}
		// db.close();
	});
};

router.update_order = function(vid, vstatus) {
	Model_order.update({
		id : vid
	}, {
		status : vstatus
	}, function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log('success');
		}
		// db.close();
	});
};

router.update_cargo = function(vid, vstatus) {
	Model_cargo.update({
		id : vid
	}, {
		status : vstatus
	}, function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log('success');
		}
		// db.close();
	});
};

router.update_enterprise = function(vid, vstatus) {
	Model_shipper_enterprise.update({
		id : vid
	}, {
		status : vstatus
	}, function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log('success');
		}
		// db.close();
	});
};

router.update_truck = function(vid, vstatus) {
	Model_truck.update({
		id : vid
	}, {
		status : vstatus
	}, function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log('success');
		}
		// db.close();
	});
};

module.exports = router;
