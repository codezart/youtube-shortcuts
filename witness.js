let loopVideo = false;

function init(){

        
    // inject css
    let css = document.createElement("link");
    css.href = chrome.extension.getURL("style.css");
    css.type = "text/css";
    document.head.appendChild(css);

    //inject overlay outer
    let overlay = document.createElement("div");
    overlay.setAttribute("id","youtube-helper-overlay-main");
    document.body.appendChild(overlay);

    //inject overlay inner
    let overlayInner = document.createElement("div");
    overlayInner.setAttribute("id", "youtube-helper-overlay-inner");
    overlay.appendChild(overlayInner);
    
    simplecontent = document.createElement("h2");
    simplecontent.innerHTML = "HELLO WORLD!";

    overlayInner.appendChild(simplecontent);
    overlay.setAttribute("class", "gg-man")
    enableListeners();
}

function enableListeners(){
    console.log("we can go back to previous video");

    let keyPressed = {};
    
    document.addEventListener("keydown", function (event){
        keyPressed[event.key] = true;    
        
        if(keyPressed['Control'] && keyPressed['Shift'] && keyPressed['Q']){
            
            console.log("previous page");
            window.history.back();
        }else if(keyPressed['Control'] && keyPressed['Shift'] && keyPressed['E']){
            
            console.log("Next video");
            let nextVideo = document.getElementsByClassName("ytp-next-button ytp-button")[0];
            nextVideo.click();
        
        }else if(keyPressed['Control'] && keyPressed['Shift'] && keyPressed['W']){
            
            console.log("pause video");
            let pauseUnPauseVideo = document.getElementsByClassName("ytp-play-button ytp-button")[0];
    
           // pauseUnPauseVideo.click();

        }else if(keyPressed["F5"]){
            
            let url = new URL(location);
            window.location.href = url;
        
        }else if(keyPressed['Control'] && keyPressed['Shift'] && keyPressed['L']){
            
            console.log("loop");
            if(loopVideo === true)
                loopVideo = false;
            else
                loopVideo = true;
            console.log(loopVideo)
        }
        
        // Cancel the default action to avoid it being handled twice
        event.preventDefault();
    }, true);
    
    document.addEventListener('keyup', (event) => {
        delete keyPressed[event.key];

     });


     
}

init()
