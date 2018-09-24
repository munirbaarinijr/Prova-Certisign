$(document).ready(function(){
	$(function() {
	  "use strict";	
	  $('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				$('html, body').animate({
				  scrollTop: target.offset().top
				}, 1000);
				return false;
			  }
			}
		});
	});
	$('body').append('<div class="mask"></div>')
	$('.mask').fadeIn('slow',function(){
		$('#modal').addClass('bounce');
	});
	$('.close').on('click',function(){
	"use strict";
	$('#modal').removeClass('bounce');
		$('.mask').fadeOut('slow');
		$('.log input[type=text],.call input[type=text]').val('');
	});

	document.querySelector('#nav-toggle')
		.addEventListener('click',function() {
		this.classList.toggle('active');
	});
	$('#nav-toggle').on('click',showHidePanel);
	$('.mobile li a').on('click',function(){
		$('#nav-toggle').removeClass('active');
		showHidePanel();
	});
	function showHidePanel() {
		$('.panel').slideToggle();
	}
	$('.offer').hover(function(){
		$('button',this).fadeIn();
		}, function(){
		$('button',this).fadeOut();
	});
});



	

