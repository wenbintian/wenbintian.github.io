/**
 * Created by twenbin on 2019/1/2.
 */
$(document).ready(function(){

    //=======产品中心 start ====



    var ComFixNavDom = $(".ComFixNav");
    //悬浮菜单点击事件
    ComFixNavDom.on("click","li",function(e){
        alert("当前点击的是"+ $(this).index());

    });
    var ProductBoxDom = $(".ProductBox");
    //产品分类的点击事件
    ProductBoxDom.on("click",".left-tabs-item",function(e){
        //设置其他选中样式
        $(this).addClass("active").siblings().removeClass("active");
        //获取列表的data-id属性
        var dataid = $(this).attr("data-id");
        alert("当前点击的是"+ $(this).html());


    });
    //点击购买咨询按钮事件
    ProductBoxDom.on("click",".ProductBoxBuy",function(e){
        alert("当前点击的是"+ $(this).html());


    });
    //点击上一页 下一页 首页 最后一页
    $(".ProductBoxPage").on("click",".page-btn",function(e){

        //首页
        if($(this).hasClass("first")){
            alert("当前点击的是 "+ $(this).html());
            return;
        }
        //上一页
        if($(this).hasClass("prev")){
            alert("当前点击的是 "+ $(this).html());
            return;
        }

        //下一页
        if($(this).hasClass("next")){
            alert("当前点击的是 "+ $(this).html());
            return;
        }
        //最后一页
        if($(this).hasClass("last")){
            alert("当前点击的是 "+ $(this).html());
        }


    });

    //=======产品中心 end ====

    //=======新闻资讯 start ====

    var NewsBoxDom =  $(".NewsBox");
    //点击新闻列表按钮
    NewsBoxDom.on("click",".NewsTabItem",function(e){
        //设置其他选中样式
        $(this).addClass("active").siblings().removeClass("active");
        alert("当前点击的是 "+ $(this).html());

    });

    //新闻资讯 点击上一页 下一页 首页 最后一页
    $(".NewsBoxPage").on("click",".page-item",function(e){

        //上一页
        if($(this).hasClass("prev")){
            alert("当前点击的是 "+ $(this).html());
            return;
        }

        //下一页
        if($(this).hasClass("next")){
            alert("当前点击的是 "+ $(this).html());
            return;
        }

        var dataId= $(this).attr("data-id");
        //如果dataId 有值 说明是点击了 第 几 页
        if(dataId){
            $(this).addClass("active").siblings().removeClass("active");
            alert("当前点击的是 第"+ dataId + "页");
        }

    });


});