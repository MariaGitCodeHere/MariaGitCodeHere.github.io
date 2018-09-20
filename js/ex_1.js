$(document).ready(function(){
	setTimeout(function(){
		$('.html').toggleClass('start');
		$(this).toggleClass('start');
		$('.main').toggleClass('start');
		$('.ava').toggleClass('start');
		$('.footer').toggleClass('start');
		$('.section-about').toggleClass('start');
	}, 500);
		
	$('#nav').click(function(){
		$(this).toggleClass('open');
		$('#nav-container').toggleClass('open');
	});
	$('.flip-container').hover(function(){
		$('.first-name').toggleClass('ninja');
		$('.second-name').toggleClass('ninja');
		$('.html').toggleClass('ninja');
		$('.ava.start').toggleClass('ninja');
		$('.information').toggleClass('ninja');
		$('.box').toggleClass('ninja');
		$('.about-ninja').toggleClass('ninja');
	});
	$('.box').hover(function(){
		$(this).toggleClass('opened');
	});
	$('.information__introduction').hover(function(){
		$('.information__introduction_visible').toggleClass('opened');
	});
	$('.information__education').hover(function(){
		$('.information__education_visible').toggleClass('opened');
	});
	$('.information__jobs').hover(function(){
		$('.information__jobs_visible').toggleClass('opened');
	});
	$('.information__skills').hover(function(){
		$('.information__skills_visible').toggleClass('opened');
	});
	$('.information__contacts').hover(function(){
		$('.information__contacts_visible').toggleClass('opened');
	});
});


