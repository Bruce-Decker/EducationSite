$(function () {
    function time(){
        var date1 = new Date();
        var date2=new Date(date1);
        date2.setDate(date1.getDate()+2);
        var month=(date2.getMonth()+1);
        var day=date2.getDate();
        $("#month").text(month);
        $("#day").text(day);
        $("#m1").text(month);
        $("#d1").text(day);
        $("#m2").text(month);
        $("#d2").text(day);
        $("#m3").text(month);
        $("#d3").text(day);
    }
    time();
    //
    $(".school_tab li").click(function(){
        var _index=$(this).index();
        $(this).addClass("on").siblings("li").removeClass("on");
        $(".tab_box").eq(_index).show().siblings(".tab_box").hide();
    });

    var all = $(".conditions_ul");
    var aLi = all.find("li");
    var a1 = 0;

    function foo() {
        for(var i = 0; i < aLi.length; i++) {
            aLi.eq(i).children(".conditions_pic").hide();
        };
        var a = parseInt(Math.random() * 8);
        while(a == a1) {
            a = parseInt(Math.random() * 8);
        };
        aLi.eq(a).children(".conditions_pic").show();
        a1 = a;
    };
    timer = setInterval(foo, 3000);
});
document.oncopy = function(){
    return false;
};
document.onmousedown = function(e){
    if ( e.which == 2 ){// 鼠标滚轮的按下，滚动不触发
        return false;
    }
    if( e.which==3 ){// 鼠标右键
        return false;
    }
};
document.onkeydown = function(){
    if( event.ctrlKey ){
        return false;
    }
    if ( event.altKey ){
        return false;
    }
    if ( event.shiftKey ){
        return false;
    }
    if(event.keyCode == 123) {
        return false;
    } else if((event.ctrlKey) && (event.shiftKey) && (event.keyCode == 73)) {
        return false;
    } else if((event.shiftKey) && (event.keyCode == 121)){
        return false;
    }
};
document.onselectstart = function(){
    return false;
};

$(document).bind("contextmenu", function (e) {
    return false;
});