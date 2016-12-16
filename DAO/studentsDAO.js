var db = require("./database");


// 展现
exports.findAll = function (curpage,eachpage,func) {
  db.collection("students").findByPage(curpage,eachpage,{},func)
};

//增加
exports.insert = function(obj,func){
db.collection("students").insert(obj,func);
};

//删除
exports.del = function(id,func){
  db.collection("students").remove({_id:db.ObjectID(id)},func);
};

// 修改
exports.findById = function(id,func){
  db.collection("students").find({_id:db.ObjectID(id)},func);
};
exports.update = function(id,obj,func){
  db.collection("students").update({_id:db.ObjectID(id)},{"$set":obj},func);
;}

//搜索
exports.findOne = function (curpage, eachpage, obj, func) {
  db.collection("students").findByPage(curpage, eachpage, {
    $or: [
      { name: { "$regex": obj } },{ age: { "$regex": obj } }, { gender: { "$regex": obj } }]
  }, func);
}
