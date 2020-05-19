window.onload = function(){
 document.onscroll = function(){
  var dom = document.documentElement.scrollTop;
  if(dom>800){
    document.getElementsByClassName('hot')[0].setAttribute('style','position:fixed');
    document.getElementsByClassName('hot')[0].style.top = '60px';
    document.getElementsByClassName('hot')[0].style.left = '6.2%';
  }else{
    document.getElementsByClassName('hot')[0].setAttribute('style','position:absolute');
    document.getElementsByClassName('hot')[0].style.top = '0';
    document.getElementsByClassName('hot')[0].style.left = '-120px';
  }


  if(dom>160){
    document.getElementsByClassName('nav')[0].setAttribute('style','position:fixed');
    document.getElementsByClassName('nav')[0].style.top = '0';
    document.getElementsByClassName('nav')[0].style.left = '0';
    document.getElementsByClassName('nav')[0].style.padding = '10px';
    document.getElementsByClassName('nav')[0].style.padding = '10px';
    document.getElementById('fixedImg').setAttribute('class','fixednav');

  }else{
    document.getElementsByClassName('nav')[0].setAttribute('style','position:none');
    document.getElementsByClassName('nav')[0].setAttribute('style','padding:0');
    document.getElementById('fixedImg').removeAttribute('class');
  }
 }

 //现在购物车数量 
 var text  = $('.shopcar>span:last-child').text();

 //所点击的商品的信息  可以从通过技术从后端获取商品信息，给定每个商品分类id在后端查询



}