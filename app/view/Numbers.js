var numberview = Ext.define('dekweker.view.Numbers', {
	xtype:'numberview',
	extend:'Ext.dataview.List',
	config: {
		fullscreen: false,
		itemTpl:'{place}',
		store:'Numbers',
		itemCls:'numbers',
		listeners:{
			itemtap:function(self, index, target, record, e, eOpts ){
				window.location = 'tel:'+record.get('number');
			}
		}
	}
});