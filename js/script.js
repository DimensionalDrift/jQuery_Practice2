$(document).ready(function() {
 $('button').mouseenter(function(){
		$(this).removeClass("makeRed").addClass("makeBorder");
	});

	$('button').mouseleave(function(){
		$(this).removeClass("makeBorder").addClass("makeRed");
	});

	$('#button1').click(function(){
		$('#para1').hide('slow').show('slow')
	});

	$('#button2').click(function(){
		$('#para2').fadeOut('slow').fadeIn('slow')
	});
	
}); 
