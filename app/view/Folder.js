Ext.define('dekweker.view.Folder', {
	extend: 'Ext.Carousel',
	xtype:'folderview',
	config: {
		fullscreen: false,
		width:'30%',
		items: [
			{
				html : 'Item 1',
				style: 'background-color: #5E99CC'
			},
			{
				html : 'Item 2',
				style: 'background-color: #759E60'
			},
			{
				html : 'Item 3'
			}
		]
	}
});