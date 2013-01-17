var mapview = Ext.define('dekweker.view.Map', {
	xtype:'mapview',
	extend:'Ext.Map',
	requires: [
		'Ext.Map'
	],
	directionsService:null,
	directionsDisplay:null,
	geocoder:null,
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
				geocoder = new google.maps.Geocoder();
				directionsService = new google.maps.DirectionsService();
				directionsDisplay = new google.maps.DirectionsRenderer();
				directionsDisplay.setMap(map);

				if (navigator.geolocation){
					navigator.geolocation.getCurrentPosition(_self.translateNavigator);
				}


			},
			locationupdate: function(geo) {
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
		var msgbox = Ext.Msg;
		if (geocoder) {
			geocoder.geocode({ 'latLng': currentLatLng}, function (results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					Ext.Msg.show({
						title: 'Bevestigen',
						message: results[0].formatted_address+' <br />als startlocatie gebruiken?',
						width: 300,
						height:300,
						buttons: Ext.MessageBox.OKCANCEL,
						cls:'messageBoxKweker',
						fn: function(buttonId) {
							if(buttonId === 'ok'){
								_self.plotRoute(currentLatLng);
							}else{
								Ext.Msg.show({
									title: 'Startlocatie',
									message: 'Adres/Plaats:',
									height: 300,
									width: 300,
									buttons: Ext.MessageBox.OK,
									cls:'messageBoxKweker',
									prompt : { maxlength : 180, autocapitalize : false },
									fn: function(buttonId,value) {
										var start = value;
										_self.plotRoute(start);
									}
								});
							}
						}
					});
				}else{
					console.log("Geocoding failed: " + status);
				}
			});
		}
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
