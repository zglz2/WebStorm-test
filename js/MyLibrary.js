// JavaScript Document
	//固定宽度，缩放间距函数	
	var hora = function(){
		
		$(".hora").each(function(index, element) {
		
	var wcw = 0;	
	
	$(this).children().each(function(index, element) {
		wcw +=$(this).outerWidth();
		
        wcl = $(this).length;
    });
	wcl =$(this).children().length;
	//alert("子元素的各数是："+wcl);
	
	//alert("子元素的长度是："+wcw);
		
		/*剩余宽度*/
	var zcw = $(this).width()- wcw;
		//alert("剩余元素的长度是："+zcw);
		
	var marginright = zcw/(wcl-1)-1;
		//alert("右边距："+marginright);
		
	$(this).children().css({"float":"left","margin-right":marginright});
	$(this).children().last().css({"float":"left","margin-right":0});
		});
		}
	//（垂直）居中函数
	var hw = function(){
		$(".vc").each(function(index, element) {
        var hw = $(this).parent().height()/2;
		//子元素的外部高度/2
		var hi = $(this).outerHeight()/2;		
		$(this).css({"margin-top":hw-hi});
		$(this).parent().css("overflow",'auto')
    });
	}
	
	//固定间距，缩放宽度函数	（增加任意多个子元素）;
	
	var suo = function(){
		
		$(".suo").each(function(index, element) {
	//
	$(this).children().css({"float":"left"});
	//设置最后一个子元素的margin-right = 0
	$(this).children().last().css({"margin-right":0});
	//子元素总margin
	var wcw = 0;	
	$(this).children().each(function(index, element) {
		wcw +=parseFloat($(this).css("margin-right"));
    });
	//剩余宽度
	var zcw = $(this).innerWidth()- wcw;
	$(this).children().outerWidth(zcw/$(this).children().length);
	
	
	
	
	
	/*var wcw = 0;	
	
	$(this).children().each(function(index, element) {
		wcw +=$(this).outerWidth();
		
        wcl = $(this).length;
    });
	wcl =$(this).children().length;
	//alert("子元素的各数是："+wcl);
	
	//alert("子元素的长度是："+wcw);
		
		//剩余宽度
	var zcw = $(this).width()- wcw;
		//alert("剩余元素的长度是："+zcw);
		
	var marginright = zcw/(wcl-1)-1;
		//alert("右边距："+marginright);
		*/

		});
		}
		
		
//执行函数代码
$(function(){

	//加载页面成功运行水平均匀分布函数	
    window.hora();

	//加载页面成功动态缩放函数
    window.suo();

	//加载页面成功运行垂直居中函数
    window.hw();


	//缩放浏览器运行水平均匀分布函数
    $(window).resize(hora);

	//缩放浏览器运行水平均匀分布函数
    $(window).resize(suo);
});

