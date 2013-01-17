var routeview = Ext.define('dekweker.view.Route', {
    extend:'Ext.Container',
    xtype:'routeview',
    config:{
        layout: 'vbox',
        items: [
            {
                xtype:'mapview',
                flex: 3
            },
            {
                xtype:'container',
                frame:'true',
                scrollable:'vertical',
                height:'200px',
                id: 'map-directions-container',

                items:[
                    {
                        id:'map-directions',
                        scrollable:true
                    }
                ]
            }
        ]
    }
});