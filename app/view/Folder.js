var folderview = Ext.define('dekweker.view.Folder', {
	xtype:'folderview',
	extend:'Ext.DataView',
	config: {
		fullscreen: false,
		itemTpl:'<img src="{image}" height="100%"/>',
		store:'Folders'
	}
});
