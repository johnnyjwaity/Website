let w_canvas = document.getElementById("web-canvas");
let w_ctx = w_canvas.getContext("2d");

let monitor = new Image()
monitor.src = "../images/desktop-cutout.png"

let positivity = new Image()
positivity.src = "../images/positivity.png"

let objects = [
    {
        img: positivity,
        steps: [
            {
                t: 8,
                x: 130,
                y: 60,
                w: 750,
                h: 425,
                a: 0
            },
            {
                t: 10,
                x: 130,
                y: 60,
                w: 750,
                h: 425,
                a: 1
            },
            {
                t: 20,
                x: 130,
                y: 60,
                w: 750,
                h: 425,
                a: 1
            },
            {
                t: 22,
                x: 130,
                y: 60,
                w: 750,
                h: 425,
                a: 0
            }
        ]
    },
    {
        img: monitor,
        steps: [
            {
                t: 0,
                x: 100,
                y: 50,
                w: 800,
                h: 700,
                a: 0
            },
            {
                t: 5,
                x: 100,
                y: 25,
                w: 800,
                h: 700,
                a: 1
            },
            {
                t: 41,
                x: 100,
                y: 25,
                w: 800,
                h: 700,
                a: 1
            },
            {
                t: 46,
                x: 100,
                y: 50,
                w: 800,
                h: 700,
                a: 0
            },
        ]
    }
]
let background = document.querySelector(".orange-background");
let progressBar = document.querySelector(".prog2")
let testProg = 100;
function animate() {
    let gradientStop;
    let c1;
    let c2;
    if(testProg <= 5){
        gradientStop = 0;
        c1 = "rgba(255,143,0,1)"
        c2 = "rgba(255,255,255,1)"
    }
    else if (testProg > 5 && testProg < 10){
        gradientStop = ((testProg - 5) / 5) * 100
        c1 = "rgba(255,143,0,1)"
        c2 = "rgba(255,255,255,1)"
    }
    else if(testProg >= 10 && testProg <= 20){
        gradientStop = 100;
        c1 = "rgba(255,143,0,1)"
        c2 = "rgba(255,255,255,1)"
    }
    else if (testProg > 20 && testProg < 25){
        gradientStop = ((testProg - 20) / 5) * 100
        c1 = "rgb(255, 0, 0)"
        c2 = "rgba(255,143,0,1)"
    }else if(testProg >= 25 && testProg <= 35){
        gradientStop = 100
        c1 = "rgb(255, 0, 0)"
        c2 = "rgba(255,143,0,1)"
    }else if(testProg > 35 && testProg < 38){
        gradientStop = 100 - (((testProg - 35) / 3) * 100)
        c1 = "rgb(255, 0, 0)"
        c2 = "rgba(255,143,0,1)"
    }else if (testProg >= 38 && testProg <= 41){
        gradientStop = 100 - (((testProg - 38) / 3) * 100)
        c1 = "rgba(255,143,0,1)"
        c2 = "rgba(255,255,255,1)"
    }else{
        gradientStop = 0;
        c1 = "rgba(255,143,0,1)"
        c2 = "rgba(255,255,255,1)"
    }
    background.style.background = `linear-gradient(135deg, ${c1} ${gradientStop}%, ${c2} ${gradientStop}%)`;

    w_ctx.clearRect(0, 0, w_canvas.width, w_canvas.height);
    objects.forEach(object => {
        let s1;
        let s2;
        for(i = 0; i < object.steps.length; i++){
            if(testProg >= object.steps[i].t) {
                s1 = object.steps[i];
                s2 = object.steps[i+1] || s1
            }
        }
        let state = {}
        for(let key in s1){
            if(s1.hasOwnProperty(key)){
                if(key == "t"){
                    continue;
                }
                state[key] = linearInterpolate(s1[key], s2[key], ((testProg - s1.t) / ((s2.t - s1.t) == 0 ? testProg : (s2.t - s1.t))) * 100)
            }
        }
        w_ctx.save();
        w_ctx.globalAlpha = state.a;
        w_ctx.drawImage(object.img, state.x, state.y, state.w, state.h);
        w_ctx.restore();
    })
    testProg = parseFloat(progressBar.style.width);
    requestAnimationFrame(animate)
}

animate()

function linearInterpolate(start, end, prog){
    let m = (end - start) / 100;
    return (m * prog) + start;
}