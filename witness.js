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
}

function clickNextVideo(){
    let nextVideo = document.getElementsByClassName("ytp-next-button ytp-button")[0];
    nextVideo.click();
}

init();
