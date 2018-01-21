/**
 * Created by Mr.Yang on 2017/10/20.
 */


$("ul").click(function () {
    $("ul").children("li").hide();
    $("ul").children("div").css("border-left","3px solid transparent");
    $("ul").find(".sd-sp2").css("transform","none");
    $(this).children("li").show();
    $(this).children("div").css("border-left","3px solid #fff");
    $(this).find(".sd-sp2").css("transform","rotate(270deg)")
})