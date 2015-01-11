$(document).ready(function(){
	$(".pagediv").hide();
	$(".default-nav-title").css("background-color","snow");
	$($(".default-nav-title").attr('href')).show();
	
	
	$(".nav-title").click(function(e){
		e.preventDefault();
		$(".nav-title").css("background-color","white");
		$(".pagediv").hide();
		$(this).css("background-color","snow");
		var showingDiv=$(this).attr('href');
		$(showingDiv).show();
	});
});