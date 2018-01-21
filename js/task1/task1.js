/**
 * Created by Mr.Yang on 2017/9/16.
 */
    //每隔1s调用三个块随机颜色函数
    var myVar;
    var kaiguan=true;
    function start() {
        if(kaiguan) {
            myVar = setInterval(PerRefresh, 1000);
            kaiguan=false;
        }
    }
    //终止函数，所有块回复原背景色
    function over() {
        clearInterval(myVar);
        var bc = document.getElementsByClassName("block");
        for(var i=0;i<bc.length;i++)
            bc[i].style.background = "orange";
        kaiguan=true;
    }
    //随机三个方块随机三种颜色
    function  PerRefresh() {
        var bc = document.getElementsByClassName("block");
        // 定义存放生成随机数的数组
        var array = new Array();
        // 循环N次生成随机数
        for (var i = 0;;i++) {
            // 只生成9个随机数
            if (array.length < 9) {
                generateRandom(9);
            } else {
                break;
            }
        }
        // 生成随机数的方法
        function generateRandom(count) {
            var rand = Math.floor((Math.random() * count));
            for (var i = 0; i < array.length; i++) {
                if (array[i] == rand) {
                    return false;
                }
            }
            array.push(rand);
        }
        // 循环遍历随机数数组
        for (var i = 0; i < 9; i++) {
            var a = array[i];
            if (i<3) {
                bc[a].style.background = randomcolor();
            }else {
                bc[a].style.background = "orange";
            }
        }
        //生成随机颜色的方法
        function randomcolor() {
            getRandomColor = Math.floor(Math.random() * 16777215).toString(16);
            while (getRandomColor.length < 6) { //while循环判断hex位数，少于6位前面加0凑够6位
                getRandomColor = '0' + getRandomColor;
            }
            return '#' + getRandomColor;
        }
    }


