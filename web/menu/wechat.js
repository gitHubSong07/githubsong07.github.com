/**
 * Created by 陈松 on 2016/6/28.
 */
$(function(){
    var oNavi =  $('.navi ul li ');
    console.log(oNavi.length);
        oNavi.on('click',function(){

        var index = this;
        oNavi.each(function(ev){
            $(oNavi[ev]).removeClass('naviActive');
        });
            console.log(index);
        $(index).addClass('naviActive');
    });



//     var aj = $.ajax( {
//            url:'productManager_reverseUpdate',// 跳转到 action
//         data:{
//         },
//        type:'post',
//          cache:false,
//          dataType:'json',
//         success:function(data) {
//             console.log("返回成功");
//              if(data.msg =="true" ){
//
//
//                     window.location.reload();
//                    }else{
//
//                       view(data.msg);
//                    }
//            },
//          error : function() {
//                  // view("异常！");
//
//             }
//     });
});