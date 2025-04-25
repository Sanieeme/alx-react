import $ from 'jquery';
import _ from 'lodash';

$(document).ready(function () {
	let count = 0;

	function updateCounter() {
		count++;
		$('#count').text(`{count} clicks on the button`);
	}
	const $par1 = $('<p></p>').text('ALX Dashboard');
	const $par2 = $('<p></p>').text('Dashboard data for the students');
	const $button = $('<button></button>').text('Click here to get started');
	const $par3 = $('<p id="count"></p>');
	const $par4 = $('<p></p>').text('Copyright - ALX');

	$('body').append($par1, $par2, $button, $par3, $par4);
	const debouncer = _.debounce(updateCounter, 300);
	button.on('click', debouncer);
});
