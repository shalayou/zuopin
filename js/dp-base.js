$(document).ready(function(){
  var span=$('.context').find('span');
  var img=$('.box').find('img');
  span.click(function(){
  	var index=$(this).index();
  	span.removeClass("active2");
  	span.eq(index).addClass('active2');
  	img.css("display","none");
  	img.eq(index).css("display","block");
  	console.log(index);
  });
});