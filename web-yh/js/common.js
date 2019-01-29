$(document).ready(function(){
	// 搜索提示
	$('#search').click(function(){
		var keyword = $('#keyword').val();
		if(keyword == '' || keyword == null){
			layer.msg('请输入搜索关键字');
		}
	});
	var bodyHg = document.body.height || document.documentElement.clientHeight;
	//注册弹窗
	$('#jsReg').click(function(){
		var html = '';
		html += '<div id="mask"></div>';
		html += '<div class="reg-box js-reg">';
		html += '<div class="reg-cont-box clearfix">';
		html += '<i class="reg-close icon"></i>';
		html += '<div class="left fl"><div class="img-box"><img src="images/reg.jpg" alt=""></div><a id="btnLogin" class="login" href="javascript:;">登录</a></div>';
		html += '<div class="right fr">';
		html += '<div class="tip">注册会员<span>（个人/企业账号）</span></div>';
		html += '<ul class="ul-box">';
		html += '<li class="list"><span class="title fl required">用&nbsp;&nbsp;户&nbsp;名：</span><input class="input fl" type="text" name="username"></li>';
		html += '<li class="list"><span class="title fl required">电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话：</span><input class="input fl" type="text" name="tel"></li>';
		html += '<li class="list"><span class="title fl required">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：</span><input class="input fl" type="text" name="email"></li>';
		html += '<li class="list"><span class="title fl required">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</span><input class="input fl" type="password" name="pwd1"></li>';
		html += '<li class="list"><span class="title fl required">确认密码：</span><input class="input fl" type="password" name="pwd2"></li>';
		html += '</ul>';
		html += '<a id="reg" class="btn-reg" href="javascript:;">注册</a>';
		html += '<div class="text">点击注册即表示接受翼趣航空的<a href="javascript:;">（用户协议）</a></div>';
		html += '</div>';
		html += '</div>';
		html += '</div>';
		$('#alert-box').html(html);
		$('#mask,.js-reg').show();
		$('html,body').css({
			'height':bodyHg,
			'overflow':'hidden'
		})
	})
	// 登录弹窗
	$('#jsLogin').click(function(){
		var html = ''
		html += '<div id="mask"></div>';
		html += '<div class="reg-box login-box js-login">';
		html += '<div class="reg-cont-box clearfix">';
		html += '<i class="reg-close icon"></i>';
		html += '<div class="left fl"><div class="img-box"><img src="images/reg.jpg" alt=""></div><a id="btnReg" class="login" href="javascript:;">注册</a></div>';
		html += '<div class="right fr">';
		html += '<div class="tip">登录会员<span>（个人/企业账号）</span></div>';
		html += '<ul class="ul-box">';
		html += '<li class="list"><input class="input fl" type="text" name="email" placeholder="邮箱/手机号码"></li>';
		html += '<li class="list"><input class="input fl" type="password" name="pwd" placeholder="请输入6-20位密码"></li>';
		html += '</ul>';
		html += '<a id="login" class="btn-reg" href="javascript:;">登录</a>';
		html += '<div class="text-box clearfix"><div class="check fl"><label for=""><input class="checkbox" type="checkbox" checked> 下次自动登录</label></div>                    <div class="pwd-text fr"><a href="javascript:;">忘记密码</a></div></div>';
		html += '<div class="line-tip"><img src="images/icon-login.jpg" width="346" alt=""></div>';
		html += '<div class="other-box"><a class="qq" href="#"></a><a class="wx" href="#"></a><a class="wb" href="#"></a><a class="db" href="#"></a></div>';
		html += '</div>';
		html += '</div>';
		html += '</div>';
		$('#alert-box').html(html);
		$('#mask,.js-login').show();
		$('html,body').css({
			'height':bodyHg,
			'overflow':'hidden'
		})
	})
	$(document).on('click','#reg',function(){
		var username = $('.reg-box').find('input[name="username"]').val(),
			tel = $('.reg-box').find('input[name="tel"]').val(),
			email = $('.reg-box').find('input[name="email"]').val(),
			pwd1 = $('.reg-box').find('input[name="pwd1"]').val(),
			pwd2 = $('.reg-box').find('input[name="pwd2"]').val();
		if(username == ''){
			layer.msg('请填写用户名');
			return false;
		}
		if(tel == ''){
			layer.msg('请填写电话');
			return false;
		}else if(!(/^1[3456789]\d{9}$/.test(tel))){
			layer.msg('请填写正确的电话');
			return false;
		}
		if(email == ''){
			layer.msg('请填写邮箱');
			return false;
		}else if(!(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(email))){
			layer.msg('请填写正确的邮箱');
			return false;
		}
		if(pwd1 == ''){
			layer.msg('请填写密码');
			return false;
		}else if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(pwd1))){
			layer.msg('密码由数字与字母组成（6-20位）');
			return false;
		}
		if(pwd1 != pwd2 ){
			layer.msg('两次填写的密码不一致，请重新输入');
			return false;
		}
	});
	// 登录
	$(document).on('click','#login',function(){
		var email = $('.login-box').find('input[name="email"]').val(),			
			pwd = $('.reg-box').find('input[name="pwd"]').val();
		if(email == ''){
			layer.msg('请填写邮箱或手机号码');
			return false;
		}
		if(pwd == ''){
			layer.msg('请填写密码');
			return false;
		}		
	});
	$(document).on('click','#btnReg',function(){
		$('#jsReg').trigger('click');
	});
	$(document).on('click','#btnLogin',function(){
		$('#jsLogin').trigger('click');
	});
	$("#alert-box").on("click",".reg-close",function(){
		$('#mask,.js-reg,.js-login').hide();
		$('html,body').css({
			'height':"auto",
			'overflow':'auto'
		})
	});


	//个人账号信息
	var editInfoDom = $("#editInfoDlg");//修改资料
	var accountDom = $("#accountDetailBtn");
	accountDom.on("click",".btn-edit",function(){
		//layer.msg("点击了修改资料");
		editInfoDom.show();
		$('html,body').css({
			'overflow':'hidden'
		})
	});
	accountDom.on("click",".btn-toggle",function(){
		var sel = $(this);
		if(sel.hasClass("show")){
			sel.removeClass("show");
			sel.html("打开详细资料");
			layer.msg("打开详细资料")
		}else {
			sel.addClass("show");
			sel.html("收起详细资料");
			layer.msg("收起详细资料")
		}
		$("#accountInfo").toggle(300);
	});

	//修改资料弹窗
	editInfoDom.on("click",".common_close,.btn_cancel",function(){
		editInfoDom.hide();
		$('html,body').css({
			'overflow':'initial'
		})
	});
	editInfoDom.on("click",".btn_sure",function(){
		var username = editInfoDom.find('input[name="username"]').val(),
			work = editInfoDom.find('input[name="work"]').val(),
			email = editInfoDom.find('input[name="email"]').val(),
			phone = editInfoDom.find('input[name="phone"]').val();
		if(username == ''){
			layer.msg('请填写用户名');
			return false;
		}
		if(work == ''){
			layer.msg('请填写职位');
			return false;
		}
		if(email == ''){
			layer.msg('请填写邮箱');
			return false;
		}
		if(phone == ''){
			layer.msg('请填写联系电话');
			return false;
		}

	});

	var bannerBox = $("#bannerBox");
	bannerBox.on("click",".list",function(){
		$(this).addClass("active").siblings().removeClass("active");
		console.log($(this).attr("data-placeholder"));
		$("#keyword").attr("placeholder",$(this).attr("data-placeholder"))
	});
	bannerBox.on("click",".hot_toggle",function(){
		layer.msg("点击了换一批")
	});

	var footBox = $("#footBox");
	var timer = null;
	footBox.on("mouseover",".link-box",function(){
		var $this = $(this);
		$this.find(".link-box-detail").css("z-index",100);

	});
	footBox.on("mouseleave",".link-box",function(){
		var $this = $(this);
		timer = setTimeout(function(){
			$this.find(".link-box-detail").css("z-index",-100);
		},200);
	});
	footBox.on("mouseout",".link-box-detail",function(){
		clearInterval(timer);
	});


});