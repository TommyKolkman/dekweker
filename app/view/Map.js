var mapview = Ext.define('dekweker.view.Map', {
	xtype:'mapview',
	extend:'Ext.Map',
	requires: [
        'Ext.Map'
    ],
	config: {
		useCurrentLocation: true,
		mapOptions : {
			zoom : 20,
            mapTypeId : google.maps.MapTypeId.HYBRID,
            navigationControl: true,
            navigationControlOptions: {
                style: google.maps.NavigationControlStyle.DEFAULT
            }
		}
	}
});
