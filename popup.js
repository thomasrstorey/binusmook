var Program = function(){

	that = {};

	var init = function(){
		var checkbox = document.getElementById('toggle');
		var bg = chrome.extension.getBackgroundPage();
		
		checkbox.addEventListener('click', function(){
			if(checkbox.checked){
				chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
					chrome.tabs.sendMessage(tabs[0].id, {greeting:"ON"}, function(response){
						console.log(response.farewell);
					});
				});
			}else if(!checkbox.checked){
				chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
					chrome.tabs.sendMessage(tabs[0].id, {greeting:"OFF"}, function(response){
						console.log(response.farewell);
					});
				});
			}
		})
	};

	that.init = init;

	return that;

};

document.addEventListener('DOMContentLoaded', function () {
  
	program = Program();
	program.init();

});