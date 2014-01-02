var isMobile = false;

$(document).ready(function(e) {
	var url = document.location.toString();
	if (url.match('#')) {
		var t = $('.navigation-tabs a[href=#'+url.split('#')[1]+']').tab('show');
	}

	var tag = url.split('#');
	if (tag.length <= 1)
		tag = '';
	else
		tag = '#' + tag;

	var ref = url.split('/').pop();

	$('.navbar ul li a[href="' + ref + tag + '"]').parent().addClass('active');

	// нужно чтобы менять адрес в адресной строке по открытию таба
	$('.navigation-tabs a').on('shown.bs.tab', function (e) {
		window.location.hash = e.target.hash;
		window.scrollTo(0, 0);
	})   
	
	isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); 
	
	if (!isMobile) {
		$('.navbar .dropdown').hover(
			function() {
				$(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
			}, function() {
			  $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp()
			}
		);
	}
 
});