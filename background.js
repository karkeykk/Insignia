console.log("hii");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    let msg={
        txt:"user clicked!"
    };
    console.log("I clicked the button");
    chrome.tabs.sendMessage(tab.id,msg);
}
