Ext.define('dekweker.store.Folders',{
	extend:'Ext.data.Store',
	config:{
		model:'dekweker.model.Folder',
		data:[
			{image:"http://dekweker.pfoapps.nl/wp-content/uploads/2012/11/page-001.jpg"},
			{image:"http://dekweker.pfoapps.nl/wp-content/uploads/2012/11/page-002.jpg"},
			{image:"http://dekweker.pfoapps.nl/wp-content/uploads/2012/11/page-003.jpg"}
		]
	}

});