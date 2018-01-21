/**
 * Created by Mr.Yang on 2017/9/20.
 */
var backBtn=document.getElementsByClassName("hd-pt1");
var playerNumber = document.getElementById("playernumber");
var go=document.getElementById("go");
backBtn[0].onclick=function (){window.history.back(-1);};                         //返回上一页
playerNumber.onkeyup=function(){this.value=this.value.replace(/\D/g,'')};      //键盘按键松开时触发禁止输入非正整数
playerNumber.onafterpaste=function(){this.value=this.value.replace(/\D/g,'')}; //粘贴时触发禁止输入非正整数
playerNumber.oninput=function () {
    num();
     one = JSON.stringify(num());//转换身份数组
    localStorage.object= one;  //上传身份数组到浏览器
};
go.onclick=function (){con();};
//根据输入分配杀手、平民数量,生成乱序数组
function num(){
    var val = document.getElementById("playernumber").value;
    var li = document.getElementById("li-ide");
    var inputs = li.getElementsByTagName("input");
    var val1=inputs[0],val2=inputs[1];
    changeValue(val,val1,val2);
    identity(val1.value,val2.value);
    return identity(val1.value,val2.value);
}
//分配杀手、平民数量
function changeValue(a,b,c) {
    if (a>=4&&a<=12) {
        b.value = Math.floor(a/3);
        c.value = a - Math.floor(a /3);
    }
    else if (a>12&&a<=18){
        b.value = Math.floor(a / 3.1);
        c.value = a - Math.floor(a /3.1);
    }else {
        b.value = "";
        c.value = "";
    }
}
//生成身份数组
function identity(killer,people) {
    var playe = [];
    for (var i=0;i<killer;i++){
        playe.push("杀手");
    }
    for (var j=0;j<people;j++){
        playe.push("平民");
    }
    shuffle(playe);
    return playe;
}
//洗牌算法，打乱身份数组
function shuffle(array) {
    for (var i = array.length-1; i >=0; i--) {               //从尾开始遍历循环本数组
        var randomIndex = Math.floor(Math.random()*(i+1));   //声明randomIndex是本数组的随机一个下标
        var itemAtIndex = array[randomIndex];                 //将本数组的一个随机位置元素赋值给itemAtIndex
        array[randomIndex] = array[i];                         //将最后一个元素赋值给上面的随机元素
        array[i] = itemAtIndex;                                //将未改变前的随机位置元素赋值给最后一个元素
    }
    return array;                                             //返回数组
}
//判断是否输入正确人数
function con() {
    var val = document.getElementById("playernumber").value;
    if(val<4||val>18){
        confirm("请输入正确的玩家数量。")
    }else {
        window.location.href="../html/js-3.1.html";
    }
}














































