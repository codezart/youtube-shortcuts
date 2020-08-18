document.getElementById("downloadVideo").addEventListener('click', function(){
    console.log("clicked download video");
    downloadVideo();
});

function downloadVideo(){
    console.log("clicked download video");

    let url = new uri(location);
    console.log(url);
    let download = document.getElementsById('video_download_link');
    download.setAttribute('download', url);
    download.click();
}
function downloadAudio(){}