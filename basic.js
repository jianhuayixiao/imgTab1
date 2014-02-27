/**
 * $.direction
 * @extends jquery.1.9.0
 * @fileOverview 图片切换
 * @author jabriel
 * @version 1
 * @date 2014-2-25
 * 
 */
$(function(){
	
	$("#slide").direction({
		dire: "bottom"
	});
	
});

(function($){
	$.fn.direction = function( options ){
		var opts = $.extend({}, $.fn.direction.defaults, options);
		//direFn(opts.dire);
		return this.each(function(){
			var $this = $(this), w = $this.width(), h = $this.height();
			setInterval(function(){
				var $cur = $this.find(".cur");
				switch( opts.dire ){
					case "left":
						if(!$cur.is(":animated")){
							$cur.next().css({ left: w });
							$cur.animate({ left: -w }, opts.speed, function(){
								$(this).css({ left: 0 }).removeClass("cur").hide();
								$this.append( $(this) );
							});
							$cur.next().show().animate({ left: 0 }, opts.speed, function(){
								$(this).addClass("cur");
							});
						}
						break; 
					case "right": 
						if(!$cur.is(":animated")){
							$cur.next().css({ right: w });
							$cur.animate({ right: -w }, opts.speed, function(){
								$(this).css({ right: 0 }).removeClass("cur").hide();
								$this.append( $(this) );
							});
							$cur.next().show().animate({ right: 0 }, opts.speed, function(){
								$(this).addClass("cur");
							});
						}
						break; 
					case "top":
						if(!$cur.is(":animated")){
							$cur.next().css({ top: h });
							$cur.animate({ top: -h }, opts.speed, function(){
								$(this).css({ top: 0 }).removeClass("cur").hide();
								$this.append( $(this) );
							});
							$cur.next().show().animate({ top: 0 }, opts.speed, function(){
								$(this).addClass("cur");
							});
						}
						break; 
					case "bottom":
						if(!$cur.is(":animated")){
							$cur.next().css({ bottom: h });
							$cur.animate({ bottom: -h }, opts.speed, function(){
								$(this).css({ bottom: 0 }).removeClass("cur").hide();
								$this.append( $(this) );
							});
							$cur.next().show().animate({ bottom: 0 }, opts.speed, function(){
								$(this).addClass("cur");
							});
						}
						break;
					default:
					    alert("出错了");
				}
			}, 2000);
		});
		
	};
	//私有函数
	function direFn( arg ){
		console.log( arg );		
	}
	//默认属性	
	$.fn.direction.defaults = {
		dire: "left", //图片切换方向
		eventName: "click",    //事件名称
		speed: 500    //切换速度
	};
})(jQuery);





