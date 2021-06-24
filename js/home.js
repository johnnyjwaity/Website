// gsap.to(".cover", {
//     width: 75,
//     height: 75,
//     colorProps: {
//         top: "white",
//         bottom: "white"
//     },
//     duration: 3
// })

// gsap.to(".cover-icon", {
//     width: 50,
//     height: 50,
//     duration: 3
// })

VanillaTilt.init(document.querySelectorAll(".project"), {
    max: 10,
    glare: true,
    "max-glare": 0.8
})

let pos = { top: 0, left: 0, x: 0, y: 0 };
let ele = document.querySelector(".project-container")

const mouseDownHandler = function(e) {
    console.log("hi")
    pos = {
        // The current scroll 
        left: ele.scrollLeft,
        top: ele.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
    };

    // document.addEventListener('mousemove', mouseMoveHandler);
//     document.addEventListener('mouseup', mouseUpHandler);
}
// const mouseMoveHandler = function(e) {
//     // How far the mouse has been moved
//     const dx = e.clientX - pos.x;
//     const dy = e.clientY - pos.y;

//     // Scroll the element
//     ele.scrollTop = pos.top - dy;
//     ele.scrollLeft = pos.left - dx;
// };

// const mouseUpHandler = function() {
//     ele.style.cursor = 'grab';
//     ele.style.removeProperty('user-select');
// };

ele.addEventListener("mousedown", mouseDownHandler);