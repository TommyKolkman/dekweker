var folderview = Ext.define('dekweker.view.Folder', {
	xtype:'folderview',
	extend:'Ext.DataView',
	config: {
		fullscreen: false,
		itemTpl:'<img src="{image}" class="folderImage"/>',
		store:'Folders',
		itemCls:'folder',
		listeners:{
			initialize:function(){
				var _self =this;

				//Declare variables
				var scroller = this.getScrollable().getScroller();
				var half = Ext.Viewport.getWindowWidth()/2;
				var best;
				var minimum=8888;
				var scroll;

				//Set end of scroll behaviour
				scroller.addListener('scrollend',function(){
					minimum=9999;

					//Select closest item to the middle
					Ext.Array.each(_self.getViewItems(),function(element, index, elements){
						var el = $(element);
						if(minimum>Math.abs(half-((el.offset().left+parseInt(el.css('padding-left').replace("px", ""),10))+el.width()/2))){
							scroll =  Math.round(half-(el.offset().left+el.width()/2));
							minimum = Math.abs(half-((el.offset().left+parseInt(el.css('padding-left').replace("px", ""),10))+el.width()/2));
							console.log("Element number "+index+" is closest now");
						}
					});
					//Scroll to correct position
					if(scroll!==0){
						if(scroller.position.x+(-1*scroll)<0){
							console.log("Scroll to beginning");
							scroller.scrollTo(0,scroller.position.y,true);
						}else{
							console.log("Scroll To ",scroller.position.x+(-1*scroll));
							scroller.scrollTo(scroller.position.x+(-1*scroll),scroller.position.y,true);
						}
					}else{
						console.log("Dont scroll");
					}
				});

				//Set start of scroll behaviour
				var first;
				var last;
				var newfirst;
				var newlast;
				var items;
				scroller.addListener('scrollstart',function(){
					//Calculate paddings
					items = _self.getViewItems();
					half = Ext.Viewport.getWindowWidth()/2;
					newfirst = $(items[0]).width()/2;
					newlast = $(items[items.length-1]).width()/2;
							
					//Set paddings to the first and last item
					if(newfirst!==first || newlast!==last){
						first=newfirst;
						last=newlast;
						$(items[0]).css('padding', '0 0 0 '+(half-last)+'px');
						$(items[items.length-1]).css('padding', '0 '+(half-last)+'px 0 0');
					}
				});
			}
		}
	},
	setPaddings:function(){
		//Calculate paddings
		var half = Ext.Viewport.getWindowWidth()/2;
		var first = $(this.getViewItems()[0]).width()/2;
		var last = $(this.getViewItems()[this.getViewItems().length-1]).width()/2;
					
		//Set paddings to the first and last item
		$(this.getViewItems()[0]).css('padding', '0 0 0 '+(half-last)+'px');
		$(this.getViewItems()[this.getViewItems().length-1]).css('padding', '0 '+(half-last)+'px 0 0');

	}
});
