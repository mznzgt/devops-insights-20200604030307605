function initMap(){
	var options = {
		zoom:8,
		center:{lat:-37.79051088638659,lng:175.23962919776307}
	}
	
	var map = new google.maps.Map(document.getElementById('map'), options);
	
	google.map.event.addListener(map, 'click', function(event){
		addMarker(event.latlng);
	});
	
	var marker = new google.map.Marker({
		map:map,
        icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
	});
	
	function addMarker(props){
		var marker = new google.maps.Marker({
			position:props.coords,
			map:map,
		});
	}
}