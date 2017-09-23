// adapted from http://codepen.io/prather-mcs/pen/KpjbNN
// and from https://classroom.udacity.com/nanodegrees/nd001/parts/00113454014/modules/4fd8d440-9428-4de7-93c0-4dca17a36700/lessons/8304370457/concepts/83061122970923#
// and from https://github.com/juancarlucci/map

var self = this;
var map = self.googleMap;
var allFSTips;
var errorSVG = document.getElementById("errorDiv");

// Ideally shold move to a different file
var locationData = [{
	locName: 'NB Steak', 
	latLng: {
		lat: -30.0283955,
		lng: -51.17107970000001
	},
	information: "Some information about NB Steak",
	id: 'ChIJeXtUG4V3GZURZ4NazeQPQ_g',
	FourSquare_id: '4b683a66f964a520fd6c2be3'
},
{
	locName: 'Atelier de Massas',
	latLng: {
		lat: -30.0314468,
		lng: -51.22665
	},
	information: "Some information about Atelier",
	id: 'ChIJbTHG4wV5GZURp3_NBEuUYKY',
	FourSquare_id: '4b75a4fbf964a52098192ee3'
},
{
	locName: 'Koh Pee Pee',
	latLng: {
		lat: -30.0308871,
		lng: -51.2017835
	},
	information: "Some information about KPP",
	id: 'ChIJeUOnR7V5GZURXkeockEiS1Q',
	FourSquare_id: '4b5f7892f964a5204abc29e3'
},
{
	locName: 'Churrascaria Barranco',
	latLng: {
		lat: -30.04059609999999,
		lng: -51.19226369999999
	},
	information: "Some information about Barranco",
	id: 'ChIJy3F0ATt4GZURfxLUzlIx0pA',
	FourSquare_id: '4b2584c5f964a520397324e3'
},
{
	locName: 'Sambô Sushi',
	latLng: {
		lat: -30.0338383,
		lng: -51.2108202
	},
	information: "Some information about Sushi",
	id: 'ChIJfdrHX615GZURvajNtKeLddk',
	FourSquare_id: '5285065c498e6f29ac03d7b0'
},
{
	locName: 'Nono Ludovico',
	latLng: {
		lat: -30.0386714,
		lng: -51.18869189999999
	},
	information: "Some information about Nono Ludovico",
	id: 'ChIJjdgSPSV4GZUR-a30apXZsQg',
	FourSquare_id: '4b7b2448f964a520e9532fe3'
}];
	
var styles = [
	{
	"elementType": "geometry",
	"stylers": [
	  {
	    "color": "#ebe3cd"
	  }
	]
	},
	{
	"elementType": "labels.text.fill",
	"stylers": [
	  {
	    "color": "#523735"
	  }
	]
	},
	{
	"elementType": "labels.text.stroke",
	"stylers": [
	  {
	    "color": "#f5f1e6"
	  }
	]
	},
	{
	"featureType": "administrative",
	"elementType": "geometry.stroke",
	"stylers": [
	  {
	    "color": "#c9b2a6"
	  }
	]
	},
	{
	"featureType": "administrative.land_parcel",
	"elementType": "geometry.stroke",
	"stylers": [
	  {
	    "color": "#dcd2be"
	  }
	]
	},
	{
	"featureType": "administrative.land_parcel",
	"elementType": "labels.text.fill",
	"stylers": [
	  {
	    "color": "#ae9e90"
	  }
	]
	},
	{
	"featureType": "landscape.natural",
	"elementType": "geometry",
	"stylers": [
	  {
	    "color": "#dfd2ae"
	  }
	]
	},
	{
	"featureType": "poi",
	"elementType": "geometry",
	"stylers": [
	  {
	    "color": "#dfd2ae"
	  }
	]
	},
	{
	"featureType": "poi",
	"elementType": "labels.text.fill",
	"stylers": [
	  {
	    "color": "#93817c"
	  }
	]
	},
	{
	"featureType": "poi.park",
	"elementType": "geometry.fill",
	"stylers": [
	  {
	    "color": "#a5b076"
	  }
	]
	},
	{
	"featureType": "poi.park",
	"elementType": "labels.text.fill",
	"stylers": [
	  {
	    "color": "#447530"
	  }
	]
	},
	{
	"featureType": "road",
	"elementType": "geometry",
	"stylers": [
	  {
	    "color": "#f5f1e6"
	  }
	]
	},
	{
	"featureType": "road.arterial",
	"elementType": "geometry",
	"stylers": [
	  {
	    "color": "#fdfcf8"
	  }
	]
	},
	{
	"featureType": "road.highway",
	"elementType": "geometry",
	"stylers": [
	  {
	    "color": "#f8c967"
	  }
	]
	},
	{
	"featureType": "road.highway",
	"elementType": "geometry.stroke",
	"stylers": [
	  {
	    "color": "#e9bc62"
	  }
	]
	},
	{
	"featureType": "road.highway.controlled_access",
	"elementType": "geometry",
	"stylers": [
	  {
	    "color": "#e98d58"
	  }
	]
	},
	{
	"featureType": "road.highway.controlled_access",
	"elementType": "geometry.stroke",
	"stylers": [
	  {
	    "color": "#db8555"
	  }
	]
	},
	{
	"featureType": "road.local",
	"elementType": "labels.text.fill",
	"stylers": [
	  {
	    "color": "#806b63"
	  }
	]
	},
	{
	"featureType": "transit.line",
	"elementType": "geometry",
	"stylers": [
	  {
	    "color": "#dfd2ae"
	  }
	]
	},
	{
	"featureType": "transit.line",
	"elementType": "labels.text.fill",
	"stylers": [
	  {
	    "color": "#8f7d77"
	  }
	]
	},
	{
	"featureType": "transit.line",
	"elementType": "labels.text.stroke",
	"stylers": [
	  {
	    "color": "#ebe3cd"
	  }
	]
	},
	{
	"featureType": "transit.station",
	"elementType": "geometry",
	"stylers": [
	  {
	    "color": "#dfd2ae"
	  }
	]
	},
	{
	"featureType": "water",
	"elementType": "geometry.fill",
	"stylers": [
	  {
	    "color": "#b9d3c2"
	  }
	]
	},
	{
	"featureType": "water",
	"elementType": "labels.text.fill",
	"stylers": [
	  {
	    "color": "#92998d"
	  }
	]
	}
	];

var KoViewModel = function() {
	var self = this;
	listViewClick = function(marker, infowindow) {
		var fsid = [];
		map.setZoom(15);
		map.panTo(this.latLng);
		google.maps.event.trigger(this.marker, 'click');
	}; //end listViewClick
	var largeInfowindow = new google.maps.InfoWindow();
	// Build "Place" objects out of raw place data. It is common to receive place
	// data from an API like FourSquare. Place objects are defined by a custom
	// constructor function you write, which takes what you need from the original
	// data and also lets you add on anything else you need for your app, not
	// limited by the original data.
	self.allPlaces = [];
	locationData.forEach(function(place) {
		self.allPlaces.push(new Place(place));
	});
	// Style the markers a bit. This will be our listing marker icon.
	var defaultIcon = {
		url: 'images/food-icon-1.png',
		scaledSize: new google.maps.Size(30, 30)
	};
	// Create a "highlighted location" marker color for when the user
	// mouses over the marker.
	var highlightedIcon = {
		url: 'images/food-icon-2.png',
		scaledSize: new google.maps.Size(30, 30)
	};
	// Build Markers via the Maps API and place them on the map
	self.allPlaces.forEach(function(place) {
		var markerOptions = {
			map: map,
			position: place.latLng,
			lat: place.latLng.lat,
			lng: place.latLng.lng,
			animation: google.maps.Animation.DROP,
			icon: defaultIcon,
			title: place.locName,
			placeId: place.placeId,
			FourSquare_id: place.FourSquare_id
		};
		place.marker = new google.maps.Marker(markerOptions);
		// Add "click" listeners.
		place.marker.addListener('click', function() {
			getPlacesDetails(this, largeInfowindow);
			locLat = this.lat;
			locLng = this.lng;
			le_title = this.title;
			fsid = this.FourSquare_id;
			self.allFSTitles(this.title + " Foursquare Tips");
			self.allFSTips([]);
			var completeFSUrl = "https://api.foursquare.com/v2/venues/" + fsid + "/tips?sort=recent&limit=5&oauth_token=OZQRN2EXMDGLYZ34JR33C5IRZTO54R3CEJWNUPKUY2EPFZYA&v=20170921";
			$.ajax({
				url: completeFSUrl,
				dataType: "jsonp",
				jsonp: "callback",
				success: function(data) {
					var articleList = data.response.tips.items;
					articleList.forEach(function(article) {
						self.allFSTips.push(article);
					});
				}, //end success function
				error: function(response) {
					console.log("API didn't load");
					alert("FourSquare didn't load");

				}
			}); //end AJAX call
		}); //end place.marker.addListener
		// Two event listeners - one for mouseover, one for mouseout,
		// to change the colors back and forth.
		place.marker.addListener('mouseover', function() {
			this.setIcon(highlightedIcon);
		});
		place.marker.addListener('mouseout', function() {
			this.setIcon(defaultIcon);
		});
	}); // end self.allPlaces.forEach
	// This array will contain what its name implies: only the markers that should
	// be visible based on user input.
	self.visiblePlaces = ko.observableArray();
	// All places should be visible at first. We only want to remove them if the
	// user enters some input which would filter some of them out.
	self.allPlaces.forEach(function(place) {
		self.visiblePlaces.push(place);
	});
	// This, along with the data-bind on the <input> element, lets KO keep
	// constant awareness of what the user has entered. It stores the user's
	// input at all times.
	self.userInput = ko.observable('');
	// The filter will look at the names of the places the Markers are standing
	// for, and look at the user input in the search box. If the user input string
	// can be found in the place name, then the place is allowed to remain
	// visible. All other markers are removed.
	self.filterMarkers = function() {
		var searchInput = self.userInput().toLowerCase();
		self.visiblePlaces.removeAll();
		// This looks at the name of each places and then determines if the user
		// input can be found within the place name.
		self.allPlaces.forEach(function(place) {
			place.marker.setVisible(false);
			if(place.locName.toLowerCase().indexOf(searchInput) !== -1) {
				self.visiblePlaces.push(place);
			}
		});
		self.visiblePlaces().forEach(function(place) {
			place.marker.setVisible(true);
		});
	};
	self.FSArticles = ko.observableArray();
	var allFSTips = [];
	self.allFSTips = ko.observableArray();
	allFSTips.forEach(function(article) {
		self.FSArticles.push(article);
	});
	self.allFSTitles = ko.observableArray();

	/*
	function toggleSidebar() {
		var x = document.getElementById('sidebar-wrapper');
		if(x.style.visibility === 'hidden') {
			x.style.visibility = 'visible';
			 
		} else {
			x.style.visibility = 'hidden';
			 
		}
	}*/

	self.showSB = ko.observable(true);
	self.toggleSidebar = function() {
		self.showSB(!self.showSB());
	};

	self.refresh = function() {
		location.reload();
	}

}; //end koViewModel

function Place(dataObj) {
	this.placeId = dataObj.id;
	this.locName = dataObj.locName;
	this.latLng = dataObj.latLng;
	this.FourSquare_id = dataObj.FourSquare_id;
	// Save a reference to the Places' map marker after you build the
	// marker:
	this.marker = null;
}

var initMap = function() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -30.0346, lng: -51.2177},
		zoom: 13,
		styles: styles,
		mapTypeControl: false
	});
	// as per https://discussions.udacity.com/t/async-google-map-broke-my-app/42765/8
	// and https://discussions.udacity.com/t/handling-google-maps-in-async-and-fallback/34282
	var googleMap = map;
	ko.applyBindings(new KoViewModel(googleMap, locationData));
};

var googleError = function(onerror) {
	//  Mozilla recommendes you not use innerHTML when inserting plain text; instead, use node.textContent. This doesn't interpret the passed content as HTML, but instead inserts it as raw text.
	//https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
	errorSVG.innerHTML = "<div id='google-error'><img height=300 width=300 src='https://png.icons8.com/google-maps/color/1600' alt='Map failed to load'/></div>";
	$(document).ready(function(){
	    alert("Google failed to load!");
	});
		
};

function getPlacesDetails(marker, infowindow) {
	toggleBounce();
	var service = new google.maps.places.PlacesService(map);
	service.getDetails({
		placeId: marker.placeId
	}, function(place, status) {
		if(status === google.maps.places.PlacesServiceStatus.OK) {
			// Set the marker property on this infowindow so it isn't created again.
			infowindow.marker = marker;
			var innerHTML = '<div class=info-windows>';
			if(place.name) {
				innerHTML += '<strong>' + place.name + '</strong>';
			}
			if(place.formatted_address) {
				innerHTML += '<br>' + place.formatted_address;
			}
			if(place.formatted_phone_number) {
				innerHTML += '<br>' + place.formatted_phone_number;
			}
			if(place.opening_hours) {
				innerHTML += '<br><br><strong>Hours:</strong><br>' + place.opening_hours.weekday_text[0] + '<br>' + place.opening_hours.weekday_text[1] + '<br>' + place.opening_hours.weekday_text[2] + '<br>' + place.opening_hours.weekday_text[3] + '<br>' + place.opening_hours.weekday_text[4] + '<br>' + place.opening_hours.weekday_text[5] + '<br>' + place.opening_hours.weekday_text[6];
			}
			if(place.photos) {
				innerHTML += '<br><br><img src="' + place.photos[0].getUrl({
					maxHeight: 100,
					maxWidth: 200
				}) + '">';
			}
			innerHTML += '</div>';
			infowindow.setContent(innerHTML);
			infowindow.open(map, marker);
			infowindow.addListener('closeclick', function() {
				infowindow.marker = null;
				console.log(this);
			});
		}
		else {
			console.log('not ok');
			alert("Google Maps didn't load");

		}
	}); //end function (place status)
	// adapted from https://developers.google.com/maps/documentation/javascript/examples/marker-animations?hl=de
	
	function toggleBounce() {
		if(marker.getAnimation() !== null) {
			marker.setAnimation(null);
		} else {
			marker.setAnimation(google.maps.Animation.BOUNCE);
			setTimeout(function() {
				marker.setAnimation(null);
			}, 1400);
		}
	}
} //end getPlacesDetails
