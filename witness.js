function init(){

    // Background script sends a message to loop/unloop video which this listener listens for.
    chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
        
        /*console.log("request: "+request.action+
                        " +sender: "+sender+
                        " +sendResponse: "+sendResponse);*/

        // Shows alert notification when key command is pressed.
        if(request.action === "unloop video"){ alert("loop off"); }
        else if(request.action ==="loop video"){ alert("loop on"); }
        
        sendResponse("worked!")
        return true;
    });
}


init();