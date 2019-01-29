$(function(){
	// 搜索提示
	$('#search').click(function(){
		var keyword = $('#keyword').val();
		if(keyword == '' || keyword == null){
			layer.msg('请输入搜索关键字');
		}
	})
	$('.rank-box .js-list').hover(function(){
		$(this).find('.list').hide();
		$(this).find('.list-hover').addClass('hover');
	},function(){
		$(this).find('.list').show();
		$(this).find('.list-hover').removeClass('hover');
	})
})