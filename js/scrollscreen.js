var rootBox = document.getElementById("root_box");
var rootDiv =  document.querySelectorAll(".div-relative");
var viewHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;//对于不同浏览器的支持的写法
var index = 0;//代表第几页
function on(obj,eventType,handler){
	if(obj.addEventListener){//当前浏览器支持addEventListener
		obj.addEventListener(eventType,handler);
	}else{
		obj.attachEvent("on" + eventType,handler);
	}
}
function handler(e){
	//获取事件对象 
	_e = e || window.event;//IE和Chrome下是window.event FF下是e 
	if(_e.wheelDelta == 150 || _e.detail == -3){//滚轮向上滚
		index--;
		if(index<0){
			index = 0;
		}
	}else{
		index++;
		if(index > rootDiv.length - 1){
			index = rootDiv.length - 1;
		}
	}
	rootBox.style.top = -index*viewHeight + "px";
	
}
on(document,"mousewheel",handler);
on(document,"DomMouseScroll",handler);