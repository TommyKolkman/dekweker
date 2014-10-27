var adressview = Ext.define('dekweker.view.Adresses', {
	xtype:'adressview',
	extend:'Ext.dataview.List',
	config: {
		fullscreen: false,
		itemTpl:'{place}',
		store:'Adresses',
		itemCls:'adresses',
		listeners:{
			itemtap:function(self, index, target, record, e, eOpts ){
				var adress = record.get('address');

				(this.getParent().setActiveItem(6));
				Ext.getCmp('mapview').setDirection(adress);
			}
		}
	}
});