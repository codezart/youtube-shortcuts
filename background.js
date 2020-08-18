function enableListeners(){
    
    // Listens for keyboard commands.
    chrome.commands.onCommand.addListener(function(command){

        // Ctrl+Shift+S command injects pause/unpause function using DOM
        if( command === "Ctrl+Shift+S"){
            chrome.tabs.executeScript(
                {
                   code: `(${ pauseUnPauseVideo }())`
                }
            );

        }// Ctrl+Shift+Q command injects previousPage function using DOM
        else if( command === "Ctrl+Shift+Q"){
           
            chrome.tabs.executeScript(
                { 
                    code: `( ${ previousPage }())`
                }
            );

        }// Ctrl+Shift+E command injects clickNextVideo function using DOM
        else if(command === "Ctrl+Shift+E"){
            
            chrome.tabs.executeScript(
                {
                    code: `(${ clickNextVideo}())`
                }
            );

        }// Ctrl+Shift+L command injects loopVideo function using DOM
        else if(command === "Ctrl+Shift+L"){
            
            // purpose of .query is to get the tab id
            chrome.tabs.query({active: true, lastFocusedWindow:true}, tabs =>{
                
                // returns the loop property of video (true/false)
                chrome.tabs.executeScript(
                    tabs[0].id, {code: `document.getElementsByClassName('video-stream html5-main-video')[0].loop` },function(data){
                    
                        // If loop true unloop it vice versa
                        console.log("loop: "+data[0]);
                        if(data[0]){

                            // execute script/function to turn loop property to false.
                            chrome.tabs.executeScript({ code: `(${ unLoopVideo }())`});
                            
                            // Send reponse saying video is now unlooped
                            chrome.tabs.query({active: true, currentWindow: true},function(tabs){
                                chrome.tabs.sendMessage(tabs[0].id,{action:"unloop video"},function(response){
                                    console.log(response);
                                });
                            });
            
                        }else{ 

                            // execute script/function to turn loop property to true.
                            chrome.tabs.executeScript({ code: `(${ loopVideo }())`});
                            
                            // Send reponse saying video is now looped
                            chrome.tabs.query({active: true, currentWindow: true},function(tabs){
                                chrome.tabs.sendMessage(tabs[0].id,{action:"loop video"},function(response){
                                    console.log(response);
                                })
                            });
                        } 
                    })
                });                      
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
function loopVideo(){
    
    document.getElementsByClassName('video-stream html5-main-video')[0].loop = true;
    console.log("inside loopvideo function now loop:"+ document.getElementsByClassName('video-stream html5-main-video')[0].loop)
}
// unloops current video on youtube
function unLoopVideo(){
    
    document.getElementsByClassName('video-stream html5-main-video')[0].loop = false; 
    console.log("inside UNloopvideo function now loop:"+ document.getElementsByClassName('video-stream html5-main-video')[0].loop)
}

enableListeners();