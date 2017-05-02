/**
 * New node file
 */
var express = require('express');
var router = express.Router();
var user = require('./api/account');


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('register', {
		title : '注册',
		message : "货运平台"
	});
});

router.post('/', function(req, res, next) {
	var User = global.dbHandel.getModel('user');
    var uname = req.body.uname;
    var upwd = req.body.upwd;
    User.findOne({name: uname},function(err,doc){   // 同理 /login 路径的处理方式
        if(err){ 
            res.send(500);
            req.session.error =  '网络异常错误！';
            console.log(err);
        }else if(doc){ 
            req.session.error = '用户名已存在！';
            res.send(500);
        }else{ 
            User.create({                             // 创建一组user对象置入model
                name: uname,
                password: upwd
            },function(err,doc){ 
                 if (err) {
                        res.send(500);
                        console.log(err);
                    } else {
                        req.session.error = '用户名创建成功！';
                        res.send(200);
                    }
                  });
        }
    })
});

module.exports = router;