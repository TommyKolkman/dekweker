var folderview = Ext.define('dekweker.view.Folder', {
	xtype:'folderview',
	extend:'Ext.DataView',
	config: {
		fullscreen: false,
		itemTpl:'<img src="{image}" height="100%"/>',
		store:'Folders',
		listeners:{
			painted:function(){
				var _self =this;
				this.fireEvent('setScrollHandler', this);
				var scroller = this.getScrollable().getScroller();
				scroller.addListener('scrollend',function(){
					var half = Ext.Viewport.getWindowWidth()/2;
					var best;
					var minimum=8888;
					var scroll;
					Ext.Array.each(_self.getViewItems(),function(element, index, elements){
						var el = $(element);
						if(minimum>Math.abs(half-(el.offset().left+el.width()/2))){
							scroll =  Math.round(half-(el.offset().left+el.width()/2));
							minimum = Math.abs(half-(el.offset().left+el.width()/2));
						}
					});
					console.log(scroll);
					if(scroll!==0){
						scroller.scrollTo(scroller.position.x+(-1*scroll),scroller.position.y,true);
					}
				});
			}
		}
	}

});
