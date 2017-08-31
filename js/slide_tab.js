/**
 * Created by acer1 on 2016/12/12.
 */
$(function () {
    var $div_li = $(".nav-tabs li");
    $div_li.hover(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
        var index = $div_li.index(this);

        $("div.tab-content > div").eq(index).show().siblings().hide();
    }).hover(function () {
        $(this).addClass("hover");
    },function () {
        $(this).removeClass("hover").show();
    });

});


