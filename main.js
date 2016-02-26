'use strict'

$(document).ready(init);

var name;
var number;
var everyone = {};
function init() {

$('#container').on('click', '.cup', clickCup);
$('#addCup').on('click', addCups);
$('#container').on('click', clickHolder);
$('#container').on('click', setValue);
$('#container').on('dblclick', '.cup', dblClickCup);
$('#numCups').on('submit', addCups);
$("#numCups").keypress(function (e) {
  if (e.keyCode === 0 || e.keyCode === 13) {
    e.preventDefault()
    addCups();
  }
});

}

function clickHolder(event) {
	if($('.cup').hasClass('selected')){
		$('.selected').appendTo(event.target);
		$('.selected').removeClass('selected');
		
	}
}

function setValue(event) {
	var peepsinGroup = [];
	$(event.target).children('div').each(function() {
  			peepsinGroup.push($(this).text());
});
		var values = 0;
		for (var i = 0; i < peepsinGroup.length; i++) {
			
			values += parseInt(everyone[peepsinGroup[i]]);
			
			$(event.target).find('span').text(values);
			
	}
}

function addCups() {
	number = $('#numCups').val();
	name = $("#nameField").val();
	var numCups = $('#numCups').val();
		number.toString();
		var $cup = $('<div>').addClass("cup");
		
		everyone[name] = number;
		console.log(everyone);
		$cup.text(name);
		

	$("#group1").append($cup);

	$('#numCups').val('');
	$("#nameField").val('');	
	
}

function clickCup(event) {
	event.stopPropagation();
	var $this = $(this);

	var wasSelected = $this.hasClass('selected');

	$('.cup').removeClass('selected');

	if(!wasSelected) {
		$this.addClass('selected');
	}

}

function dblClickCup(event) {
	var objKey = $(this).text();
	delete everyone[objKey];
	$(this).remove();

}

function randomColor() {
	return "#" + ((1 << 24) * Math.random() | 0).toString(16);
}