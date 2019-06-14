$(document).foundation()

$('.slider ul').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	prevArrow: '#prevArrow',
	nextArrow: '#nextArrow',
	dots: true
});