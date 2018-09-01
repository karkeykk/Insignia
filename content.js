chrome.runtime.onMessage.addListener(receiver);

function receiver(request, sender, sendResponse) {
  console.log("hiii");
  InboxSDK.load('2', 'sdk_56890806_45651d3328').then(function(sdk){

	// the SDK has been loaded, now do something with it!
	sdk.Compose.registerComposeViewHandler(function(composeView){

		// a compose view has come into existence, do something with it!
		composeView.addButton({
      title: "My Nifty Button!",
      hasDropdown: true,
			iconUrl: 'https://lh5.googleusercontent.com/itq66nh65lfCick8cJ-OPuqZ8OUDTIxjCc25dkc4WUT1JG8XG3z6-eboCu63_uDXSqMnLRdlvQ=s128-h128-e365',
			onClick: function(event) {
				event.composeView.insertTextIntoBodyAtCursor('Hello World!');
			},
		});

	});

});
}


//   if (request.txt === "user clicked!") {
//     console.log("hii");
//     var elements = document.getElementsByTagName('p');
//     console.log(elements.length);
//     for(i=0;i<elements.length;i++){
//         console.log('hi');
//         //elements[i].innerHTML="google";
//     }
//   }
//   var script = document.createElement('script');
//   script.src = 'https://karkeykk.github.io/sample.js';
//   document.body.appendChild(script);
// }