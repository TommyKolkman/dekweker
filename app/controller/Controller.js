Ext.define('dekweker.controller.Controller', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            folders:'folderview'
        },
        control: {
            folders:{
                itemtap: 'onFolderSelect'
            }
        }
    },
    onFolderSelect:function( list, index, target, record, event ){
       //Open modal with the correct folder
       var coordinatesEvent = {x: event.pageX, y:event.pageY};
       var coordinatesElement = {x:event.target.offsetLeft,y:event.target.offsetTop};
       var elementSize = {width:event.target.width,height:event.target.height};
       var percentage = {
                            x : (coordinatesEvent.x - coordinatesElement.x) / (coordinatesElement.x+elementSize.width)*100,
                            y : (coordinatesEvent.y - coordinatesElement.y) / (coordinatesElement.y+elementSize.height)*100
                        
       };
       var overlay = Ext.Viewport.add({xtype:'detailview'});
       overlay.getScrollable().getScroller().scrollToEnd();
    }

  
});
