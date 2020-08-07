
let loopCurrentVideo = false;


function enableListeners(){
    
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
        // Ctrl+Shift+E command injects loopVideo function using DOM
        else if(command === "Ctrl+Shift+L"){
            chrome.tabs.executeScript({ code: `(${ loopVideo }())`});
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

// loops the video
function loopVideo(){    
    if(loopCurrentVideo){
        loopCurrentVideo = false;
    }else{
        loopCurrentVideo = true;
    }
    console.log(loopCurrentVideo);


    if(loopCurrentVideo){
        let ytplayer = document.getElementsById("movie_player");
        let currentTime = ytplayer.getCurrentTime();
    }
}


enableListeners();