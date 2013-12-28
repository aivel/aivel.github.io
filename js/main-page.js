
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
			busy = false;
			if (changed) {
				onClick(whileBusyClicked, lastClickedBtnNum);	
				changed = false;
			}
		}
	});
	InitControls();      
});

var prevClickedBtn;
var lastClickedBtnNum = -1;
var busy = false;
var changed = false;

var whileBusyClicked;

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
	if (GetId(clicked) == GetId(prevClickedBtn)) {
			return;
	}
	prevClickedBtn.parent().removeClass("active");
	clicked.parent().addClass("active");
	lastClickedBtnNum = pageNumber;
	if (busy) {
		whileBusyClicked = clicked;
		changed = true;
		return;
	}
	prevClickedBtn = clicked;
	busy = true;
	console.log("click");
	mainPageSlider.anythingSlider(pageNumber);
}

function GetId(elem) {
	return $(elem).attr('id');
}

