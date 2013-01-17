var mapview = Ext.define('dekweker.view.Map', {
	xtype:'mapview',
	extend:'Ext.Map',
	requires: [
		'Ext.Map'
	],
	directionsService:null,
	directionsDisplay:null,
	_self:this,
	config: {
		useCurrentLocation: {
			autoUpdate : false
		},
		mapOptions : {
			zoom : 10,
			mapTypeId : google.maps.MapTypeId.ROADMAP,
			navigationControl: true,
			navigationControlOptions: {
				style: google.maps.NavigationControlStyle.DEFAULT
			}
		},
		listeners : {
			maprender : function(comp, map){
				_self = this;
				//On render, setup directionsDisplay and Service
				directionsService = new google.maps.DirectionsService();
				directionsDisplay = new google.maps.DirectionsRenderer();
				directionsDisplay.setMap(map);

				//Prompt the user for startingpoint
				// Ext.Msg.prompt('Get directions', 'Startaddress:', function(btn, text){
				// 	var start = text;
				// 	_self.plotRoute(start);
				// });

				if (navigator.geolocation){
					navigator.geolocation.getCurrentPosition(_self.translateNavigator);
				}


			},
			locationupdate: function(geo) {
				console.log('Joehoe');
				var currentLocation = new google.maps.LatLng(geo.latitude, geo.longitude);
				var _self = this;
				if (map.rendered){
					_self.plotRoute(currentLocation);
				}
				else{
					map.on('activate', function(){
						_self.plotRoute(currentLocation);
					});
				}
			}

		}

	},
	translateNavigator: function(navigatorObj){
		var currentLatLng = new google.maps.LatLng(navigatorObj.coords.latitude, navigatorObj.coords.longitude);
		_self.plotRoute(currentLatLng);
	},
	plotRoute: function(start){
		var end = "De Kweker, Jan van Galenstraat 4, 1051 KL Amsterdam";
		var request = {
			origin:start,
			destination:end,
			travelMode: google.maps.DirectionsTravelMode.DRIVING
		};
		directionsService.route(request, function(response, status) {
			if (status == google.maps.DirectionsStatus.OK) {
				directionsDisplay.setPanel(document.getElementById('map-directions'));
				directionsDisplay.setDirections(response);
			}
		});
	}
});
