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


});