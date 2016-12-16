var db = require("./database");

exports.findByUsername = function(username,func){
	db.collection("users").find({username:username},func);
}
//验证登陆
exports.findByNameAndPSW = function (username, psw, func) {
     db.collection("users").find({username:username, psw:psw},func)
}

//验证注册

exports.insert = function(obj,func){
	db.collection("users").insert(obj,func);
}