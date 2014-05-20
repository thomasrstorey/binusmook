var check;

function showPageAction(tabId, changeInfo, tab){
  if(tab.url.indexOf("facebook") != -1){
    chrome.pageAction.show(tabId);
  }
};

chrome.tabs.onUpdated.addListener(showPageAction);