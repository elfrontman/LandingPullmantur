$(document).foundation()

 window.addEventListener('load', decorateURL)

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
		decorateURL();
		
		var id = $('#iframeLoad');
		var attr = id.data('src');

		id.get(0).src = attr;

		dataLayer.push({'event':'ga-event','eventCategory':'informativa_crucero_graciastotales','eventAction':'call-me-back'})	

	})

	$('.callmeback-event').click(function(){
		var id = $('#iframeLoad');
		var attr = id.data('src');

		id.get(0).src = attr;
		
		dataLayer.push({'event':'ga-event','eventCategory':'informativa_crucero_graciastotales','eventAction':'call-me-back'})	
	})

	$('.clicktocall-event').click(function(){
		dataLayer.push({'event':'ga-event','eventCategory':'informativa_crucero_graciastotales','eventAction':'click-to-call'})	
	})

	$('.button-intinerario').click(function(event){
		event.preventDefault();

		$('#map-responsive').slideToggle();
	})

	$('#formModal').on('closed.zf.reveal', function(){
		$('#iframeLoad').get(0).src = '';
	})

})

function decorateURL(){
 	var gobj = window[window.GoogleAnalyticsObject];
    var url = 'https://pub.s7.exacttarget.com/eez30ixnuo1?web=TRA&idiom=es_ES';
    var traker, linker;

    console.log(gobj)
    if(gobj){
      traker = gobj.getAll()[0];
      linker = new window.gaplugins.Linker(traker);
      url = linker.decorate(url);
    }

    var urlDeco = "" + url + "";
    var iframeCMB = document.getElementById('iframeLoad');

    console.log(urlDeco)

    iframeCMB.setAttribute('data-src', urlDeco)
}
