(function() {
    console.log("Load Success");
})()

// -------------------------------------------------------------
// 重写alert，保证弹窗错误的友好性
var j_oldAlert = window.alert;
var j_fieldList;
window.alert = function (msg) {
    var newMsg = "";
    msg = msg.toLowerCase(); //转为小写
    // 唯一性验证
    if (msg.indexOf("ora-00001") > -1) {
        for (var i = 0; i < j_fieldList.length; i++) {
            var r = j_fieldList[i];
            if (r.type == 'uk' && msg.indexOf(r.name.toLowerCase()) > -1) {
                if (r.msg != undefined && r.msg.length > 0) {
                    newMsg += r.msg;
                    console.log("ASDaa");
                }
                break;
            }
        }
        newMsg = "违反唯一约束！\r\n" + newMsg;
    } else {
        newMsg = msg;
    }

    j_oldAlert(newMsg);
}


var json = [{
    type: 'uk',
    name: 'UK$MA_GROUPDATATABLE$1',
    msg: ''
}];
// type 约束的类型，uk唯一性约束、；name 为数据库中约束的名称；msg为自定义的提示语
initAlert(json);

// 初始化alert弹窗所需要的参数
function initAlert(json) {
    if (typeof (json) == "object" && json.length > 0) { // 验证数据是否为json格式
        j_fieldList = json;
    } else {
        j_fieldList = eval("(" + json + ")");
    }
}

var test = function () {
    alert("aaa");
}