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
    {id:"wx",name:"微信"},
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





});