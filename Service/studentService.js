var studentDAO = require("../DAO/studentsDAO");
//展现
exports.showAll = function (curpage, eachpage, func) {
  studentDAO.findAll(curpage, eachpage, func);
};
//显示/搜索
exports.find = function (curpage, eachpage, obj, func) {
  if (obj) {
    studentDAO.findOne(curpage, eachpage, obj, func);
  } else {
    studentDAO.findAll(curpage, eachpage, func);
  }
}

//增加
exports.add = function (obj, func) {
  studentDAO.insert(obj, func);
};

//删除
exports.rmove = function (id, func) {
  studentDAO.del(id, func)
};

//修改
exports.showId = function (id, func) {
  studentDAO.findById(id, func);
};
exports.change = function (id, obj, func) {
  studentDAO.update(id, obj, func);
};

//搜索
// exports.find = function (obj,func) {
//   studentDAO.findOne(age, func);
// }

// exports.find = function (obj,func) {
//   studentDAO.findOne(gerder, func);
// };


