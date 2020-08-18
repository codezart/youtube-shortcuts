let downloadYoutubeVideo = document.getElementById("downloadVideo");

downloadYoutubeVideo.onclick = function(element){
    console.log("clicked download video");
    document.createElement("a");
    chrome.tabs.query({active: true, lastFocusedWindow:true}, tabs =>{
        chrome.tabs.executeScript(
            tabs[0].id, { code: `(${ downloadVideo }())` }
        );
        
    });
    
}
function downloadVideo(){
        /*let url = window.location.href;
        let videolink = document.getElementsByClassName("video-stream html5-main-video")[0];
        videolink = videolink.src;
        let link = document.createElement('a');
        link.setAttribute('id',"youtube_helper_video_download_link");
        let download = url.slice(32);
        console.log(url);
        link.setAttribute('download', "download"+".mp4");
        link.setAttribute('href',videolink);
        link.setAttribute('SameSite','None');
        link.setAttribute('type',"video/mp4");

        link.click();
        console.log(link);*/


        let url = window.location.href;
        let urlFirstPart = url.slice(0,12);
        let urlSecondPart = url.slice(12);
        let newUrl = urlFirstPart+"ss"+urlSecondPart;
        let link = document.createElement('a');
        link.setAttribute('href', newUrl);
        link.click();
 
}
function downloadAudio(){}