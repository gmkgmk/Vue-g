var express = require('express');
var router = express.Router();
var userService = require("../Service/usersService");

// var db = require("./database");

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('get 登陆成功');
// });

// //登陆
router.post('/value', function(req, res) {
    var username = req.body.username;
    var psw = req.body.psw;

    userService.login(username, psw, function(data) {
        if (data.length > 0) {
            req.session.user = data[0];
        }
        res.send(data);
    })
});

// //注册
router.post('/regin', function(req, res) {
    var username = req.body.username;
    var psw = req.body.password;
    userService.reg({ username, psw }, function() {
        res.send("成功");
    });
});

//验证
router.get('/reginyes', function(req, res) {
    var username = req.query.username;
    console.log(username)
    userService.validateUsername(username, function(data) {
        if (data.length > 0) {
            res.send({ mes: 1 });
        } else {
            res.send({ mes: 0 });
        }
    });
});

//获取session中的用户对象
router.get('/getUser', function(req, res) {
    var user = req.session.user;
    if (user) {
        res.send(user);
    } else {
        res.send('fall')
    }
})

//消除session中的用户对象
router.get('/userOut', function(req, res) {
    req.session.user = null;
    res.send('OK')
})

module.exports = router;