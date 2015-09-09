$(document).ready(function(){
	$( "#datepicker" ).datepicker();
	$(".owl-carousel").owlCarousel({
		loop:true,
    	margin:0,
    	items:6,
    	mouseDrag : false,
    	dots:false,
    	nav:true
	});
});