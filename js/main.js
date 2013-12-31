$(document).ready(function(e) {
	var url = document.location.toString();
	if (url.match('#')) {
		$('.navigation-tabs a[href=#'+url.split('#')[1]+']').tab('show') ;
	} 

	// Change hash for page-reload - НАФИГА ЭТО?:) Но на SO так...
	$('.navigation-tabs a').on('shown.bs.tab', function (e) {
		window.location.hash = e.target.hash;
	})    
});