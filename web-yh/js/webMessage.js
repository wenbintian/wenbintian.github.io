$(document).ready(function(){

  //浏览文档记录分页
  var previewFilePage = $("#previewFilePage");
  previewFilePage.on("click",".go",function(){
    layer.msg("点击了浏览文档记录go操作")
  });
  previewFilePage.on("click",".prev",function(){
    layer.msg("点击了浏览文档记录上一页")
  });
  previewFilePage.on("click",".next",function(){
    layer.msg("点击了浏览文档记录下一页")
  });

  $("#previewFileSearch").on("click",function(){
    layer.msg("点击了浏览文档记录搜索记录")
  });

  $("#webMessageSelect").change(function(){
    layer.msg("下拉改变事件")
  });

  var menuBox = $(".menuBox");
  menuBox.on("click",".search-box-btn",function(){
    layer.msg("点击了批量操作");
  });
  var menuDetail = $(".menuDetail");
  menuDetail.on("click",".menu-detail__checkbox",function(){
    layer.msg("点击了勾选")
    if($(this).hasClass("active")){
      $(this).removeClass("active");
    }else {
      $(this).addClass("active")
    }
  });


});