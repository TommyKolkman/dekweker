Ext.define('dekweker.store.Folders',{
	extend:'Ext.data.Store',
	config:{
		model:'dekweker.model.Folder',
		storeId: 'Folders',
		autoLoad:true,
		proxy:{
			type: 'jsonp',
			url : 'http://zwaarcontrast.nl/dekweker/json.php',
			reader:{
				type:'json',
				rootProperty:'folders'
			}
		}
	}
});