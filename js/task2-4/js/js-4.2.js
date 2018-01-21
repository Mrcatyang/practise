/**
 * Created by Mr.Yang on 2017/10/2.
 */
player = JSON.parse(localStorage.object2);
var url = window.location.search;
var str = url.substr(1);
var day = sessionStorage.getItem("day");//天数
var days = parseInt(day);
//------------接收初始数组---------------//
    if (str === "kill") {
        $(".hd-bt").before("杀手杀人");
        $(".ex1").append("杀手请睁眼，杀手请选择要杀的对象");
        $(".ex2").append("点击下方玩家头像，对被杀的玩家进行标记")
    }
    if (str === "vote") {
        $(".hd-bt").before("投票");
        $(".ex1").append("发言讨论结束，大家请投票");
        $(".ex2").append("点击得票数最多的人的头像")
    }
    if (str === "fg") {
        $(".hd-bt").before("法官日记");
        $(".ex1").hide();
        $(".ex2").hide();
    }
//------------判断生成页头---------------//
    for (var i = 0; i < player.length; i++) {
    var gamePlayers = ' <div class="w33"> <label> <div class="dx"> <span class="ide">' + player[i].name + '</span> <span class="hm">' + (i+1) + '号</span> <input type="radio" name="choose" > <div class="dao"></div> </div> </label> </div>';
    $("#test").append(gamePlayers);
    $("input").eq(i).val(i+1);
    }
//------------生成原始页面---------------//
    for (var j=0;j<player.length;j++){
    if (player[j].state==false){
        $(".ide").eq(j).css("background","#83b09a");
    }
}
//------------渲染死者颜色---------------//
    $(".sure").click(function () {
        if (str === "kill") {
            var val = $(":radio:checked").val();
            if (val != null) {
                if(player[val - 1].state == true){
                    if (player[val - 1].name != "杀手") {
                        player[val - 1].state = false;
                        player[val - 1].deadStyle = "kill";
                        player[val - 1].day =days;
                        localStorage.object2 = JSON.stringify(player);  //上传身份数组到浏览器
                        judge();
                    }
                    else {
                        alert("本是同根生，相煎何太急");
                    }
                }
                else {
                        alert("人都死了，你还想鞭尸么")
                    }
            }
            else {
                sessionStorage.setItem("non","nobody"+days);
                window.location.href = "../html/js-4.1.html";
            }
        }
//-------------------杀人跳转判断-----------------------//
        if (str === "vote") {
            var val = $(":radio:checked").val();
            if (val != null) {
                if(player[val - 1].state == true) {
                    player[val - 1].state = false;
                    player[val - 1].deadStyle = "vote";
                    player[val - 1].day = days;
                    localStorage.object2 = JSON.stringify(player);  //上传身份数组到浏览器
                    sessionStorage.day = days + 1;
                    judge();
                }
                else {
                    alert("人都死了，你还想鞭尸么")
                }
            }
        else {
            alert("请投票");
        }
      }
//-------------------选中跳转判断-----------------------//
        if (str === "fg") {
            window.history.back(-1);
        }
    });
//------------法官查看---------------//
function judge() {
    var Ka=[],Pa=[];
    for (var i = 0;i<player.length;i++ ){
        if(player[i].state===true){
            if(player[i].name==="杀手"){
            Ka.push(player[i]);
            }else if (player[i].name==="平民"){
                Pa.push(player[i]);
            }
        }
    }
    console.log(Ka);
    console.log(Ka.length);
    if (Ka.length===0){
        window.location.href="../html/js-4.3.html"
    }else if(Pa.length===0){
        window.location.href="../html/js-4.3.html"
    }else {
        window.location.href = "../html/js-4.1.html";
    }
}
//---------------------胜利结果判断----------------//







