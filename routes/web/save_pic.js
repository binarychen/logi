/**
 * New node file
 */
//七牛获取uptoken
//七牛云存储
var qiniu = require('qiniu');

//七牛key
qiniu.conf.ACCESS_KEY = Settings.QINIUACCESS_KEY;
qiniu.conf.SECRET_KEY = Settings.QINIUSECRET_KEY;

router.get('/qiniu/upToken', function(req, res, next) {

    var myUptoken = new qiniu.rs.PutPolicy(Settings.QINIUCMSBUCKETNAME);
    var token = myUptoken.token();
    moment.locale('en');
    var currentKey = moment(new Date()).format('YYYY-MM-DD--HH-mm-ss');
    res.header("Cache-Control", "max-age=0, private, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    if (token) {
        res.json({
            uptoken: token,
            sava_key :currentKey
        });
    }

});

module.exports = router;