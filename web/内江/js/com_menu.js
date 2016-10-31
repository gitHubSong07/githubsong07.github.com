/**
 * Created by 陈松 on 2016/10/14.
 */

function switchMenu(){
    console.log('进入switchMenu()');
    $('.menu-list span').on("click", function(){
        console.log(this);
        var index = this;
        var curDisplay = $(this).next('ul').css('display');
        console.log("记录当前的display:" + curDisplay);
        $('.menu-list>ul').each( function(){
            $(this).css('display','none');
        });
        $(index).next('ul').css('display', curDisplay);
        $(index).next('ul').toggle('normal');
    })
}