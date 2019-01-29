$(document).ready(function(){
    var document = $("#modelCompareBox");
    document.on('click',".brand_left .numA-Z a", function(event) {
        event.preventDefault();
        var $self = $(this)
          , navT = $self.text()
          , $list = $self.closest('.brand_left').find('.brand_list');
        $self.addClass('active').siblings().removeClass('active');
        $list.animate({
            scrollTop: $list.find('.name:contains(' + navT + ')').prop('offsetTop')
        }, 'fast');
    });
    document.on('click','.brand_list li', function(event) {
        event.preventDefault();
        var $self = $(this)
          , $downList = $self.next('.a1');
        $downList.length > 0 ? $downList.slideToggle('fast') : false;
    });


    document.on("click",".PicOne",function(){
        var _this = $(this);
        _this.parent().next().find(".picSliderOne").show();
    });
    document.on("click",".PicTwo",function(){
        var _this = $(this);
        _this.parent().next().find(".picSliderTwo").show();
    });


    document.on("click",".picSliderOne .brand_list .pic-item",function(){
        var _this = $(this);
        var picSliderOne = _this.parents(".picSliderOne");
        picSliderOne.parent(".brand_left").prev().find(".PicOne").html($(this).html());
        picSliderOne.hide();
        picSliderOne.next(".picSliderTwo").show();
    })
    document.on("click",".picSliderTwo .brand_list .pic-item",function(){
        var _this = $(this);
        var picSliderTwo = _this.parents(".picSliderTwo");
        picSliderTwo.parent(".brand_left").prev().find(".PicTwo").html($(this).html());
        picSliderTwo.hide();
        picSliderTwo.prev(".picSliderOne").hide();
    })
});
