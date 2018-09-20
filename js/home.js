$(document).ready(function(){
	$('#nav').click(function(){
		$(this).toggleClass('open');
		$('#nav-container').toggleClass('open');
	});
	$('.flip-container').hover(function(){
		$('.first-name').toggleClass('ninja');
		$('.second-name').toggleClass('ninja');
	});
	$('.contacts').click(function(){
		$('.contact-information').toggleClass('show-information');
		/*css('visibility', 'visible');*/
	});
});