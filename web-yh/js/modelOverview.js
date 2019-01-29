$(document).ready(function(){

  var banks = [
    {id:"zggsyh",name:"中国工商银行",icon:"gs_bank.png"},
    {id:"zgnyyh",name:"中国农业银行",icon:"ny_bank.png"},
    {id:"zgjsyh",name:"中国建设银行",icon:"js_bank.png"},
    {id:"zgmsyh",name:"中国民生银行",icon:"ms_bank.png"},
    {id:"zsyh",name:"招商银行",icon:"zs_bank.png"},
    {id:"xyyh",name:"兴业银行",icon:"xy_bank.png"},
    {id:"zgyh",name:"中国银行",icon:"zg_bank.png"},
    {id:"zgyz",name:"中国邮政",icon:"yz_bank.png"},
    {id:"zggdyh",name:"中国广大银行",icon:"gd_bank.png"},
    {id:"shyh",name:"上海银行",icon:"sh_bank.png"},
    {id:"gfyh",name:"广发银行",icon:"gf_bank.png"},
    {id:"zgyl",name:"中国银联",icon:"yl_bank.png"},
    {id:"zfub",name:"支付宝",icon:"zfb.png"},
    {id:"wx",name:"支付宝"},
    {id:"gszz",name:"公司转账"},
  ];

  var banksBoxDom = $("#accountBankBox");
  var rechargeKnowBox = $("#rechargeKnowBox");
  var banksDom = banksBoxDom.find(".menu-recharge-banks");
  var html = ["<ul>"];
  for(var i= 0,l=banks.length; i<l; i++){
    var item = banks[i];
    html.push('<li class="menu-bank-item" ');
    html.push('data-id="'+ item.id +'" ');
    html.push('data-name="'+ item.name +'" ');
    if(item.icon){
      html.push('style="background-image: url(./images/bank/');
      html.push(item.icon);
      html.push(')"></li>');
    }else {
      html.push('>'+item.name);
      html.push('</li>');
    }


  }
  html.push("</ul>");
  html = html.join("");
  banksDom.html(html);

  //监听银行点击事件
  banksBoxDom.on("click",".menu-bank-item",function(){
    $(this).addClass("selected").siblings().removeClass("selected");
  });
  //监听银行点击事件
  banksBoxDom.on("click",".recharge-btn",function(){
    var selectDom = banksDom.find(".selected");
    if(!selectDom.length){
      layer.msg("请先选择对应的支付方式");
      return;
    }
    var id = selectDom.data("id");
    var name = selectDom.data("name");
    if(id=="gszz"){
      rechargeKnowBox.show();
    }else {
      layer.msg("点击了 "+ name);
    }
  });
  rechargeKnowBox.on("click",".recharge_dlg_close",function(){
    rechargeKnowBox.hide();
  });
  rechargeKnowBox.on("click",".recharge_btn",function(){
    layer.msg("点击了我知道了");
  });


  //参考图
  var referencePicture = $("#referencePicture");
  referencePicture.on("click",".reference_picture_tab li",function(){
    $(this).addClass("cur").siblings().removeClass("cur");
    layer.msg("点击切换图")
  });
  referencePicture.on("click",".ref_pic_right img",function(){
    layer.msg("点击了这个图片（"+$(this).attr("src")+")");
  });




  var data = [
    {
      title:"机型对比",
      children:[
        [{title:"机型图片"},{img:"./images/plane1.png"},{img:""},{img:"./images/plane1.png"},{img:"./images/plane1.png"}],
        [{title:"机型选择"},{title:"1"},{title:"2"},{title:"3"},{title:"4"}],
        [{title:"机型基本信息"},{title:"1"},{title:"2"},{title:"3"},{title:"4"}],
        [{title:"绰号"},{title:"1"},{title:"2"},{title:"3"},{title:"4"}],
        [{title:"品牌"},{title:"1"},{title:"2"},{title:"3"},{title:"4"}],
        [{title:"母公司"},{title:"1"},{title:"2"},{title:"3"},{title:"4"}],
        [{title:"货别"},{title:"1"},{title:"2"},{title:"3"},{title:"4"}],
        [{title:"国内交货含税价"},{title:"1"},{title:"2"},{title:"3"},{title:"4"}],
        [{title:"级别"},{title:"1"},{title:"2"},{title:"3"},{title:"4"}],
        [{title:"全球机队规模"},{title:"1"},{title:"2"},{title:"3"},{title:"4"}],
      ],
    },
    {
      title:"技术参数",
      children:[
        [{title:"重量"}],
        [{title:"空重"},{title:"1"},{title:"2"},{title:"3"},{title:"4"}],
        [{title:"标配内载"},{title:"1"},{title:"2"},{title:"3"},{title:"4"}],
        [{title:"最大起飞重量"},{title:"1"},{title:"2"},{title:"3"},{title:"4"}],
        [{title:"基本标配内载"},{title:"1"},{title:"2"},{title:"3"},{title:"4"}],
        [{title:"有效载"},{title:"1"},{title:"2"},{title:"3"},{title:"4"}],
        [{title:"外载"},{title:"1"},{title:"2"},{title:"3"},{title:"4"}],
        [{title:"性能"}],
        [{title:"不可逾越速度"},{title:"1"},{title:"2"},{title:"3"},{title:"4"}],
        [{title:"最大巡航速度"},{title:"1"},{title:"2"},{title:"3"},{title:"4"}],
        [{title:"经济巡航速度"},{title:"1"},{title:"2"},{title:"3"},{title:"4"}],
        [{title:"基本标配内载"},{title:"1"},{title:"2"},{title:"3"},{title:"4"}],
        [{title:"有效载"},{title:"1"},{title:"2"},{title:"3"},{title:"4"}],
        [{title:"外载"},{title:"1"},{title:"2"},{title:"3"},{title:"4"}],
        [{title:"发动机"}],
        [{title:"发动机型号"},{title:"1"},{title:"2"},{title:"3"},{title:"4"}],
        [{title:"燃料形式"},{title:"1"},{title:"2"},{title:"3"},{title:"4"}],
        [{title:"平均油耗"},{title:"1"},{title:"2"},{title:"3"},{title:"4"}],
        [{title:"基本标配内载"},{title:"1"},{title:"2"},{title:"3"},{title:"4"}],
        [{title:"有效载"},{title:"1"},{title:"2"},{title:"3"},{title:"4"}],
        [{title:"外载"},{title:"1"},{title:"2"},{title:"3"},{title:"4"}],
      ],
    }
  ];
  var data1 = [
    {
      title:"机型对比",
      children:[
        [{title:"机型图片"},{img:"./images/plane1.png"},{img:"./images/plane1.png"},{img:"./images/plane1.png"},{img:""}],
        [{title:"机型选择"},{title:"2"},{title:"1"},{title:"3"},{title:"4"}],
        [{title:"机型基本信息"},{title:"2"},{title:"1"},{title:"3"},{title:"4"}],
        [{title:"绰号"},{title:"2"},{title:"1"},{title:"3"},{title:"4"}],
        [{title:"品牌"},{title:"2"},{title:"1"},{title:"3"},{title:"4"}],
        [{title:"母公司"},{title:"2"},{title:"1"},{title:"3"},{title:"4"}],
        [{title:"货别"},{title:"2"},{title:"1"},{title:"3"},{title:"4"}],
        [{title:"国内交货含税价"},{title:"2"},{title:"1"},{title:"3"},{title:"4"}],
        [{title:"级别"},{title:"2"},{title:"1"},{title:"3"},{title:"4"}],
        [{title:"全球机队规模"},{title:"2"},{title:"1"},{title:"3"},{title:"4"}],
      ],
    },
    {
      title:"技术参数",
      children:[
        [{title:"重量"}],
        [{title:"空重"},{title:"2"},{title:"1"},{title:"3"},{title:"4"}],
        [{title:"标配内载"},{title:"2"},{title:"1"},{title:"3"},{title:"4"}],
        [{title:"最大起飞重量"},{title:"2"},{title:"1"},{title:"3"},{title:"4"}],
        [{title:"基本标配内载"},{title:"2"},{title:"1"},{title:"3"},{title:"4"}],
        [{title:"有效载"},{title:"2"},{title:"1"},{title:"3"},{title:"4"}],
        [{title:"外载"},{title:"2"},{title:"1"},{title:"3"},{title:"4"}],
        [{title:"性能"}],
        [{title:"不可逾越速度"},{title:"2"},{title:"1"},{title:"3"},{title:"4"}],
        [{title:"最大巡航速度"},{title:"2"},{title:"1"},{title:"3"},{title:"4"}],
        [{title:"经济巡航速度"},{title:"2"},{title:"1"},{title:"3"},{title:"4"}],
        [{title:"基本标配内载"},{title:"2"},{title:"1"},{title:"3"},{title:"4"}],
        [{title:"有效载"},{title:"2"},{title:"1"},{title:"3"},{title:"4"}],
        [{title:"外载"},{title:"2"},{title:"1"},{title:"3"},{title:"4"}],
        [{title:"发动机"}],
        [{title:"发动机型号"},{title:"2"},{title:"1"},{title:"3"},{title:"4"}],
        [{title:"燃料形式"},{title:"2"},{title:"1"},{title:"3"},{title:"4"}],
        [{title:"平均油耗"},{title:"2"},{title:"1"},{title:"3"},{title:"4"}],
        [{title:"基本标配内载"},{title:"2"},{title:"1"},{title:"3"},{title:"4"}],
        [{title:"有效载"},{title:"2"},{title:"1"},{title:"3"},{title:"4"}],
        [{title:"外载"},{title:"2"},{title:"1"},{title:"3"},{title:"4"}],
      ],
    }
  ];
  var data2 = [
    {
      title:"机型对比",
      children:[
        [{title:"机型图片"},{img:"./images/plane1.png"},{img:"./images/plane1.png"},{img:"./images/plane1.png"},{img:""}],
        [{title:"机型选择"},{title:"2"},{title:""},{title:"3"},{title:"4"}],
        [{title:"机型基本信息"},{title:"2"},{title:""},{title:"3"},{title:"4"}],
        [{title:"绰号"},{title:"2"},{title:""},{title:"3"},{title:"4"}],
        [{title:"品牌"},{title:"2"},{title:""},{title:"3"},{title:"4"}],
        [{title:"母公司"},{title:"2"},{title:""},{title:"3"},{title:"4"}],
        [{title:"货别"},{title:"2"},{title:""},{title:"3"},{title:"4"}],
        [{title:"国内交货含税价"},{title:"2"},{title:""},{title:"3"},{title:"4"}],
        [{title:"级别"},{title:"2"},{title:""},{title:"3"},{title:"4"}],
        [{title:"全球机队规模"},{title:"2"},{title:""},{title:"3"},{title:"4"}],
      ],
    },
    {
      title:"技术参数",
      children:[
        [{title:"重量"}],
        [{title:"空重"},{title:"2"},{title:""},{title:"3"},{title:"4"}],
        [{title:"标配内载"},{title:"2"},{title:""},{title:"3"},{title:"4"}],
        [{title:"最大起飞重量"},{title:"2"},{title:""},{title:"3"},{title:"4"}],
        [{title:"基本标配内载"},{title:"2"},{title:""},{title:"3"},{title:"4"}],
        [{title:"有效载"},{title:"2"},{title:""},{title:"3"},{title:"4"}],
        [{title:"外载"},{title:"2"},{title:""},{title:"3"},{title:"4"}],
        [{title:"性能"}],
        [{title:"不可逾越速度"},{title:"2"},{title:""},{title:"3"},{title:"4"}],
        [{title:"最大巡航速度"},{title:"2"},{title:""},{title:"3"},{title:"4"}],
        [{title:"经济巡航速度"},{title:"2"},{title:""},{title:"3"},{title:"4"}],
        [{title:"基本标配内载"},{title:"2"},{title:""},{title:"3"},{title:"4"}],
        [{title:"有效载"},{title:"2"},{title:""},{title:"3"},{title:"4"}],
        [{title:"外载"},{title:"2"},{title:""},{title:"3"},{title:"4"}],
        [{title:"发动机"}],
        [{title:"发动机型号"},{title:"2"},{title:""},{title:"3"},{title:"4"}],
        [{title:"燃料形式"},{title:"2"},{title:""},{title:"3"},{title:"4"}],
        [{title:"平均油耗"},{title:"2"},{title:""},{title:"3"},{title:"4"}],
        [{title:"基本标配内载"},{title:"2"},{title:""},{title:"3"},{title:"4"}],
        [{title:"有效载"},{title:"2"},{title:""},{title:"3"},{title:"4"}],
        [{title:"外载"},{title:"2"},{title:""},{title:"3"},{title:"4"}],
      ],
    }
  ];

  //选择机型的下拉的html
  var selectHtml ='<div class="brand_wrap clearfix">'+
    '                                <div class="pick-model">'+
    '                                    <span class="plane_select_wrap PicOne">选择品牌</span>'+
    '                                    <span class="plane_input_wrap PicTwo">车系</span>'+
    '                                </div>'+
    '                                <div class="brand_left">'+
    '                                    <div class="picSliderOne">'+
    '                                        <div class="brand_head">选择品牌</div>'+
    '                                        <div class="brand_nav">'+
    '                                            <div class="brand_side">'+
    '                                                <div class="numA-Z">'+
    '                                                    <a class="pic-item" href="javascript:void(0)" class="">A</a>'+
    '                                                    <a class="pic-item" href="javascript:void(0)" class="">B</a>'+
    '                                                    <a class="pic-item" href="javascript:void(0)" class="">C</a>'+
    '                                                    <a class="pic-item" href="javascript:void(0)" class="">D</a>'+
    '                                                    <a class="pic-item" href="javascript:void(0)" class="">E</a>'+
    '                                                    <a class="pic-item" href="javascript:void(0)">F</a>'+
    '                                                    <a class="pic-item" href="javascript:void(0)">G</a>'+
    '                                                    <a class="pic-item" href="javascript:void(0)" class="">H</a>'+
    '                                                    <a class="pic-item" href="javascript:void(0)" class="">I</a>'+
    '                                                    <a class="pic-item" href="javascript:void(0)" class="">J</a>'+
    '                                                    <a class="pic-item" href="javascript:void(0)" class="">K</a>'+
    '                                                    <a class="pic-item" href="javascript:void(0)" class="active">L</a>'+
    '                                                    <a class="pic-item" href="javascript:void(0)">M</a>'+
    '                                                    <a class="pic-item" href="javascript:void(0)">N</a>'+
    '                                                    <a class="pic-item" href="javascript:void(0)">O</a>'+
    '                                                    <a class="pic-item" href="javascript:void(0)">P</a>'+
    '                                                    <a class="pic-item" href="javascript:void(0)">Q</a>'+
    '                                                    <a class="pic-item" href="javascript:void(0)">R</a>'+
    '                                                    <a class="pic-item" href="javascript:void(0)">S</a>'+
    '                                                    <a class="pic-item" href="javascript:void(0)">T</a>'+
    '                                                    <a class="pic-item" href="javascript:void(0)">U</a>'+
    '                                                    <a class="pic-item" href="javascript:void(0)">V</a>'+
    '                                                    <a class="pic-item" href="javascript:void(0)">W</a>'+
    '                                                    <a class="pic-item" href="javascript:void(0)">X</a>'+
    '                                                    <a class="pic-item" href="javascript:void(0)">Y</a>'+
    '                                                    <a class="pic-item" href="javascript:void(0)">Z</a>'+
    '                                                </div>'+
    '                                            </div>'+
    '                                            <div class="brand_col">'+
    '                                                <div class="brand_list">'+
    '                                                    <ul class="list_cont">'+
    '                                                        <li class="name">A</li>'+
    '                                                        <li>'+
    '                                                            <a class="pic-item" href="javascript:void(0);">字母定位</a>'+
    '                                                        </li>'+
    '                                                        <li class="name">B</li>'+
    '                                                        <li>'+
    '                                                            <a class="pic-item" href="javascript:void(0);">字母定位</a>'+
    '                                                        </li>'+
    '                                                        <li class="name">C</li>'+
    '                                                        <li>'+
    '                                                            <a class="pic-item" href="javascript:void(0);">字母定位</a>'+
    '                                                        </li>'+
    '                                                        <li class="name">D</li>'+
    '                                                        <li>'+
    '                                                            <a class="pic-item" href="javascript:void(0);">字母定位</a>'+
    '                                                        </li>'+
    '                                                        <li class="name">E</li>'+
    '                                                        <li>'+
    '                                                            <a class="pic-item" href="javascript:void(0);">字母定位</a>'+
    '                                                        </li>'+
    '                                                        <li class="name">F</li>'+
    '                                                        <li>'+
    '                                                            <a class="pic-item" href="javascript:void(0);">字母定位</a>'+
    '                                                        </li>'+
    '                                                        <li class="name">G</li>'+
    '                                                        <li>'+
    '                                                            <a class="pic-item" href="javascript:void(0);">字母定位</a>'+
    '                                                        </li>'+
    '                                                        <li class="name">H</li>'+
    '                                                        <li>'+
    '                                                            <a class="pic-item" href="javascript:void(0);">字母定位</a>'+
    '                                                        </li>'+
    '                                                        <li class="name">I</li>'+
    '                                                        <li>'+
    '                                                            <a class="pic-item" href="javascript:void(0);">字母定位</a>'+
    '                                                        </li>'+
    '                                                        <li class="name">J</li>'+
    '                                                        <li>'+
    '                                                            <a class="pic-item" href="javascript:void(0);">字母定位</a>'+
    '                                                        </li>'+
    '                                                        <li class="name">K</li>'+
    '                                                        <li>'+
    '                                                            <a class="pic-item" href="javascript:void(0);">字母定位</a>'+
    '                                                        </li>'+
    '                                                        <li class="name">L</li>'+
    '                                                        <li>'+
    '                                                            <a class="pic-item" href="javascript:void(0);">字母定位</a>'+
    '                                                        </li>'+
    '                                                        <li class="name">M</li>'+
    '                                                        <li>'+
    '                                                            <a class="pic-item" href="javascript:void(0);">字母定位</a>'+
    '                                                        </li>'+
    '                                                        <li class="name">N</li>'+
    '                                                        <li>'+
    '                                                            <a class="pic-item" href="javascript:void(0);">字母定位</a>'+
    '                                                        </li>'+
    '                                                        <li class="name">O</li>'+
    '                                                        <li>'+
    '                                                            <a class="pic-item" href="javascript:void(0);">字母定位</a>'+
    '                                                        </li>'+
    '                                                        <li class="name">P</li>'+
    '                                                        <li>'+
    '                                                            <a class="pic-item" href="javascript:void(0);">字母定位</a>'+
    '                                                        </li>'+
    '                                                        <li class="name">Q</li>'+
    '                                                        <li>'+
    '                                                            <a class="pic-item" href="javascript:void(0);">字母定位</a>'+
    '                                                        </li>'+
    '                                                        <li class="name">R</li>'+
    '                                                        <li>'+
    '                                                            <a class="pic-item" href="javascript:void(0);">字母定位</a>'+
    '                                                        </li>'+
    '                                                        <li class="name">S</li>'+
    '                                                        <li>'+
    '                                                            <a class="pic-item" href="javascript:void(0);">字母定位</a>'+
    '                                                        </li>'+
    '                                                        <li class="name">T</li>'+
    '                                                        <li>'+
    '                                                            <a class="pic-item" href="javascript:void(0);">字母定位</a>'+
    '                                                        </li>'+
    '                                                        <li class="name">U</li>'+
    '                                                        <li>'+
    '                                                            <a class="pic-item" href="javascript:void(0);">字母定位</a>'+
    '                                                        </li>'+
    '                                                        <li class="name">V</li>'+
    '                                                        <li>'+
    '                                                            <a class="pic-item" href="javascript:void(0);">字母定位</a>'+
    '                                                        </li>'+
    '                                                        <li class="name">W</li>'+
    '                                                        <li>'+
    '                                                            <a class="pic-item" href="javascript:void(0);">字母定位</a>'+
    '                                                        </li>'+
    '                                                        <li class="name">X</li>'+
    '                                                        <li>'+
    '                                                            <a class="pic-item" href="javascript:void(0);">字母定位</a>'+
    '                                                        </li>'+
    '                                                        <li class="name">Y</li>'+
    '                                                        <li>'+
    '                                                            <a class="pic-item" href="javascript:void(0);">字母定位</a>'+
    '                                                        </li>'+
    '                                                        <li class="name">Z</li>'+
    '                                                        <li>'+
    '                                                            <a class="pic-item" href="javascript:void(0);">字母定位</a>'+
    '                                                        </li>'+
    '                                                    </ul>'+
    '                                                </div>'+
    '                                            </div>'+
    '                                        </div>'+
    '                                    </div>'+
    '                                    <div class="picSliderTwo">'+
    '                                        <div class="brand_head">车系</div>'+
    '                                        <div class="brand_nav">'+
    '                                            <div class="brand_col">'+
    '                                                <div class="brand_list">'+
    '                                                    <ul class="list_cont">'+
    '                                                        <li class="name">在售车型</li>'+
    '                                                        <li>'+
    '                                                            <a class="pic-item" href="javascript:void(0);">宝马</a>'+
    '                                                        </li>'+
    '                                                        <li class="name">停售车型</li>'+
    '                                                        <li>'+
    '                                                            <a class="pic-item" href="javascript:void(0);">奔驰</a>'+
    '                                                        </li>'+
    '                                                        <li>'+
    '                                                            <a class="pic-item" href="javascript:void(0);">本田</a>'+
    '                                                        </li>'+
    '                                                    </ul>'+
    '                                                </div>'+
    '                                            </div>'+
    '                                        </div>'+
    '                                    </div>'+
    '                                </div>'+
    '                            </div>';


  var modelCompareBox = $("#modelCompareBox");
  modelCompareBox.html(makeMain(data));

  modelCompareBox.on("click",".planr_img_icon",function(){
    layer.msg("点击删除该机型,后端自己重新拼接数据 然后调用makeMain方法重新渲染");
    setTimeout(function(){
      modelCompareBox.html(makeMain(data2));
    },3000)
  });
  modelCompareBox.on("click",".right_btn",function(){
    layer.msg("点击与右边进行换位置");
    setTimeout(function(){
      modelCompareBox.html(makeMain(data1));
    },3000)
  });

  //组装成html
  function makeMain(data){
    var html = [];
    for(var i= 0,l=data.length; i<l; i++){
      var item1 = data[i];

      if(i==0){//机型对比
        html.push('<h5>');
        html.push(item1.title);
        html.push('<div class="common_nav">');
        html.push('<a href="#" class="common_nav_item">首页</a><a href="#" class="common_nav_item">机型</a><a href="#" class="common_nav_item">机型对比</a>');
        html.push('</div>');
        html.push('</h5>');
        html.push('<table class="common_table model_comparison_table ">');
        html.push('<tbody>');

        for(var j= 0,k=item1.children.length; j<k; j++){
          html.push('<tbody>');

          if(j==0){//机型图片
            html.push('<tr class="table_model_spl_wrap">');
            var item2 = item1.children[j];
            for(var a= 0,a1=item2.length; a<a1; a++){
              if(a==0){
                html.push('<td class="table_model_spl">');
                html.push(item2[a].title);
                html.push('</td>');
              }else if(item2[a].img){
                html.push('<td>');
                html.push('<img class="plane_img" src="' + item2[a].img + '" alt="">');
                //data-id 可以存放该机型的唯一标识
                html.push('<i class="icon planr_img_icon" data-id="' + a + '"></i>');
                html.push('</td>');
              }else {
                html.push('<td>');
                html.push('<div class="add_plane">');
                html.push('<i class="icon add_icon"></i>');
                html.push('</div></td>');
              }
            }
            html.push('</tr>');
          }else if(j==1){//机型选择
            html.push('<tr class="table_model_spl_wrap">');
            var item2 = item1.children[j];
            for(var a= 0,a1=item2.length; a<a1; a++){

              if(a==0){
                html.push('<td class="table_model_spl">');
                html.push(item2[a].title);
                html.push('</td>');
              }else {
                html.push('<td>');
                html.push(selectHtml);
                html.push('<div>');
                html.push('<button class="delete_btn btn">删除</button>');
                html.push('<div class="btn right_left_btn_wrap">');
                if(a==1){
                  html.push('<i class="icon right_btn btn_icon_middle"></i>');
                }else if(a+1==item2.length){
                  html.push('<i class="icon left_btn btn_icon_middle"></i>');
                }else {
                  html.push('<i class="icon left_btn"></i>');
                  html.push('<i class="icon right_btn"></i>');
                }
                html.push('</div>');
                html.push('</div>');
                html.push('</td>');
              }
            }
            html.push('</tr>');
          }else if(j==2){//机型基本信息
            html.push('<tr class="table_model_spl_wrap">');
            var item2 = item1.children[j];
            for(var a= 0,a1=item2.length; a<a1; a++){
              html.push('<td class="table_model_spl">');
              html.push(item2[a].title||"&nbsp;");
              html.push('</td>');
            }
            html.push('</tr>');
          }else {
            html.push('<tr>');
            var item2 = item1.children[j];
            for(var a= 0,a1=item2.length; a<a1; a++){
              html.push('<td class="table_model_spl">');
              html.push(item2[a].title||"&nbsp;");
              html.push('</td>');
            }
            html.push('</tr>');
          }
        }
      }else {
        html.push('<h5 class="table-title">');
        html.push(item1.title);
        html.push('</h5>');
        html.push('<table class="common_table model_comparison_table ">');
        html.push('<tbody>');

        for(var j= 0,k=item1.children.length; j<k; j++){
          html.push('<tbody>');
          var item2 = item1.children[j];
          if(item2.length==1){
            html.push('<tr>');
            html.push('<td class="tbody_item" colspan="5">'+ item2[0].title +'</td>');
            html.push('</tr>');
          }else {
            html.push('<tr>');
            for(var a= 0,a1=item2.length; a<a1; a++){
              html.push('<td>');
              html.push(item2[a].title||"&nbsp;");
              html.push('</td>');
            }
            html.push('</tr>');
          }
        }
      }
      html.push('</tbody>');
      html.push('</table>');
    }
    return html.join("");
  }

});