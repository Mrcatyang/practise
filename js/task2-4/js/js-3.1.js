/**
 * Created by Mr.Yang on 2017/9/22.
 */
//接收乱序数组
var one = localStorage.object;
pl = JSON.parse(one);

var player = [];
for (var i = 0; i < pl.length; i++) {
    function P() {
        this.name = pl[i];
        this.state = true;
        this.day=0;
        this.deadStyle=null;
    }
    var aa = new P();
    player.push(aa)
}

one = JSON.stringify(player);//转换身份数组
localStorage.object2= one;  //上传身份数组到浏览器
sessionStorage.setItem("day", 1);


var backBtn=document.getElementsByClassName("hd-pt1");
var number =document.getElementById("number");
var show =document.getElementById("show");
var hide=document.getElementById("hide");
var prompt =document.getElementById("prompt");
var ide=document.getElementById("identity");
var next=document.getElementById("m-bt-nx");
var i=1;
var state = false;
backBtn[0].onclick=function (){window.history.back(-1);}; //返回上一页
window.onload=function () {                                 // 初始状态
    number.value=i;
    prompt.value="查看"+i+"号身份";
};
next.onclick=function () {
    nx();
};
function nx() {                                              //循环查看显示和隐藏身份
    if (state){                                              //皇上翻牌状态
        if(i<=player.length) {
            number.value = i;
            show.style.display = "block";
            hide.style.display = "none";
            prompt.value = "查看" + i + "号身份";
        }else {
            window.location.href="../html/js-3.2.html";
        }
    }else {                                                   //查看身份状态
        number.value = i;
        show.style.display= "none";
        hide.style.display= "block";
        ide.value=player[i-1].name;
        i=i+1;
        if (i<=player.length){
        prompt.value = "隐藏并传递给"+i+"号";
        }else{
            prompt.value = "法官查看";
        }
    }
    state=!state;
}














