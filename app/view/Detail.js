Ext.define('dekweker.view.Detail', {
	extend: 'Ext.Panel',
	xtype:'detailview',

	config:{
		centered:true,
		height: '90%',
		width: '90%',
		modal:true,
		hideOnMaskTap:true,
		scrollable:{
			direction:'both'
		},
		html:'<img src="http://www.symmetrymagazine.org/sites/default/files/breaking/wp-content/uploads/2010/11/alicelead3.jpg"/>'
	}

});
