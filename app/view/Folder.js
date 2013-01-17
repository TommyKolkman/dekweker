var folderview = Ext.define('dekweker.view.Folder', {
	xtype:'folderview',
	extend:'Ext.DataView',
	config: {
		fullscreen: false,
		itemTpl:'<img src="{image}" height="100%"/>',
		store:'Folders',
		itemCls:'folder',
		listeners:{
			painted:function(){
				var _self =this;

				//Set end of scroll behaviour
				var scroller = this.getScrollable().getScroller();
				scroller.addListener('scrollend',function(){
					var half = Ext.Viewport.getWindowWidth()/2;
					var best;
					var minimum=8888;
					var scroll;
					Ext.Array.each(_self.getViewItems(),function(element, index, elements){
						var el = $(element);
						if(minimum>Math.abs(half-((el.offset().left+parseInt(el.css('padding-left').replace("px", ""),10))+el.width()/2))){
							scroll =  Math.round(half-(el.offset().left+el.width()/2));
							minimum = Math.abs(half-((el.offset().left+parseInt(el.css('padding-left').replace("px", ""),10))+el.width()/2));
							console.log("Element number "+index+" is closest now");
						}
					});

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

				scroller.addListener('scrollstart',function(){
					_self.setPaddings();
				});
			},
			resize:function(el,opts){
				this.setPaddings();
			}

		}
		
	},
	setPaddings:function(){
			var half = Ext.Viewport.getWindowWidth()/2;
			var first = $(this.getViewItems()[0]).width()/2;
			var last = $(this.getViewItems()[this.getViewItems().length-1]).width()/2;
					
			$(this.getViewItems()[0]).css('padding', '0 0 0 '+(half-last)+'px');
			$(this.getViewItems()[this.getViewItems().length-1]).css('padding', '0 '+(half-last)+'px 0 0');

		}

});
