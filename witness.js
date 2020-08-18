
function init(){

    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
        console.log("request: "+request.action+" +sender: "+sender+" +sendResponse: "+sendResponse);
        if(request.action === "unloop video"){
            alert("loop off")
        }else if(request.action ==="loop video"){
            alert("loop on")
        }
    })
    
}


init();
