Ext.define('dekweker.view.Detail', {
	extend: 'Ext.Panel',
	xtype:'detailview',

	config:{
		cls:'modal',
		ui:'dark',
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
				this.fireEvent('setScroll', this);
			},
			hide:function(){
				this.destroy();
			},
			add:function(){
				//Fire event to make the Controller set the appropriate scroll
				this.fireEvent('setScroll', this);
			},
			initialize:function(){
				//Add a close button and handler to the modal.
				var _self=this;
				var closeButton = Ext.create('Ext.Button', {
					ui: 'action',
					iconCls:'delete',
					iconMask: true,
					docked:'top',
					cls:'closeButton',
					handler:function(){
						_self.destroy();
					}
				});
				this.add(closeButton);
			},
			doubletap: {
				fn: function() {this.destroy();},
				element: 'element'
			}
		},
		items:[
		{
			id: 'folderImage',
			html:'Laden',
			cls:'detailview'
		}
		]
		
	}

});
