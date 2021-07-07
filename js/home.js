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