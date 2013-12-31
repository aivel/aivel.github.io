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

	// Change hash for page-reload - НАФИГА ЭТО?:) Но на SO так...
	$('.navigation-tabs a').on('shown.bs.tab', function (e) {
		window.location.hash = e.target.hash;
	})    
});