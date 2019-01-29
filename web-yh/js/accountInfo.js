$(document).ready(function(){
  //账号服务等的切换(个人账号信息)
  $(".menuBox").on("click",".menu-item",function(){
    $(this).addClass("active").siblings().removeClass("active");
    var menuDetailDom = $(".menuDetail");
    menuDetailDom.find(".menu-detail-main").removeClass("active");
    menuDetailDom.find("[data-id="+ this.dataset.id +"]").addClass("active");
  });

  var changePage = $("#changPage");
  changePage.on("click",".go",function(){
    layer.msg("点击了go操作")
  });
  changePage.on("click",".prev",function(){
    layer.msg("点击了上一页")
  });
  changePage.on("click",".next",function(){
    layer.msg("点击了下一页")
  });



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