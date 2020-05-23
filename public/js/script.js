$('main a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});

function showPress() {
    document.getElementById("pdrop").style.opacity = "1";
}

function hiddenPress() {
    document.getElementById("pdrop").style.opacity = "0";
}