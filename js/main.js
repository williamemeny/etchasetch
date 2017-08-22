$(document).ready(function(){

	console.log('Code is at least running!');

	var numOfRows;

	numOfRows = 16;

	for (var i = numOfRows - 1; i >= 0; i--) {
		$('#grid_container').append('<div> Div ' + i + '</div>');
		console.log('Div created');
	}


});