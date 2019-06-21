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

// function initMap() {
// 	var geocoder = new google.maps.Geocoder();
// 	geocodeAddress(geocoder);
// }

// function geocodeAddress(geocoder) {

// 	if(navigator.geolocation){
// 		navigator.geolocation.getCurrentPosition(function(position){
// 			console.log(position)
// 			geocoder.geocode({'location': {lat:position.coords.latitude, lng:position.coords.longitude}}, function(results, status) {
// 		if (status === 'OK') {
// 			results[0].address_components.map(function(item, i){
// 				if(item.types.indexOf('country') > -1){
// 					console.log(item.long_name)
// 				} 
// 			})
// 		} else {
// 			alert('Geocode was not successful for the following reason: ' + status);
// 		}
// 	});
// 		});
// 	}
// }

