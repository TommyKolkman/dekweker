Ext.define('dekweker.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                xtype : 'toolbar',
                docked: 'top',
                title: 'de kweker',
                cls: 'titlebar',
                height:50
            },
            {   title:'folders',
                xtype: 'detailview'
            },
            {
                title: 'Bel ons'
            },
            {
                title: 'Mail ons'
            },
            {
                title: 'Website'
            },
            {
                title: 'Route'
            }
        ]
    }
});
