Ext.define('dekweker.controller.Controller', {
    extend: 'Ext.app.Controller',
    distance: {x:null,y:null},
    url: 'http://www.letsgomobile.org/images/reviews/0102/samsung-camera-phone-test-pictures.jpg',
    image: null,
    config: {
        refs: {
            folders:'folderview',
            modal:'detailview'
        },
        control: {
            folders:{
                itemtap: 'onFolderSelect'
            },
            modal:{
                'popupDrawn':'loadFolder'
            }
        }
    },
    init: function() {
      Ext.Viewport.on(['orientationchange','resize'], 'handleOrientationChange', this, {buffer: 50 });
    },
    handleOrientationChange: function(){
      //Reload Folders store, to reposition them according to the viewport size.
      Ext.StoreMgr.get('Folders').load();
    },
    onFolderSelect:function( list, index, target, record, event ){
       //Open modal with the correct folder
       var coordinatesEvent = {x: event.pageX, y:event.pageY};
       var coordinatesElement = {x:event.target.offsetLeft,y:event.target.offsetTop};
       var elementSize = {width:event.target.width,height:event.target.height};
       
       
       var overlay = Ext.Viewport.add({
                                        xtype:'detailview'
                                      });

       this.distance.x = (coordinatesEvent.x - coordinatesElement.x) / (coordinatesElement.x+elementSize.width);
       this.distance.y = (coordinatesEvent.y - coordinatesElement.y) / (coordinatesElement.y+elementSize.height);
    },
    loadFolder:function(el){
      var _self = this;
      this.image = null;
      this.image = new Image();
      this.image.src = this.url;
      this.image.onload = function(){
       Ext.getCmp('folderImage').setHtml(_self.image);
       _self.setScroll(el);
      };
    },
    setScroll:function(el){
      var scroll = {x:this.image.width*this.distance.x,y:this.image.width*this.distance.y};
      console.log('Set Scrol to',scroll,this.image);
      el.getScrollable().getScroller().scrollTo(scroll.x,scroll.y,false);
    }

  
});
