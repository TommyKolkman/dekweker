var folderview = Ext.define('dekweker.view.Folder', {
	xtype:'folderview',
	id:'folderview',
	extend:'Ext.DataView',
	config: {
		fullscreen: false,
		itemTpl:
			'<tpl for="pages"><div><tpl if="xindex==1"><img src="{url}" class="folderImage"/></tpl></div></tpl>',
		store:'Folders',
		itemCls:'folder',
		listeners:{
			initialize:function(){
				var _self =this;

				//Declare variables
				var scroller = this.getScrollable().getScroller();
				var half = Ext.Viewport.getWindowWidth()/2;
				var best,minimum,scroll;

				//Set end of scroll behaviour
				//For this we use a timer so it doesn't call the function a bazillion times
				var timeOut = false;
				scroller.addListener('scrollend',function(){
					if(timeOut!==false){
						clearTimeout(timeOut);
					}
					timeOut = setTimeout(function(){
						if(!_self.paddings){
							_self.setPaddings();
						}
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
						if(Math.abs(scroll)>2){
							var position = scroller.position.x+(-1*scroll);
							if(position<0){
								console.log("Scroll to beginning");
								scroller.scrollTo(0,scroller.position.y,true);
							}else{
								console.log("Scroll To ",position);
								scroller.scrollTo(position,scroller.position.y,true);
							}
						}else{
							console.log("Dont scroll");
						}
					},300);

				});

				//Set start of scroll behaviour
				var first, last, newfirst, newlast, items;
				scroller.addListener('scrollstart',function(){
					if(timeOut!==false){
						clearTimeout(timeOut);
					}
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