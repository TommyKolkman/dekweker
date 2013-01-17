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