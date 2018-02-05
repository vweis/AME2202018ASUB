var allImages = [
	'https://www.viewbug.com/blog/cats-being-cats-photo-contest-finalists',
	'https://static.pexels.com/photos/20787/pexels-photo.jpg',
	'http://metrouk2.files.wordpress.com/2013/09/ay_118757664.jpg',
	'http://i.telegraph.co.uk/multimedia/archive/03574/cats-10_3574550k.jpg'
];

var currentSlide =1;

var start = function(){
	var markup = "";
	for(var i = 0; i < allImages.length; i++){
		var imgURL = allImages[i];
		markup = markup + "<img src='" + imgURL + "'>";
	}
	$("#ssContainer").html(markup);
	goToSlide(1, 0);
}


var goToSlide = function(n, d){
	d = d || 0;
	("#ssContainer img").fadeOut(1000);
	("#ssContainer img:nth-of-type(" + n + ")").stop().fadeIn(d);
	currentSlide = n;
}

var goPrev = function(){
	
}

var goNext = function(){
	var n = currentSlide = n + 1;
	goToSlide(n, 100);
}