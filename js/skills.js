let timeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".skills-section",
        pin: true,
        start: "top top",
        end: "+=40000",
        scrub: 1,
    }
})
textSwitch("Skills", "Mobile Apps")
timeline.to(".skill-title", {
    top: "5%",
    fontSize: "75px",
    color: "black",
    duration: 7
})
timeline.to(".skills-section", {
    backgroundColor: "white",
    duration: 3
}, "<");
timeline.to(".mobile-container", {
    display: "flex",
    duration: 0
})
timeline.to("#mobile-canvas", {
    opacity: 1,
    duration: 0
})
timeline.to(".progress-bar", {
    width: "100%",
    duration: 90
})
timeline.to(".skill-project.flux", {
    opacity: 1,
    duration: 2,
    delay: 6
}, "<");
timeline.to(".skill-project.flux", {
    opacity: 0,
    duration: 2,
    delay: 29
}, "<");
timeline.to(".skill-project.map", {
    opacity: 1,
    duration: 2
}, "<");
timeline.to(".mobile-container", {
    opacity: 0,
    display: "none",
    duration: 5
})
timeline.to(".skill-title", {
    top: "40%",
    fontSize: "150px",
    duration: 7,
    color: "#4169E1"
})
textSwitch("Mobile Apps", "Websites")
timeline.to(".skill-title", {
    top: "5%",
    fontSize: "75px",
    duration: 7
})
timeline.to(".web-container", {
    display: "flex",
    duration: 0
})
timeline.to(".prog2", {
    width: "100%",
    duration: 90
})


timeline.to({}, {duration: 0})

function textSwitch(from, to){
    let x = from
    let switched = false
    let toArr = to.split("");
    while(true){
        timeline.to(".skill-title .text", {
            text: x
        })
        if(!switched){
            if(x == ""){
                switched = true;
            }
            x = x.slice(0, -1);
        }else{
            if(x == to){
                return;
            }
            x += toArr.shift();
        }
        
    }
}