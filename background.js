let loopCurrentVideo = false;

function enableListeners(){
    console.log(loopCurrentVideo)
    // checks for keyboard commands for the extension
    chrome.commands.onCommand.addListener(function(command){
        // Ctrl+Shift+S command injects pause/unpause function using DOM
        if( command === "Ctrl+Shift+S"){
            chrome.tabs.executeScript(
                {
                   code: `(${ pauseUnPauseVideo }())`
                }
            );
        }
        // Ctrl+Shift+Q command injects previousPage function using DOM
        else if( command === "Ctrl+Shift+Q"){
            chrome.tabs.executeScript({ code: `( ${ previousPage }())`});
        }
        // Ctrl+Shift+E command injects clickNextVideo function using DOM
        else if(command === "Ctrl+Shift+E"){
            chrome.tabs.executeScript(
                {
                    code: `(${ clickNextVideo}())`
                }
            );
        }
        // Ctrl+Shift+L command injects loopVideo function using DOM
        else if(command === "Ctrl+Shift+L"){

            if(loopCurrentVideo){

                loopCurrentVideo = false;
                chrome.tabs.executeScript({ code: `(${ unLoopVideo }())`});

                chrome.tabs.query({active: true, currentWindow: true},function(tabs){
                    chrome.tabs.sendMessage(tabs[0].id,{action:"unloop video"}, function(response){

                    })
                });

            }else{ 
                loopCurrentVideo = true;
                chrome.tabs.executeScript({ code: `(${ loopVideo }())`});

                chrome.tabs.query({active: true, currentWindow: true},function(tabs){
                    chrome.tabs.sendMessage(tabs[0].id,{action:"loop video"}, function(response){
                        
                    })
                });
            }            
        } 
        
    });



     
}


// loads next video on youtube
function clickNextVideo(){
    console.log("Next video");
    let nextVideo = document.getElementsByClassName("ytp-next-button ytp-button")[0];
    nextVideo.click();
}

// goes to previous page/video on youtube
function previousPage(){
    
    console.log("previous page");
    window.history.back();
}

// pauses the current video playing on youtube
function pauseUnPauseVideo(){
    let pauseUnPauseVideo = document.getElementsByClassName("ytp-play-button ytp-button")[0];
    pauseUnPauseVideo.click();
}

// loops current video on youtube
function loopVideo(loopCurrentVideo){
    document.getElementsByClassName('video-stream html5-main-video')[0].loop = true; 
}
// unloops current video on youtube
function unLoopVideo(loopCurrentVideo){
    document.getElementsByClassName('video-stream html5-main-video')[0].loop = false; 
}

enableListeners();