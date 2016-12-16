var userDAO = require("../DAO/usersDAO");

//验证用户名
// exports.vilidateUsername = function (username, func) {
//   userDAO.findByName(username, func)
// }

// //验证登陆
exports.login = function (username,psw,func) {
  userDAO.findByNameAndPSW(username, psw,func)
}

 //验证注册
exports.reg = function(obj,func){
	userDAO.insert(obj,func);
}

exports.validateUsername = function(username,func){
	userDAO.findByUsername(username,func);
}