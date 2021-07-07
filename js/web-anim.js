let w_canvas = document.getElementById("web-canvas");
let w_ctx = w_canvas.getContext("2d");

let monitor = new Image()
monitor.src = "../images/desktop-cutout.png"

let objects = [
    {
        img: monitor,
        steps: [
            {
                t: 0,
                x: 0,
                y: 0,
                w: 100,
                h: 100,
                a: 1
            }
        ]
    }
]

function animate() {
    objects.forEach(object => {
        let state = object.steps[0]
        w_ctx.save();
        w_ctx.globalAlpha = state.a;
        w_ctx.drawImage(object.img, state.x, state.y, state.w, state.h);
        w_ctx.restore();
    })
    requestAnimationFrame(animate)
}

animate()