var mongoose = require('../node_modules/mongoose');

// 连接字符串格式为mongodb://主机/数据库名
mongoose.connect('mongodb://127.0.0.1/mongoose_test');

mongoose.connection.once('open',function(){
    console.log("数据库连接成功")
});

/*mongoose.connection.once('close',function(){
    console.log("数据库连接失败")
});

//断开数据库连接
mongoose.disconnect();*/

//创建Schema对象

var Schema = mongoose.Schema;

var stuSchema = new Schema({
    name:  String,
    age: Number,
    address:   String,
    gender: {
        type:String,
        default:'female'
    }
});

//通过Schema创建Model
//Model代表的是数据库中的集合，通过model才能对数据库进行操作
//mongoose.model(modelName,stuSchema);
//modelName就是要映射的集合，mongoose会自动将集合名字变成复数
var StuModel = mongoose.model("students", stuSchema);
//向数据库中插入一个文档
// StuModel.create(doc,function (err) {
// doc 可以是一个文档对象，也可以是文档对象的数组
// function回调函数
// })
module.exports = StuModel;
// /StuModel.create({
//     name:'孙悟空',
//     age:18,
//     gender:'male',
//     address:'花果山'
// },function (err) {
//    if(!err){
//        console.log('插入成功');
//    }
// })