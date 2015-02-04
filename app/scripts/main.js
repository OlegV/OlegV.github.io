'use strict';
function showContacts(){
	$('body').animate({ scrollTop: $(document).height() }, 'slow');
  	return false;
}

function animateSkills(skillsRows){
	var timeout = 200;
	skillsRows.each(function(){
		var row = $(this);
		setTimeout(function(){
			row.addClass('expandUp');	
		}, timeout);
		timeout += 200;
	});
	
}

function resizeHeader(window) {
	var head = $('.head');
	var container = head.find('.container');
	
	var originalHeight = head.css('min-height');
	var originalPaddingTop = head.css('padding-top');
	
	var paddingTop = (window.height() - container.height())/2;
	
	head.css({
		'min-height': window.height(),
		'padding-top': paddingTop
	});

	window.on('scroll.header', function() {
		if (window.scrollTop() > window.height()*0.05) {
			head.css({
				'min-height': originalHeight,
		 		'padding-top': originalPaddingTop
			});
			animateSkills($('.skills .row'));
			window.off('.header');
		}
	});
}



function init() {
	resizeHeader($(window));

	$('.fancybox').fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
	
}

$(document).ready(init);