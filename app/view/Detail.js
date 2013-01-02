Ext.define('dekweker.view.Detail', {
	extend: 'Ext.Panel',
	xtype:'detailview',

	config:{
		cls:'modal',
		centered:true,
		height: '90%',
		width: '90%',
		modal:true,
		hideOnMaskTap:true,
		scrollable:{
			direction:'both'
		},
		listeners:{
			painted:function(){
				this.fireEvent('popupDrawn', this);
			},
			hide:function(){
				this.destroy();
			},
			add:function(){
				this.fireEvent('setScroll', this);
			}
		},
		items:[{
			id: 'folderImage',
			html:'loading...',
		}]
		
	}

});
