
(function () {
	var _speed=30;
	var _slide = $("#carousel_top");
	var _slideli1 = $(".carousel_in1");
	var _slideli2 = $(".carousel_in2");
	_slideli2.html(_slideli1.html());
	function Marquee(){
		// console.log(_slide.scrollLeft(), _slideli1.width())
		if(_slide.scrollLeft() >= _slideli1.width()){
			_slide.scrollLeft(0);
		}else{
			_slide.scrollLeft(_slide.scrollLeft()+1);
		}
	}
	$(function(){
		//两秒后调用
		var sliding=setInterval(Marquee,_speed)
		_slide.hover(function() {
			//鼠标移动DIV上停止
			clearInterval(sliding);
		},function(){
			//离开继续调用
			sliding=setInterval(Marquee,_speed);
		});
	});
})();

(function () {
	var _speed=20;
	var _slide = $("#carousel_bottom");
	var _slideli1 = $(".beauty_carousel_in1");
	var _slideli2 = $(".beauty_carousel_in2");
	_slideli2.html(_slideli1.html());
	function Marquee(){
		// console.log(_slide.scrollLeft(), _slideli1.width())
		if(_slide.scrollLeft() >= _slideli1.width()){
			_slide.scrollLeft(0);
		}else{
			_slide.scrollLeft(_slide.scrollLeft()+1);
		}
	}
	$(function(){
		//两秒后调用
		var sliding=setInterval(Marquee,_speed)
		_slide.hover(function() {
			//鼠标移动DIV上停止
			clearInterval(sliding);
		},function(){
			//离开继续调用
			sliding=setInterval(Marquee,_speed);
		});
	});
})();
