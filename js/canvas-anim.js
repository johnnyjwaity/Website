var images = new Array()
function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image()
        images[i].src = preload.arguments[i]
    }
}
let url = window.location.href;
url = url.split("/");
url = url[0] + "//" + url[2];
let linkArr = []
for(i = 0; i <= 451; i++){
    let numStr = "" + i;
    while(numStr.length < 3){
        numStr = "0" + numStr;
    }
    linkArr.push(url + "/videos/shorts/Main"+ numStr + ".jpg");
}
// console.log(linkArr);
preload(...linkArr);


let canvas = document.querySelector("#mobile-canvas");
let progress = document.querySelector(".progress-bar");
let ctx = canvas.getContext("2d");
let curImage = 0;
setTimeout(() => {
    setInterval(() => {
        curImage = parseFloat(progress.style.width) / 100
        curImage = Math.floor(451 * curImage)
        ctx.drawImage(images[curImage], 0, 0, canvas.width, canvas.height);
    }, 10)
    
}, 1000)

// let vid = document.querySelector("video");
// let progress = document.querySelector(".progress-bar");
// setTimeout(() => {
//     setInterval(() => {
//         curImage = parseFloat(progress.style.width) / 100
//         curImage = vid.duration * curImage
//         console.log(curImage)
//         vid.currentTime = curImage;
//     }, 10)
    
// }, 1000)