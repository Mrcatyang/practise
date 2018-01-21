/**
 * Created by Mr.Yang on 2017/10/14.
 */
// var login=document.getElementById("login");
// login.onclick=function () {
//     var request = new XMLHttpRequest();
//     request.open('POST','carrots-admin-ajax/a/login');
//     request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//     request.send("name="+document.getElementById('user').value+"&pwd="+document.getElementById('pwd').value);
//     request.onreadystatechange=function () {
//         if (request.readyState===4){
//             if (request.status===200){
//
//             }else {
//                 alert("发生错误："+ request.status);}
//         }else {
//             alert("发生错误："+ request.readyState);
//         }
//     }
// };

$("#login").click(function () {
    $.ajax({
        type:"POST",
        url:"/carrots-admin-ajax/a/login",
        data:{
            name: $("#user").val(),
            pwd: $("#pwd").val()
        },
        dataType: "json",

        success:function(data) {
            if (data.code === -5003) {
                $(".li1").empty();
                $('.li1').append(data.message);
            } else if (data.code === -5004) {
                $(".li1").empty();
                $(".li2").empty();
                $('.li2').append(data.message);
            }else if (data.code === 0){
                window.location.href=/carrots-admin-ajax/
            }
        },
            error: function (data) {
                return data.message;
            }
    });
});

