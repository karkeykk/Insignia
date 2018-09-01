
chrome.runtime.onMessage.addListener(receiver);

function receiver(request, sender, sendResponse) {
  if (request.txt === "user clicked!") {
    console.log("hii");
    var elements = document.getElementsByTagName('p');
    console.log(elements.length);
    for(i=0;i<elements.length;i++){
        console.log('hi');
        //elements[i].innerHTML="google";
    }
  }
  var script = document.createElement('script');
  script.src = 'https://karkeykk.github.io/sample.js';
  document.body.appendChild(script);
}