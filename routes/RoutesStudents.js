var express = require('express');
var router = express.Router();
var studentsService = require("./../Service/studentService")
    // var db = require("./database");


//查找
router.get('/showAll', function(req, res) {
    var curpage = req.query.curpage;
    var eachpage = 5;
    studentsService.showAll(curpage, eachpage, function(data) {
        res.send(data)
    })
})

// //增加
router.post('/add', function(req, res) {
    var name = req.body.name;
    var age = req.body.age;
    var gender = req.body.gender;
    studentsService.add({ name, age, gender }, function(data) {
        res.send(data)
    })
})

// //删除
router.post('/del', function(req, res) {
    var id = req.body.id;
    studentsService.rmove(id, function() {
        res.send("删除成功")
    })
})

// //修改
router.post('/update', function(req, res) {
    var id = req.body.id;
    var name = req.body.name;
    var age = req.body.age;
    var gender = req.body.gender;
    studentsService.change(id, {
            name: name,
            age: age,
            gender: gender
        }, function() {
            res.send("修改成功")
        })
        // db.collection("students").update({ _id:db.ObjectID(id) }, { $set: { name: name, age: age, gender: gender } }, function () {
        //  res.send("修改成功")
        // })
})

router.get('/chan', function(req, res) {
    var id = req.query.id;
    studentsService.showId(id, function(data) {
        res.send(data[0])
    })

})


//分页
// router.get('/currenpage', function (req, res) {
//   var curpage = req.query.curpage;
//   var eachpage = 2;
//   db.collection("students").findByPage(curpage, eachpage, {}, function (data) {
//      res.send(data)
//    })
//  });

//搜索
router.post('/search', function(req, res) {
    var obj = req.body.obj;
    var curpage = req.body.curpage;
    var eachpage = 5;
    studentsService.find(curpage, eachpage, obj, function(data) {
        res.send(data)
    })
})


module.exports = router;