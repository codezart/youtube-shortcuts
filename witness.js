const url = new URL(location);
let youtubeUrl = new RegExp("^(https://youtube.com)"); 
console.log(youtubeUrl.test(url)+"this is youtube!");