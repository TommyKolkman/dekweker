var mapview = Ext.define('dekweker.view.Map', {
	xtype:'mapview',
	id:'mapview',
	extend:'Ext.Map',
	requires: [
		'Ext.Map'
	],
	directionsService:null,
	directionsDisplay:null,
	geocoder:null,
	_self:this,
	config: {
		mapOptions : {
			zoom : 10,
			center : new google.maps.LatLng(52.381313,4.865223),
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
			},
			painted: function(element, options){
				if (navigator.geolocation){
					navigator.geolocation.getCurrentPosition(_self.translateNavigator, _self.handle_location_error);
				}else{
					_self.askLocation();
				}
			}
		}
	},
	handle_location_error: function(err) {
		//A location error occurred
		_self.askLocation();
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
								_self.askLocation();
							}
						}
					});
				}else{
					console.log("Geocoding failed: " + status);
				}
			});
		}
	},
	askLocation: function(){
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
	},
	plotRoute: function(start){
		var end;
		if((this.direction)){
			end = (this.direction);
		}else{
			end = "De Kweker, Jan van Galenstraat 4, 1051 KL Amsterdam";
		}
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
	},
	setDirection:function(dir){
        this.direction = dir;
    }
});
