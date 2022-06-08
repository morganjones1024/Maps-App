let map;

let contentString = '<h2>' + city + ', ' + state + '</h2>';

function initMap() {

	let image = {
		url: "/hello-kitty-png-icon-16782.png",
		scaledSize: new google.maps.Size(50, 50)
	};

	map = new google.maps.Map(document.getElementById('map'), {
		center: coords,
		zoom: 10,
		scrollwheel: false
	});

	let marker = new google.maps.Marker({
		position: coords,
		map: map,
		icon: image,
		animation: google.maps.Animation.BOUNCE
	});	

	let infowindow = new google.maps.InfoWindow({
		content: contentString
	});

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map, marker);
	});
}