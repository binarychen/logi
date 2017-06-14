var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var session = require('express-session');

var index = require('./routes/index');
var login = require('./routes/login');
var register = require('./routes/register');
var home = require('./routes/home');
var logout = require('./routes/logout');
var users = require('./routes/users');
var apis = require('./routes/api/index');
var driver = require('./routes/api/driver');
var shipper = require('./routes/api/shipper');
var order = require('./routes/api/order');
var cargo = require('./routes/api/cargo');
var enterprise = require('./routes/api/enterprise');
var truck = require('./routes/api/truck');
var consume = require('./routes/mq/consume');

//////var upload = require('./routes/web/upload');

var app = express();

app.use(session({ 
    secret: 'secret',
    cookie:{ 
        maxAge: 1000*60*30
    }
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine("html",require("ejs").__express);
app.set('view engine', 'html');
// app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// console.log(apis);

app.use('/', index);
app.use('/login', login);
app.use('/register', register);
app.use('/home', home);
app.use('/logout', logout);
app.use('/users', users);
app.use('/api', apis);
app.use('/driver', driver);
app.use('/shipper', shipper);
app.use('/order', order);
app.use('/cargo', cargo);
app.use('/enterprise', enterprise);
app.use('/truck', truck);
//////app.use('/upload', upload);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	/*
	 * var err = new Error('Not Found'); err.status = 404; next(err);
	 */
	res.locals.user = req.session.user;   // 从session 获取 user对象
    var err = req.session.error;   // 获取错误信息
    delete req.session.error;
    res.locals.message = "";   // 展示的信息 message
    if(err){ 
        res.locals.message = '<div class="alert alert-danger" style="margin-bottom:20px;color:red;">'+err+'</div>';
    }
    next();  // 中间件传递
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
