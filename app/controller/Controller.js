Ext.define('dekweker.controller.Controller', {
	extend: 'Ext.app.Controller',
	distance: {x:null,y:null},
	image: null,
	i:0,
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

		//The directions panel
		var directionsPanel = Ext.getCmp('map-directions-container');

		//Check if the map directions must be shown or hidden
		if(Ext.Viewport.getOrientation() == 'landscape'){
			directionsPanel.hide();
		}else{
			directionsPanel.show();
		}
	},
	onFolderSelect:function( list, index, target, record, event ){
		//Open modal with the correct folder
		var elementSize = {width:event.target.width,height:event.target.height};

		var overlay = Ext.Viewport.add({
			xtype:'detailview'
		});
		this.url = (event.target.src);

		var position = $(event.target).offset();
		var xpos=(event.pageX - position.left);
		var ypos=(event.pageY - position.top);

		this.distance.x = (xpos) / (elementSize.width);
		while( this.distance.x >1){
			this.distance.x --;
		}

		this.distance.y = (ypos) / (elementSize.height);
	},
	loadFolder:function(el){
		var _self = this;
		this.image = null;
		this.image = new Image();
		this.image.src = this.url+"?test="+this.i;
		//HAXX
		this.i++;
		this.image.onload = function(){
			Ext.getCmp('folderImage').setHtml(_self.image);
			_self.setScroll(el);
		};
	},
	setScroll:function(el){
		var scroll = {
			x:this.image.width*this.distance.x-(Ext.Viewport.getWindowWidth()*0.45),
			y:this.image.height*this.distance.y-(Ext.Viewport.getWindowHeight()*0.45)
		};
		el.getScrollable().getScroller().scrollTo(scroll.x,scroll.y);
	}
});