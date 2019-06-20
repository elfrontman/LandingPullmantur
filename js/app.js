$(document).foundation()

$('.slider ul').slick({
	infinite: true,
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

})