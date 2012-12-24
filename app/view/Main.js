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
                cls: 'titlebar'
            },
            {   title:'folders',
                xtype: 'folderview'
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
