
var Program = function(){

	var that = {};
	var run;
	var removeTagInnerText = function(tag){
			//console.log("remove");
			var elements = document.getElementsByTagName(tag);
			for(var i = 0; i < elements.length; i++){
				if(elements[i].childNodes.length > 0){
					for(var j = 0; j < elements[i].childNodes.length; j++){
						//console.log(elements[i].childNodes[j].nodeValue);
						elements[i].childNodes[j].nodeValue = "";
					}
				}
				if(tag === "a"){
					elements[i].className = "";
				}
				else if(tag === "img"){
					//elements[i].parentNode.removeChild(elements[i]);
					elements[i].src = "";
					elements[i].display = "none";
					elements[i].className = "";
					elements[i].alt = "";
					elements[i].style.backgroundImage = "";
				}
				 else if(tag === "div"){
				 	elements[i].style.backgroundImage = "";
				}
				else if(tag === "i"){
					elements[i].className = "";
				}
				else if(tag === "button"){
					elements[i].className = "";
				}
				else if(tag === "textarea"){
					elements[i].placeholder = "";
					elements[i].title = "";
				}
				else if(tag === "input"){
					elements[i].value = "";
				}
				else if(tag === "span"){
					if(elements[i].className.indexOf("emoticon") != -1){
						elements[i].className = "";
					}
				}
			}
	};

	that.run = run;
	that.removeTagInnerText = removeTagInnerText;

	return that;

}

var program = Program();
var minus;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting === "ON"){
    	minus = setInterval(function(){
	    	program.run = true;
	    	program.removeTagInnerText("div");
			program.removeTagInnerText("span");
			program.removeTagInnerText("a");
			program.removeTagInnerText("p");
			program.removeTagInnerText("input");
			program.removeTagInnerText("img");
			program.removeTagInnerText("i");
			program.removeTagInnerText("abbr");
			program.removeTagInnerText("strong");
			program.removeTagInnerText("h6");
			program.removeTagInnerText("h4");
			program.removeTagInnerText("textarea");
			program.removeTagInnerText("button");
			program.removeTagInnerText("li");
	  	}, 1000);
      	sendResponse({farewell: "script ON"});


    } else if(request.greeting === "OFF"){
    	program.run = false;
    	clearInterval(minus);
    	sendResponse({farewell: "script OFF"});
    }
  });

