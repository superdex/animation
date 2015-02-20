$(document).click(function() {
// not yet
// drawMonster();

});


$("#monster").click(function(){
	$("#monster").effect("shake");
});





var drawMonster = function(){
	var canvas = document.getElementById('mcanvas'),
	    context = canvas.getContext('2d');	
	var image = new Image();
	image.src = "images/monster.png";
	

	var spriteWidth  = 50,
	    spriteHeight = 70,
	    pixelsLeft   = 170,
	    pixelsTop    = 10;

	context.drawImage(image,
	    pixelsLeft,
	    pixelsTop,
	    spriteWidth,
	    spriteHeight
	);
}