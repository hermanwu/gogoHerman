$(document).ready(function(){
	$("#content").fadeIn(1000);
	var pathName = document.location.pathname;
	var pageName = pathName.substring(1, this.length);
	pageName = pageName.split(".")[0];
	$("a[href="+pageName+"\\.html]").css("color","white");
	
	//$(hrefString).css("color","white");
	//$('a[href="'+ pageName +'"]').css("color","white");
	//
	/*
	var lastVisitPage = localStorage.getItem("lastVisitPage");
	if(lastVisitPage === null){
		$(".default-nav-title").css("color","white");
		$($(".default-nav-title").attr('href')).show();
	}
	else{
		$("a[href="+ lastVisitPage +"]").css("color","white");
		$(lastVisitPage).show();
	}
		
	
	$(".nav-title").click(function(e){
		e.preventDefault();
		var showingDiv=$(this).attr('href');
		$(".nav-title").css("color","lightgray");
		$(".pagediv").hide();
		$(this).css("color","white");
		if($(this).attr('href')=="#life"){
			$("body").css("background-color","Azure");
		}
		else{
			$("body").css("background-color","white");
		};
		//$(showingDiv).show();
		$(showingDiv).fadeIn(1000);
		localStorage.setItem("lastVisitPage", showingDiv);
	});
	
	$("#openModal").click(function(e){
		alert("test");
		$("#imageModal").show();
		
	});
	*/
});