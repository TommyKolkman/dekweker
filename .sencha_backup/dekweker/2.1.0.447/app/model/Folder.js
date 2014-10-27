Ext.define('dekweker.model.Folder',{
	extend:'Ext.data.Model',
	config:{
		fields:[
			{name:'title',type:'string'},
			{name:'link',type:'string'},
			{name:'date',type:'string'}

		],
		hasMany  : {model: 'dekweker.model.Page', name: 'pages'}
	}
});