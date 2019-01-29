$(document).ready(function(){

	// 搜索提示
	$('#search').click(function(){
		var keyword = $('#keyword').val();
		if(keyword == '' || keyword == null){
			layer.msg('请输入搜索关键字');
		}
	})
	// 最新文章切换
	$('.nav-box a').click(function(){
		$(this).addClass('cur');
		$(this).siblings().removeClass('cur');
	})

	var typeChooseMain = $("#typeChooseMain");
	typeChooseMain.on("click",".type-choose-tt-icon",function(){
		layer.msg("点击了删除")
	});
	typeChooseMain.on("click",".type-choose-item-check",function(){
		layer.msg("点击了选中")
		var check = $(this).find(".choose-check");
		if(check.hasClass("active")){
			check.removeClass("active");
		}else {
			check.addClass("active");
		}
	});



});