/**
 * http://usejsdoc.org/
 */
var express = require('express');
var router = express.Router();
var db = require('./account');
var mqtt = require('../mq/mqtt_client');


var shipper_id = 200000000;
router.get('/shipper_login', function(req, res, next) {
    res.render('shipper_login', {
        title : '货主登陆系统',
        message : "货运平台"
    });
});
router.get('/reg', function(req, res, next) {
    res.render('shipper_regist', {
        title : '货主登陆系统',
        message : "货运平台"
    });
});

//-------------------------------------------------------------
/* POST create a logistic shipper. */
router.post('/create_shipper', function(req, res, next) {
	if (req.body) {
		console.log(req.body);
		db.create_shipper(
				shipper_id, 
				req.body.name, 
				req.body.china_id,
				req.body.china_id_screen_url, 
				req.body.phone,
				req.body.enterprise_uni_code, 
				Date.now(), 
				Date.now());
		mqtt.connect_pub("new_shipper", "shipper_id="+shipper_id);
		
		res.send("success");
		shipper_id = shipper_id + 1;
	} else {
		res.send("test create_shipper");
	}
});

/* POST update a logistic shipper. */
router.post('/update_shipper', function(req, res, next) {
	if (req.body) {
		console.log(req.body);
		db.update_shipper(req.body.id, req.body.status);
		res.send("success");
	} else {
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

////////////////////////////////////////////////////////////////////////////////////
//
//PAGES
//
////////////////////////////////////////////////////////////////////////////////////
router.get('/add', function(req, res, next) {
	console.log(req.body);
	res.render('shipper_add', {
		title : 'Add Shipper',
		message : "Hello"
	});
});

router.get('/my', function(req, res, next) {
	console.log(req.body);
	res.render('my_shipper', {
		title : 'My Shipper',
		message : "Hello"
	});
});
router.route("/shipper_register").get(function(req,res){// 到达此路径则渲染register文件，并传出title值供 register.html使用

    res.render("shipper_regist",{title:'User regist'});
}).post(function(req,res){

    //这里的User就是从model中获取user对象，通过global.dbHandel全局方法（这个方法在app.js中已经实现)
    console.log("000000");
    var Shipper = db.getModel("shipper");
    var username = req.body.username;
    var password = req.body.password;
	var chinaId=req.body.chinaId;
	var phone=req.body.phone;
	var enterpriseUniCode=req.body.enterpriseUniCode;
	var regTime=new Date();
    var loginTime=new Date();
    console.log(chinaId+"-----"+phone+"-----"+"========="+enterpriseUniCode);
    Shipper.findOne({username: username},function(err,doc){   // 同理 /login 路径的处理方式
        console.log("1111");
		if(err){
            console.log('2222');
            req.session.error =  '网络异常错误！';

        }else if(doc){
            req.session.error = '用户名已存在！';
            console.log('3333333333333');
            res.send(500);
        }else{
            console.log('4444');
            Shipper.create({                             // 创建一组user对象置入model
                username: username,
                password: password,
                china_id:chinaId,
                phone:phone,
                enterprise_uni_code:enterpriseUniCode,
                reg_time:regTime,
                last_login : loginTime
            },function(err,doc){
                if (err) {
                    res.send(500);
                } else {
                    req.session.error = '用户名创建成功！';
                    res.send(200);
                }
            });
        }
    });
});
router.route("/shipper_login").get(function(res,req){
	res.render("shipper_login",{title:'User regist'});
}).post(function(req,res){
	console.log("66666666");
    var Shipper = db.getModel("shipper");
    var username = req.body.username;
    var password = req.body.password;
    console.log(username);
    Shipper.findOne({username:username},function(err,doc){
    	if(err){

    		res.send(500);
		}else if(!doc){
            console.log("yong");
    		req.session.error='用户名不存在';
    		res.send(404);
		}else{
			if(req.body.password!=doc.password){
                console.log("yo");
				req.session.error='密码错误';
				res.send(404);
			}else{
				console.log("yonghumingcunzai")
				req.session.shipper=doc;
				res.send(200);
			}
		}

	});


})
module.exports = router;