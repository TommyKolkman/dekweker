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
                html: '<div class="titleLogo"></div>',
                centered:true,
                cls: 'titlebar',
                height:50
            },
            {   title:'folders',
                xtype: 'folderview',
                scrollable: 'horizontal'
            },
            {
                title: 'Bel ons',
                iconCls:'callIcon'
            },
            {
                title: 'Mail ons',
                iconCls: 'mailIcon'
            },
            {
                title: 'Website',
                iconCls: 'websiteIcon'
            },
            {
                title: 'Route',
                iconCls: 'routeIcon'
            }
        ]
    }
});
