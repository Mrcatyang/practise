/*** Created by Mr.Yang on 2017/9/29.*/
$(document).ready(function() {
    var player = JSON.parse(localStorage.object2);//玩家数组
    var day = sessionStorage.getItem("day");//天数
    var days = parseInt(day);//转换天数为数字类型
    var none = sessionStorage.getItem("non");//判断杀手未杀人条件
    var da = document.getElementsByClassName("ot");
    var ta = document.getElementsByClassName("her");
    var cl = document.getElementsByClassName("cl");
    var FSM = {
        state: "s1"
    };
    console.log(player);
//------------接收初始数组---------------//
    firstDay();//插入第一天
    otherDays();//插入其他天
    for (var i = 0; i < da.length; i++) {
        (function (i) {
            da[i].onclick = function () {
                var style = ta[i].style;
                style.display = style.display == "block" ? "none" : "block";
            }
        })(i);
    }//显示隐藏
    $(".fg").click(function () {
        window.location.href="../html/js-4.2.html?fg"
    })//法官查看
    // -----------执行过程---------------//
    function firstDay() {
        firstDayInsert();
        fsm();
        deadInsert();
    } //第一天
    function otherDays() {
        otherDaysInsert();
        for(var i=0;i<(days-1)*4;i++) {
            (function(i){
                cl[i].onclick = function () {
                    alert("请进行游戏下一项活动");
                }
            })(i)
        }
        }//其他天信息
    //------------判断插入---------------//
    function firstDayInsert() {
        var d =
            '<div class="day">' +
            '<div class="day1 h">第' + day + '天</div>' +
            ' <ul class="action e">' +
            '<div class="sj1"></div>' +
            '<div class="js"><div class="moon"></div><li><button class="step step1" ><div class="sj2 sj3"></div>杀手杀人</button></li></div>' +
            '<div><div class="son"></div><li><button class="step step2" ><div class="sj2 sj3"></div>亡灵发表遗言</button></li></div>' +
            '<div><div class="line p1"></div><li><button class="step step3" ><div class="sj2 sj3"></div>玩家依次发言</button></li></div>' +
            '<div class="vote"><div class="line p2"></div><li><button class="step step4" ><div class="sj2 sj3"></div>全民投票</button></li></div>' +
            '</ul>' +
            '</div>';
        $('.cb').append(d);
        $('.h').click(function () {
            $(".e").toggle()
        })
    }//插入第一天样式
    function fsm() {
        $(".step1").on("click", function () {
            switch (FSM.state) {
                case "s1":
                    window.location.href = "../html/js-4.2.html?kill";
                    break;
                default:
                    alert("进行游戏下一项活动");
                    break;
            }
        });
        $(".step2").on("click", function () {
            switch (FSM.state) {
                case "s1":
                    alert("请按顺序执行");
                    break;
                case "s2":
                    alert("亡灵请发言");
                    $(".step2").css("background", "#999");
                    $(".sj3").eq(1).css("border-right-color", "#999");
                    FSM.state = "s3";
                    break;
                case "s3":
                    alert("进行游戏下一项活动");
                    break;
                case "s4":
                    alert("进行游戏下一项活动");
                    break;
                default:
                    break;
            }
        });
        $(".step3").on("click", function () {
            switch (FSM.state) {
                case "s1":
                    alert("请按顺序执行");
                    break;
                case "s2":
                    alert("请按顺序执行");
                    break;
                case "s3":
                    alert("玩家讨论");
                    $(".step3").css("background", "#999");
                    $(".sj3").eq(2).css("border-right-color", "#999");
                    FSM.state = "s4";
                    break;
                case "s4":
                    alert("进行游戏下一项活动");
                    break;
                    break;
            }
        });
        $(".step4").on("click", function () {
            switch (FSM.state) {
                case "s1":
                    alert("请按顺序执行");
                    break;
                case "s2":
                    alert("请按顺序执行");
                    break;
                case "s3":
                    alert("请按顺序执行");
                    break;
                case "s4":
                    window.location.href = "../html/js-4.2.html?vote";
                    break;
                default:
                    break;
            }
        });
    }//四个按钮状态切换
    function deadInsert() {
        for (var i = 0; i < player.length; i++) {
            if (player[i].day == days) {
                if (player[i].state == false) {
                    if (player[i].deadStyle == "kill") {
                        var killIf = '<div><div class="line1 p3"></div><li><button class="step kill">' + (i + 1) + '号被杀手杀死，真实身份是' + player[i].name + '</button></li></div>';
                        $(".js").append(killIf);
                        $(".p1").css("top", "16rem");
                        $(".step1").css("background", "#999");
                        $(".step1").css("background", "#999");
                        $(".sj2").eq(0).css("border-right-color", "#999");
                        FSM.state = 's2';
                    }
                }
            }
            if (none === ("nobody"+days)) {
                if(i==(player.length-days)){
                    var killNo = '<div><div class="line1 p3"></div><li><button class="step kill">杀手未杀人</button></li></div>';
                    $(".js").append(killNo);
                    $(".p1").css("top", "16rem");
                    $(".step1").css("background", "#999");
                    $(".sj2").eq(0).css("border-right-color", "#999");
                    FSM.state = 's2';}
            }
        }
    }//插入杀手杀人信息
    function otherDaysInsert() {
        for (var i = 1; i < days; i++) {
            var dd =
                '<div class="day">' +
                '<div class="day1 ot">第' + i + '天</div>' +
                ' <ul class="action dn her">' +
                '<div class="sj1"></div>' +
                '<div class="js"><div class="moon"></div><li><button class="step cl" ><div class="sj2 clbr"></div>杀手杀人</button></li></div>' +
                '<div><div class="line1 p3"></div><li><button class="step kill cr1"></button></li></div>' +
                '<div><div class="son"></div><li><button class="step cl" ><div class="sj2 clbr"></div>亡灵发表遗言</button></li></div>' +
                '<div><div class="line p5"></div><li><button class="step cl" ><div class="sj2 clbr"></div>玩家依次发言</button></li></div>' +
                '<div class="vote"><div class="line p2"></div><li><button class="step cl" ><div class="sj2 clbr"></div>全民投票</button></li></div>' +
                '<div><div class="line1 p4"></div><li><button class="step kill cr2"></button></li></div>' +
                '</ul>' +
                '</div>';
            $('.cb').before(dd);

            for (var j=0;j<player.length;j++) {
                if(player[j].day==(i)){
                    if (player[j].state == false) {
                        if (player[j].deadStyle == "kill") {
                            $('.cr1').eq(i-1).append(''+ (j+1) +'号被杀手杀死，真实身份是'+ player[j].name +'');
                        }
                        if (player[j].deadStyle == "vote") {
                            $('.cr2').eq(i-1).append(''+ (j+1) +'号被投票投死了，真实身份是'+ player[j].name +'');
                        }
                    }
                }
                if (none === ("nobody"+(days-1))) {
                    if (j == (player.length - days)) {
                        $('.cr1').eq(i - 1).text("杀手未杀人");
                    }
                }
            }
            }
        }
})




























