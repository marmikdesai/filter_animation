function mam(){
	var sli2 = $(".sli1").outerWidth();
	$('.sli1').css({'height': sli2 + 'px'});
	$('.sli1 a').css({'height': sli2 + 'px'});
}
/*
function posit(){
	$(".sli").css({"position":"relative"});
	var k=0;
	total = $(".sli1").length;
	if(k<total){
		$(".sli1").each(function(){
			var boxHeight = $(".sli1").outerHeight();
//			alert(boxHeight);
			var c = boxHeight + 10;
			alert(c);
			$(".sli1").css({"top":c});
			$(".sli1").css({"position":"absolute"});
		});
	}k++;
}
*/
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
//	posit();
});