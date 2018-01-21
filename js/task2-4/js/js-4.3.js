/**
 * Created by Mr.Yang on 2017/10/13.
 */
var player = JSON.parse(localStorage.object2);//玩家数组
var day = sessionStorage.getItem("day");//天数
var days = parseInt(day);//转换天数为数字类型
var c = 0;
//------------接收初始数组---------------//
fault();//输出结果
for (var i =1; i<days;i++) {
    var a =
        '<div class="g-m3-ana"> <p class="g-m3-ana-time"><span class="day">第'+i+'天</span></p>' +
        '<p class="g-m3-ana-time1 cr1"></p>' +
        '<p class="g-m3-ana-time1 cr2"></p>' +
        '</div>';
    $(".g-m3").append(a)

    ;
    for (var j=0;j<player.length;j++) {
        if(player[j].day==i){
            if (player[j].state == false) {
                if (player[j].deadStyle == "kill") {
                    $('.cr1').eq(i-1).append('晚上：'+ (j+1) +'号被杀手杀死，真实身份是'+ player[j].name +'');
                }
                if (player[j].deadStyle == "vote") {
                    $('.cr2').eq(i-1).append('白天：'+ (j+1) +'号被投票投死了，真实身份是'+ player[j].name +'');
                }
            }
        }
        if (player[j].day==(i-1)) {
            c = c+1;
            if (c === (player.length - i)) {
                $('.cr1').eq(i - 1).text("晚上：杀手未杀人");
            }
        }
    }
}
//------------------------------------------//
$('.g-ft2-bt1').click(function () {
    window.location.href="../html/js-2.html";
})//跳回首页
//------------------------------------------//
function fault() {
    var Ka=[];
    var Pa=[];
    for (var k=0;k<player.length;k++){
        if (player[k].state===true){
            if(player[k].name=="杀手"){
                Ka.push(player[k]);
            }
            if (player[k].name=="平民"){
                Pa.push(player[k]);
            }
        }
    }
    $('.kill').append(Ka.length);
    $('.people').append(Pa.length)
}
