$(document).foundation()

$('.slider ul').slick({
	infinite: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	prevArrow: '#prevArrow',
	nextArrow: '#nextArrow',
	dots: true,
	responsive: [
	{
		breakpoint: 1000,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 680,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}
	]
});

$(document).ready(function(){
	$('.button-phone').click(function(){
		$('#drop-phone').toggle();
	})

	$('.newslater-event').click(function(){
		dataLayer.push({'event':'ga-event','eventCategory':'informativa_crucero_graciastotales','eventAction':'call-me-back'})	
	})

	$('.callmeback-event').click(function(){
		dataLayer.push({'event':'ga-event','eventCategory':'informativa_crucero_graciastotales','eventAction':'call-me-back'})	
	})

	$('.clicktocall-event').click(function(){
		dataLayer.push({'event':'ga-event','eventCategory':'informativa_crucero_graciastotales','eventAction':'click-to-call'})	
	})

	$('.button-intinerario').click(function(event){
		event.preventDefault();

		$('#map-responsive').slideToggle();
	})

})
