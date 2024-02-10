// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
	// obj will be empty for chat widget
	// this will fire only once when the widget loads
});

document.addEventListener('onEventReceived', function(obj) {
  	// obj will contain information about the event
  	console.log(obj);
    twemoji.parse(document.body);

    var messageID = obj.detail.messageId+'-username-box';
    var messageFrom = obj.detail.messageId+'-username-box';
    var isSub = obj.detail.subscriber; // boolean
    var isStreamer = obj.detail.owner; // boolean

    if (isStreamer) { // Streamer
        var elementWrapper = document.getElementById(messageID);
        elementWrapper.classList.add("username_box_streamer"); // Add Class For Role
        elementWrapper.classList.remove("username_box"); // Remove Old Class
    }
    else if (isSub) { // Subscriber
        var elementFrom = document.getElementById(messageFrom); /* Light BG uses black text here */
        elementFrom.classList.add("username_box_sub");
        elementFrom.classList.remove("username_box");
    }
    
});