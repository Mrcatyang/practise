/**
 * Created by Mr.Yang on 2017/9/23.
 */
array = JSON.parse(localStorage.object2);
console.log(array);
var backBtn=document.getElementsByClassName("hd-pt1");
backBtn[0].onclick=function (){window.history.back(-1);};                         //返回上一页
var playGame=document.getElementsByTagName("button");
playGame[0].onclick=function () {
    window.location.href="../html/js-4.1.html";
};
var a=document.getElementsByClassName("tp");
var b=document.getElementsByClassName("bt");
var d="<div class='w33'><div class='hezi'><input class='tp' readonly='readonly'><input class='bt'readonly='readonly'></div></div>";
var e="";
function aaa() {
    for (var i = 0; i < array.length; i++) {
        e=e+d;
        document.getElementById("test").innerHTML=e;
    }
    for (var i = 0; i < array.length; i++){
        b[i].value=i+1+"号";
        a[i].value=array[i].name;

    }
}

