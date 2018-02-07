var allImages = [
	'https://static.pexels.com/photos/20787/pexels-photo.jpg',
	'https://metrouk2.files.wordpress.com/2013/09/ay_118757664.jpg',
	'http://i.telegraph.co.uk/multimedia/archive/03574/cats-10_3574550k.jpg'
];

var currentSlide = 1;

var fadeDuration = 1000;

var start = function(){
	var markup = "";
	for(var i = 0; i < allImages.length; i++){
		var imgURL = allImages[i];
		//markup = markup + "<img src='" + imgURL + "'>";
		markup = markup + "<div class='slide' style='background-image: url(" + imgURL + ");'></div>";
	}
	$("#ssContainer").html(markup);
	
	var markup1 = "";
	for(var i = 0; i < allImages.length; i++){
		markup1 = markup1 + '<button onclick="goToSlide(' + (i + 1) + ',fadeDuration)">' + (i + 1) + "</button>";
	}
	$("#numContainer").html(markup1);
	
	goToSlideInit(1, 0);
}

var goToSlideInit = function(n, d){
	d = d || 0;
	$("#ssContainer img").fadeOut(0);
	$("#ssContainer img:nth-of-type(" + n + ")").stop().fadeIn(0);
	
	$("#numContainer button").removeClass("active");
	$("#numContainer button:nth-of-type(" + n + ")").addClass("active");
	
	currentSlide = n;
}

var goToSlide = function(n, d){
	d = d || 0;
	$("#ssContainer .slide").fadeOut(fadeDuration);
	$("#ssContainer .slide:nth-of-type(" + n + ")").stop().fadeIn(fadeDuration);
	
	$("#numContainer button").removeClass("active");
	$("#numContainer button:nth-of-type(" + n + ")").addClass("active");
	
	currentSlide = n;
}

var goPrev = function(){
	var n = currentSlide - 1;
	if (n < 1){
		n = 1;
	}
	goToSlide(n, fadeDuration);
}

var goNext = function(){
	var n = currentSlide + 1;
	if (n > allImages.length){
		n = 1;
	}
	goToSlide(n, fadeDuration);
}