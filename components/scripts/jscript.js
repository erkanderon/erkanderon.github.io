
$(document).ready(function (){
	var $window = $(window)
    var $document = $(document)
	$(".portfol").click(function (){
		$('html, body').animate({
			scrollTop: $("#portfolio").offset().top
        }, 2000);
    });
    $(".resume").click(function (){
		$('html, body').animate({
			scrollTop: $("#resum").offset().top
        }, 2000);
    });
    $(".home").click(function (){
		$('html, body').animate({
			scrollTop: $("#home").offset().top
        }, 2000);
    });

    $window.on('scroll', function () {
    	console.log($window.scrollTop());
    if ($window.scrollTop() > 60) {
        $("#buttonTop").stop(true).animate({
            opacity: 1
        }, 250);

    }
     else {
        $("#buttonTop").stop(true).animate({
            opacity: 0
        }, 250);
    }

});
    $("#buttonTop").click(function (){
    	$('html, body').animate({
      	scrollTop: $("#home").offset().top
        }, 1000); 
    });
    
});
