$(document).ready(function(){
	$(".pagediv").hide();
	$(".default-nav-title").css("color","#E8E8E8");
	$($(".default-nav-title").attr('href')).show();
	
	
	$(".nav-title").click(function(e){
		e.preventDefault();
		$(".nav-title").css("color","white");
		$(".pagediv").hide();
		$(this).css("color","#E8E8E8");
		var showingDiv=$(this).attr('href');
		$(showingDiv).show();
	});
});