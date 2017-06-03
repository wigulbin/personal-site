$(document).ready(function() {
	$('#fullpage').fullpage();

	$(window).resize(function(){
		console.log(document.documentElement.clientWidth);
		console.log(document.documentElement.innerWidth);
	})
});
