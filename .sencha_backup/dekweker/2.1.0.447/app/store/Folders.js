Ext.define('dekweker.store.Folders',{
	extend:'Ext.data.Store',
	config:{
		model:'dekweker.model.Folder',
		storeId: 'Folders',
		autoLoad:true,
		proxy:{
			type: 'jsonp',
			url : 'http://dekweker.pfoapps.nl/json-output/?type=folders',
			reader:{
				type:'json',
				rootProperty:'folders'
			}
		}
	}
});