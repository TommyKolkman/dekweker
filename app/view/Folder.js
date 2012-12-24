Ext.define('dekweker.view.Folder', {
	xtype:'folderview',
	extend:'Ext.List',
	config: {
		fullscreen: false,
		itemTpl:'<img src="{image}" width:"0" height="100%"/>',
		store:'Folders',
		cls:'horizontalSlider'
		//inline: { wrap: false },
		// scrollable: {
		// 	direction: 'horizontal',
		// 	directionLock: true
		// }
	}
});