$(document).ready(function() {
 $('#button1').mouseenter(function(){
		$(this).removeClass("makeRed").addClass("makeBorder");
	});

	$('#button1').mouseleave(function(){
		$(this).removeClass("makeBorder").addClass("makeRed");
	});

	$('#button1').click(function(){
		$('#para1').slideToggle()
	});

}); 
