Ext.define('dekweker.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',
        listeners:{
            activeitemchange: function( ob, value, oldValue, eOpts ){
                //Check which card we are gonna switch to
                if(value.id!=='folder' && value.id !=='route'){
                    this.setActiveItem(0);
                    
                    //Handling of the buttons in the menu
                    if(value.id=='call'){
                        window.location = ('tel:0206063606');
                    }else if(value.id=='mail'){
                        window.location = ('mailto:info@dekweker.nl');
                    }else if(value.id =='site'){
                        window.open('http://kweker.nl/');
                    }
                    return false;
                }else{
                    return true;
                }
            }
        },
        items: [
            {
                
                xtype : 'toolbar',
                docked: 'top',
                html: '<div class="titleLogo"></div>',
                centered:true,
                cls: 'titlebar',
                height:50
            },
            {
                id:'folder',
                title:'folders',
                xtype: 'folderview',
                scrollable: 'horizontal',
                inline: {
					wrap: false
				}
            },
            {
                id:'call',
                title: 'Bel ons',
                xtype: 'panel',
                iconCls:'callIcon'
            },
            {
                id:'mail',
                title: 'Mail ons',
                iconCls: 'mailIcon'
            },
            {
                id:'site',
                title: 'Website',
                iconCls: 'websiteIcon'
            },
            {
                id:'route',
                title: 'Route',
                iconCls: 'routeIcon',
                xtype: 'mapview'
            }
        ]
    }
});
