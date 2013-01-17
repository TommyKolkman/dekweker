Ext.define('dekweker.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    id:'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',
        listeners:{
            activeitemchange: function( ob, value, oldValue, eOpts ){
                //Check which card we are gonna switch to
                if(value.id!=='folder' && value.id !=='route' && value.id !=='pages'){
                    this.setActiveItem(oldValue);
                    
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
                    var button = Ext.getCmp('backbutton');
                    if(value.id=='route'||value.id=='pages'){
                       button.show();
                    }else{
                        button.hide();
                    }
                    return true;
                }
            },
            initialize:function(){
                var _self=this;
                Ext.getCmp('backbutton').setHandler(function(){
                    _self.setActiveItem(0);
                });
                Ext.getCmp('tabBar').getComponent(0).hide();
                Ext.getCmp('tabBar').getComponent(1).hide();
            }
        },
        tabBar: {
                id: 'tabBar',
                ui: 'dark',
                layout: {
                    pack: 'center'
                }
            },
        items: [
            {
                xtype : 'toolbar',
                docked: 'top',
                html: '<div class="titleLogo"></div>',
                centered:true,
                cls: 'titlebar',
                height:50,
                items : [
                {
                    ui: 'back x-button-light',
                    id: 'backbutton',
                    text: "Terug",
                    hidden:true
                }]
            },
            {
                id:'folder',
                title:'folders',
                xtype: 'folderview',
                cls:'main',
                scrollable: 'horizontal',
                inline: {
					wrap: false
				}
            },
            {
                id:'pages',
                title:'Pagina\'s',
                xtype: 'pageview',
                cls:'main',
                scrollable: 'horizontal',
                inline: {
                    wrap: false
                }
            },
            {
                id:'call',
                title: 'Bel ons',
                xtype: 'panel',
                iconCls:'icon-belons'
            },
            {
                id:'mail',
                title: 'Mail ons',
                iconCls: 'icon-mailons'
            },
            {
                id:'site',
                title: 'Website',
                iconCls: 'icon-website'
            },
            {
                id:'route',
                title: 'Route',
                iconCls: 'icon-route',
                xtype: 'routeview'
            }
        ]
    }
});
