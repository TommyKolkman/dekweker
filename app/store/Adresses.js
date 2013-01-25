Ext.define('dekweker.store.Adresses',{
	extend:'Ext.data.Store',
	config:{
		model:'dekweker.model.Adress',
		storeId: 'Adresses',
		autoLoad:true,
		proxy:{
			type: 'jsonp',
			url : 'http://dekweker.pfoapps.nl/routes-android/?type=addresses',
			reader:{
				type:'json',
				rootProperty:'places'
			}
		}
	}
});