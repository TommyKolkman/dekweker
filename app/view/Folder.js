var folderview = Ext.define('dekweker.view.Folder', {
	xtype:'folderview',
	extend:'Ext.DataView',
	config: {
		layout:'hbox',
		fullscreen: false,
		itemTpl:'<img src="{image}" height="100%"/>',
		store:'Folders'
	}
});
