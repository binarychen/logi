/**
 * New node file
 */
var express = require('express');
var router = express.Router();
var user = require('./api/account');


/* GET home page. */
router.get('/', function(req, res, next) {
	if (!req.session.user) { //到达/home路径首先判断是否已经登录
		req.session.error = "请先登录";
		res.redirect("/login"); //未登录则重定向到 /login 路径
	}

	res.render('home', {
		title : '货运平台',
		user_name : "null"
	});
});

module.exports = router;