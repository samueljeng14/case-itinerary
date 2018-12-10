$(document).ready(function() {
	var dddown = false;
	$(document).scroll(function () {
		
		// console.log($(document).scrollTop());

		if (!dddown) {
			WScroll = $(document).scrollTop();
			DHeight = $(document).height();
			VHeight = $(window).height();
			Deep = DHeight - VHeight - WScroll;
			if (Deep <= 50) {
				$(".keyreply-launcher").click();
				dddown = true;
			}
		}

		if ($(document).width() >= 480) {
			if ($(document).scrollTop() > 720) {
				$(".change-color").css('color', '#1A1A1A');
			}else{
				$(".change-color").css('color', 'white');
			}		
		}else{
			if ($(document).scrollTop() > 550) {
				$(".change-color").css('color', '#1A1A1A');
			}else{
				$(".change-color").css('color', 'white');
			}		
		}


	});

	$(window).on('load', function () {
		$("html , body").css('overflow', 'visible');
		$(".loading").css('opacity', '0');
		$(".sk-cube-grid").css('opacity', '0');
		setTimeout(function(){
			$(".loading").css('display', 'none');			
		}, 3200);
	});
});