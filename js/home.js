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

let animateableObjects = []
animateableObjects.push(...document.querySelectorAll(".st0"))
animateableObjects.push(...document.querySelectorAll(".st1"))
animateableObjects.push(...document.querySelectorAll(".st2"))
animateableObjects.push(...document.querySelectorAll(".st3"))

animateableObjects.forEach(o => {
    o.style.strokeDasharray = o.getTotalLength();
    o.style.strokeDashoffset = o.getTotalLength();
})