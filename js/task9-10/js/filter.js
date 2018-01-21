/**
 * Created by Mr.Yang on 2017/11/6.
 */
myApp.filter('abc',function () {
    return function (x) {
        x = (x/(1024*1024)).toFixed(2) + 'mb';
        return x
    };
})

myApp.filter('type',function () {
    return function (x) {
        switch (x)
        {
            case 0:
                x = '首页banner';
                break;
            case 1:
                x = '找职位banner';

                break;
            case 2:
                x = '找精英banner';
                break;
            case 3:
                x = '行业大图';
                break;
        }
     return x
    }
})

myApp.filter('status',function () {
    return function (x) {
        switch (x){
            case 1:
                x="草稿";
                break;
            case 2:
                x="上线";
                break;
        }
        return x
    }
})

myApp.filter('caozuo',function () {
    return function (x) {
        switch (x){
            case 1:
                x="上线";
                break;
            case 2:
                x="下线";
                break;
        }
        return x
    }
})
