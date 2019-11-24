let url = require('url');  
let dealFn = require('./dealfn.js');
let StuModel = require('../mongoose/mongoose');
exports.loginData = (req, res) => {
    let sendData = {};
    // 前端传过来的请求参数
    // let {
    //     tenantId,
    //     username,
    //     password,
    //     md5password
    // } = req.body;
    dealFn.readFileData('login.json').then((data) => {
        // 后台输出在git或者日志上
        //console.log(tenantId,username,password,md5password);                      
        sendData= data;
        res.send(sendData);
    }, (msg) => {
        sendData.statusCode = 300;
        sendData.message = '响应失败';
        res.send(sendData);
    })
}

exports.userinfoData = (req, res) => {
    console.log("qingqiule")
    let sendData = {};
    dealFn.readFileData('userinfo.json').then((data) => {
        sendData = data;               
        res.send(sendData);
    }, (msg) => {
        sendData.statusCode = 300;
        sendData.message = '响应失败';
        res.send(sendData);
    })
}

// Easy Mock 的假数据，这个模块的数据不是来源于下面
exports.entryguidanceData = (req, res) => {
    let sendData = {};
    dealFn.readFileData('entryguidance.json').then((data) => {
        sendData.data = data;               
        res.send(sendData);
    }, (msg) => {
        sendData.statusCode = 300;
        sendData.message = '响应失败';
        res.send(sendData);
    })
}

// 员工咨询相关的接口

exports.staffhotqData=(req,res)=>{
    let sendData = {};
    dealFn.readFileData('staffhotq.json').then((data) => {
        sendData = data;               
        res.send(sendData);
    }, (msg) => {
        sendData.statusCode = 300;
        sendData.message = '响应失败';
        res.send(sendData);
    })
}

exports.staffQuestionSortData=(req,res)=>{
    let sendData = {};
    dealFn.readFileData('staffQuestionSort.json').then((data) => {
        sendData = data;               
        res.send(sendData);
    }, (msg) => {
        sendData.statusCode = 300;
        sendData.message = '响应失败';
        res.send(sendData);
    })
}

exports.staffLatestAnswerData=(req,res)=>{
    let sendData = {};
    dealFn.readFileData('staffLatestAnswer.json').then((data) => {
        sendData = data;               
        res.send(sendData);
    }, (msg) => {
        sendData.statusCode = 300;
        sendData.message = '响应失败';
        res.send(sendData);
    })
}

exports.staffMyAskData=(req,res)=>{
    let sendData = {};
    dealFn.readFileData('staffMyAsk.json').then((data) => {
        sendData = data;               
        res.send(sendData);
    }, (msg) => {
        sendData.statusCode = 300;
        sendData.message = '响应失败';
        res.send(sendData);
    })
}

exports.staffdetailData=(req,res)=>{
    let sendData = {};
    dealFn.readFileData('staffdetail.json').then((data) => {
        sendData = data;               
        res.send(sendData);
    }, (msg) => {
        sendData.statusCode = 300;
        sendData.message = '响应失败';
        res.send(sendData);
    })
}

exports.staffnolastageData=(req,res)=>{
    let sendData = {};
    dealFn.readFileData('staffnolastage.json').then((data) => {
        sendData = data;               
        res.send(sendData);
    }, (msg) => {
        sendData.statusCode = 300;
        sendData.message = '响应失败';
        res.send(sendData);
    })
}

exports.staffnolastagenextData=(req,res)=>{
    let sendData = {};
    dealFn.readFileData('staffnolastagenext.json').then((data) => {
        sendData = data;               
        res.send(sendData);
    }, (msg) => {
        sendData.statusCode = 300;
        sendData.message = '响应失败';
        res.send(sendData);
    })
}


exports.bankaccbas=(req,res)=>{
    console.log("bankaccbas");
    dealFn.readFileData('bankaccbasHead2.json').then((data) => {
        console.log(data);
        sendData = {
            data:data,     
            message: "响应成功",
            statusCode: 200
        };
        res.send(sendData);
    }, (msg) => {
        sendData.statusCode = 500;
        sendData.message = '没有更多数据';
        res.send(sendData);
    })
}

exports.bankaccbasub=(req,res)=>{
    console.log("bankaccbasub");
    dealFn.readFileData('bankaccbasBodys2.json').then((data) => {
        console.log(data);
        sendData = {
            data:data,     
            message: "响应成功",
            statusCode: 200
        };
        res.send(sendData);
    }, (msg) => {
        sendData.statusCode = 500;
        sendData.message = '没有更多数据';
        res.send(sendData);
    })
}


exports.bankaccbasdetail=(req,res)=>{
    console.log("bankaccbasdetail");
    dealFn.readFileData('bankaccbas2.json').then((data) => {
        console.log(data);
        sendData = {
            data:data,     
            message: "响应成功",
            statusCode: 200
        };
        res.send(sendData);
    }, (msg) => {
        sendData.statusCode = 500;
        sendData.message = '没有更多数据';
        res.send(sendData);
    })
}
exports.columns = (req, res) => {
    console.log("columns")
    let sendData = {
            message: "响应成功",
            statusCode: 200
        };

    dealFn.readFileData('column.json').then((data) => {
        sendData.data =  data;      
        res.send(sendData);
    }, (msg) => {
        sendData.statusCode = 500;
        sendData.message = '没有更多数据';
        res.send(sendData);
    })
}



exports.datejson = (req, res) => {
    console.log("column")
    let sendData = {
            message: "响应成功",
            statusCode: 200
        };
    dealFn.readFileData('column.json').then((data) => {
        sendData.data =  data;      
        res.send(sendData);
    }, (msg) => {
        sendData.statusCode = 500;
        sendData.message = '没有更多数据';
        res.send(sendData);
    })
}




exports.deleteItem = (req, res) => {
    let id = req.body.id;
    console.log(id)
    let sendData = {
        message: "操作成功",
        statusCode: 200
    };
    dealFn.readFileData('message.json').then((data) => { 
        data.dataTables.purorderDataTable.rows = data.dataTables.purorderDataTable.rows.filter(item => item.id != id)
        console.log(data)
        dealFn.writeFileData('message.json', data).then(data1 => {
            res.send(data1);
        })
    }, (msg) => {
        sendData.statusCode = 500;
        sendData.message = '没有更多数据';
        res.send(sendData);
    })
}

exports.createItem = (req, res) => {
     let {
        code,
        purchaseName,
        createName,
        orderStatus,
        orderTime
    } = req.body;

    let sendData = {
        message: "操作成功",
        statusCode: 200
    };
    dealFn.readFileData('message.json').then((data) => { 
        data.dataTables.purorderDataTable.rows.unshift(
            {
                data:{
                    code, 
                    purchaseName,
                    createName,
                    orderStatus,
                    orderTime
                },
                id: `r${new Date().getTime()}${Math.ceil(Math.random()*10)}`,
                status: '2'
            }
        )
        
        dealFn.writeFileData('message.json', data).then(data1 => {
            res.send(data1);
        })
    }, (msg) => {
        sendData.statusCode = 500;
        sendData.message = '没有更多数据';
        res.send(sendData);
    })
}

exports.partnerItem = (req, res) => {
    console.log("columns")
    let sendData = {
            message: "响应成功",
            statusCode: 200
        };

    dealFn.readFileData('partner.json').then((data) => {
        sendData.data =  data;      
        res.send(sendData);
    }, (msg) => {
        sendData.statusCode = 500;
        sendData.message = '没有更多数据';
        res.send(sendData);
    })
}
exports.listItem = (req, res) => {
    console.log("columns")
    let sendData = {
            message: "响应成功",
            statusCode: 200
        };

    dealFn.readFileData('header.json').then((data) => {
        sendData.data =  data;      
        res.send(sendData);
    }, (msg) => {
        sendData.statusCode = 500;
        sendData.message = '没有更多数据';
        res.send(sendData);
    })
}

exports.updateItem = (req, res) => {
    let {
        id,
        code,
        purchaseName,
        createName,
        orderStatus,
        orderTime
    } = req.body;

    let sendData = {
        message: "操作成功",
        statusCode: 200
    };
    dealFn.readFileData('message.json').then((data) => { 
        data.dataTables.purorderDataTable.rows.map(item => {
            if(item.id == id){
                item.data.code = code
                item.data.purchaseName = purchaseName
                item.data.createName = createName
                item.data.orderStatus = orderStatus
                item.data.orderTime = orderTime
            }
        })
        console.log(data)
        dealFn.writeFileData('message.json', data).then(data1 => {
            res.send(data1);
        })
    }, (msg) => {
        sendData.statusCode = 500;
        sendData.message = '没有更多数据';
        res.send(sendData);
    })
}

exports.mongodbData = (req, res) => {
    console.log("column")
    let sendData = {
        message: "响应成功",
        statusCode: 200
    };
    StuModel.find({}, null, function (err, docs) {

        if(!err) {
            console.log('插入成功');
        }
        res.send(docs);
    });

}