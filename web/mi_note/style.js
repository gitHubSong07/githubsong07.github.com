/**
 * Created by 陈松 on 2016/6/13.
 */

function getStyle(obj){
    if(obj.currentStyle){
    return obj.currentStyle();
    }else{
    return  getComputedStyle(obj,null);
    //伪类或者空
    }
    }
//运动框架
function startMove(obj,name,iTarget) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
    var speed = 0;
    var cur = 0;
    if (name == 'opacity') {
    cur = parseFloat(getStyle(obj)[name]) * 100;
    } else {
    cur = parseInt(getStyle(obj)[name]);
    }
    speed = (iTarget - cur) / 6;
    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

    if (iTarget == parseInt(100 * getStyle(obj)[name]) / 100) {
    clearInterval(obj.timer);
    } else {
    if (name == 'opacity') {
    obj.style.filter = 'alpha(opacity:' + cur + speed + ')';
    obj.style.opacity = (cur + speed) / 100;
    } else {
    obj.style[name] = parseInt(getStyle(obj)[name]) + speed + 'px';
    }
    }
    }, 30);
    }
//获取指定的class
function getByClass(oParent,sClass){
    var aEle = oParent.getElementsByTagName('*');
    var aResult = [];
    for(var i=0;i<aEle.length; i++){
    if(aEle[i].className == sClass){
    aResult.push(aEle[i]);
    }
    }
    return aResult;
    }

window.onload = function(){
    var oDiv = document.getElementById('playimages');
    var oImg = document.getElementById('big-image');
    var oPrev = getByClass(oDiv,'prev')[0];
    var oNext = getByClass(oDiv,'next')[0];
    var oLeft = getByClass(oDiv,'mark_left')[0];
    var oRight = getByClass(oDiv,'mark_right')[0];
    var arrImgStr = ['img/overall-intro-slide-01.jpg','img/overall-intro-slide-02.jpg','img/overall-intro-slide-03.jpg','img/overall-intro-slide-04.jpg'];
    var current_ImgIndex = 0;

    oLeft.onmouseover = function(){
    //成功执行到此
    startMove(oPrev,'opacity',100);
    }
    oLeft.onmouseout = function(){
    startMove(oPrev,'opacity',0);
    }
    oRight.onmouseover = function(){
    //成功执行到此
    startMove(oNext,'opacity',100);
    }
    oRight.onmouseout = function(){
    startMove(oNext,'opacity',0);
    }
    //点击换图
    //设置图片轮播 自由切换上一页，下一页；
    setInterval(nextImg,2000);
    oNext.onclick = nextImg;
    oPrev.onclick = prevImg ;
    function nextImg(){//下一张图
    if(current_ImgIndex ==arrImgStr.length-1){
    current_ImgIndex = 0;
    }
    else{
    current_ImgIndex++;
    }
    oImg.src =  arrImgStr[current_ImgIndex];
    }
    function prevImg(){//上一张图
    if(current_ImgIndex == 0){
    current_ImgIndex = arrImgStr.length-1;
    }
    else{
    current_ImgIndex--;
    }
    oImg.src =  arrImgStr[current_ImgIndex];
    }
    //头部鼠标划过去 显示菜单
    var oCommodity_area = document.getElementById('commodity-area');
    var oComodity_content=document.getElementById('comodity-li-content');
    //调用getClass 获取class[arr]
    var oCommodify = getByClass(oCommodity_area,'comodity-li');//10
    console.log('---------'+oCommodify.length);
    oCommodify[0].onmouseover = moveOver; //鼠标 移上去触发
        //getStyle(oComodity_content).display = 'block';


    oCommodify[0].onmouseout = moveOut;
    oComodity_content.onmouseover = moveOver ;
    oComodity_content.onmouseout = moveOut;

    function moveOver(){
        oComodity_content.style.display = 'block';
    }
    function moveOut(){
        oComodity_content.style.display = 'none';
    }

    }







