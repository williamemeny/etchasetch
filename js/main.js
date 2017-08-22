$(document).ready(function(){

	var numOfRows;
	var gridDivWidth;

	numOfRows = 20;

	gridDivWidth = 598  / numOfRows;

	for (var j = numOfRows - 1; j >= 0; j--) {
	

		for (var i = numOfRows - 1; i >= 0; i--) {
			$('#grid_container').append('<div class = "gridDiv"></div>');
			console.log('Div created');

		}

	}

	$('.gridDiv').css('width', gridDivWidth + 'px');
	$('.gridDiv').css('height', gridDivWidth + 'px');

	$('.gridDiv').mouseenter(function(){
		$(this).css('background-color', 'black');
	});

});