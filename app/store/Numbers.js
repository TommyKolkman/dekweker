Ext.define('dekweker.store.Numbers',{
	extend:'Ext.data.Store',
	config:{
		model:'dekweker.model.Number',
		storeId: 'Numbers',
		autoLoad:true,
		proxy:{
			type: 'jsonp',
			url : 'http://dekweker.pfoapps.nl/bel-ons-android/?type=belons',
			reader:{
				type:'json',
				rootProperty:'numbers'
			}
		}
	}
});