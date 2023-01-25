// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
	// obj will be empty for chat widget
	// this will fire only once when the widget loads
});

document.addEventListener('onEventReceived', function(obj) {
  	// obj will contain information about the event
  	// console.log(obj);

    var messageID = obj.detail.messageId+'-wrapper';
    var messageFrom = obj.detail.messageId+'-username-box';
    var messageBody = obj.detail.messageId+'-message-box';
    var isSub = obj.detail.subscriber; // boolean
    var isVIP = obj.detail.tags.vip;   // string 0-1
    var isMod = obj.detail.tags.mod;   // string 0-1
    var isStreamer = obj.detail.owner; // boolean

    if (isStreamer) { // Streamer
        var elementWrapper = document.getElementById(messageID);
        elementWrapper.classList.add("wrapper-streamer"); // Add Class For Role
        elementWrapper.classList.remove("wrapper"); // Remove Old Class
    }
    else if (isMod == '1') { // Mod
        var elementWrapper = document.getElementById(messageID);
        elementWrapper.classList.add("wrapper-mod");
        elementWrapper.classList.remove("wrapper");
    }
    else if (isVIP == '1') { // VIP
        var elementWrapper = document.getElementById(messageID);
        elementWrapper.classList.add("wrapper-vip");
        elementWrapper.classList.remove("wrapper");
    }
    else if (isSub) { // Subscriber
        var elementWrapper = document.getElementById(messageID);
      	elementWrapper.classList.add("wrapper-sub");
        elementWrapper.classList.remove("wrapper");
        var elementFrom = document.getElementById(messageFrom); /* Light BG uses black text here */
        elementFrom.classList.add("username_box_sub");
        elementFrom.classList.remove("username_box");
        var elementBody = document.getElementById(messageBody); /* Light BG uses black text here */
        elementBody.classList.add("message_box_sub");
        elementBody.classList.remove("message_box");
    }
    
});