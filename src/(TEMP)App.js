function initMap() {
	var directionsService = new google.maps.DirectionsService();
	var directionsRenderer = new google.maps.DirectionsRenderer();
	var haight = new google.maps.LatLng(37.7699298, -122.4469157);
	var oceanBeach = new google.maps.LatLng(
		37.7683909618184,
		-122.51089453697205
	);
	var mapOptions = {
		zoom: 14,
		center: haight,
	};
	var map = new google.maps.Map(document.getElementById('map'), mapOptions);
	directionsRenderer.setMap(map);
}

function calcRoute() {
	var selectedMode = document.getElementById('mode').value;
	var request = {
		origin: haight,
		destination: oceanBeach,
		// Note that JavaScript allows us to access the constant
		// using square brackets and a string value as its
		// "property."
		travelMode: google.maps.TravelMode[selectedMode],
	};
	directionsService.route(request, function (response, status) {
		if (status == 'OK') {
			directionsRenderer.setDirections(response);
		}
	});
}
