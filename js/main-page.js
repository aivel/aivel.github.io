
var mainPageSlider = null;


$(document).ready(function(e) {
	mainPageSlider = $('.slider-main-page').anythingSlider({
		buildStartStop : false,
		buildNavigation : false,
		buildArrows : false,
		autoPlay : false,
		autoPlayLocked : false,
		delay : 2500,
		onSlideComplete: function(slider) {
			if (lastClickedBtnNum != -1) {
				onClick(prevClickedBtn, lastClickedBtnNum);
				lastClickedBtnNum = -1;
			} 
		}
	});
	InitControls();      
});

var prevClickedBtn;
var lastClickedBtnNum = -1;

function InitControls() {
	mainPageSlider.anythingSlider(1);
	var mainPageBtn = $("#main-page-btn");
	prevClickedBtn = mainPageBtn;
	var newsPageBtn = $("#news-page-btn");
	var btnArray = [];
	btnArray[0] = mainPageBtn;
	btnArray[1] = newsPageBtn;
	for (var i = 0; i < btnArray.length; i++) {
		var cur = btnArray[i];
		cur.click(GetOnClickFunction(i + 1));
	}
}

function GetOnClickFunction(pageNumber) {
	return function() {
		var $this = $(this);
		onClick($this, pageNumber);
	}
}

function onClick(clicked, pageNumber) {
	prevClickedBtn.parent().removeClass("active");
	prevClickedBtn = clicked;
	clicked.parent().addClass("active");
	lastClickedBtnNum = pageNumber;
	mainPageSlider.anythingSlider(pageNumber);
}

