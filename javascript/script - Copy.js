function mam(){
	var sli2 = $(".sli1").outerWidth();
	$('.sli1').css({'height': sli2 + 'px'});
	$('.sli1 a').css({'height': sli2 + 'px'});
}

function posit(){
	$(".sli").css({"position":"relative"});
/*
	var selectedItems = $('.sli1');
	for (var i = 0;i < total; i++) {
		alert(selectedItems[i]);
		var selectpos = selectedItems.position();
		console.log(i + ':' + selectpos.left);
	}
	*/
	var k=0;
	total = $(".sli1").length;
		$(".sli1").each(function(){
	if(k<total){
		ids = $(this).attr("id", "item_" + k);
		idsp = $(this).attr("id").replace("item_", "");
//		target = $(this).attr("class", "nitem_" + (k+1));
		console.log($(target).width());
		//var target = $('.item_' + idsp);
		//	var selectpos = selectedItems.position();
			var c = $(ids).position().left + $(target).position().left;
//			console.log(k + ':' + c.left);
			var d = $(this).outerWidth();
//			alert($(this).attr("class"));
//			target = d[k-1];
			$(this).css({"left": 	c});
//			$(this).css({"position":"absolute"});
	}k++;
		});
/*
	if(k<total){
		$(".sli1").each(function(){
			var boxHeight = $(".sli1").outerHeight();
//			alert(boxHeight);
			
			var c = $(this).position().left;
			var d = $(".sli1").outerWidth();
			var e = d;
//			alert(c);
			$(".sli1").css({"left":c});
			$(".sli1").css({"right":d});
			$(".sli1").css({"position":"absolute"});
		});
	}k++;
*/
}

function slid(){
	$('.mai1 li').each(function(i) {
		$(this).addClass('ma_' + [i]);
	});
	$('.mai1 li').click(function(){
		// var clicked_element = new Array;
		var clic = $(this).attr("data-category");
		var clicked_element = clic.split(" ");
			clicked_element_string = clicked_element.toString();
			$(".sli1").css({"display":"none"});
			
			var length = $(".sli1").length;
			var i=0;
			var fu = new Array;
			if(i<length){
				$(".sli1").each(function(){
					fu = $(this).attr("data-category");
					var output = fu.split(" ");
					console.log(clicked_element_string);
//					console.log(output);
//					alert(clicked_element_string);
					console.log(output);
					var j=0;
					if(j<output.length){
						var found = $.inArray(clicked_element_string, output) == -1
//						alert(output.length);
						if(!(found)){
							$(this).fadeIn(500);
							$(this).css({"display": "block"});
						}
					}j++;
				});
			}i++;
			
		});
	};
$(document).ready(function(){
	mam();
	slid();
	posit();
});