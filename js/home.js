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

// VanillaTilt.init(document.querySelectorAll(".project"), {
//     max: 10,
//     glare: true,
//     "max-glare": 0.8
// })

let animateableObjects = []
animateableObjects.push(...document.querySelectorAll(".st0"))
animateableObjects.push(...document.querySelectorAll(".st1"))
animateableObjects.push(...document.querySelectorAll(".st2"))
animateableObjects.push(...document.querySelectorAll(".st3"))

animateableObjects.forEach(o => {
    o.style.strokeDasharray = o.getTotalLength();
    o.style.strokeDashoffset = o.getTotalLength();
})

setTimeout(() => {
    animateableObjects.forEach(o => {
        o.style.visibility = "visible";
        o.style.strokeDashoffset = 0;
    })
}, 1000)



let mobileAppInfo = {
    overview: {
        title: undefined,
        description: undefined,
        img: undefined,
        skills: []
    },
    flux: {
        title: "Flux",
        description: "Flux is a scoial media app intended to help people get easy answers to their questions. Users are able to ask questions in a variety of different formats and interact with their friends and family's questions. Data from how the questions are answered are displayed in easy intuitive ways inclusing a way where you can see how the answers change over time. The frontend of Flux is built using Swift for iOS and the backedn is a RESTful API made with NodeJS and JavaScript. All sensitive data is encrypted and stored in MongoDB.",
        img: "images/Flux Display.png",
        skills: ["Xcode", "Swift", "Node JS", "JavaScript", "Mongo DB"]
    },
    conantMap: {
        title: "Conant Map",
        description: "Conant Map is an interactive 3D map I made for new students at Conant High School. The map knows the location of all classrooms and areas in the school and uses a modified A* pathfinding algorithm to find the most effective route between rooms. Students are also able to import their schedules straight from the internet for an easier way of finding their way around the building. The app was built using Swift and the backend was a RESTful API made using Node JS and JavaScript. The app is currently available on the Apple App Store for students to download.",
        img: "images/Map Display.png",
        skills: ["Xcode", "Swift", "Node JS", "JavaScript", "Mongo DB"]
    }
}

let fluxLinks = `
<div class="link-box">
    <a class="link-button flux" href="https://www.tryflux.app"><img src="images/icons/web.png"/>Visit Site</a>
    <a class="link-button flux" href="https://github.com/johnnyjwaity/FluxApp"><img src="images/icons/source.png"/>View Source</a>
</div>
`
let mapLinks = `
<div class="link-box">
    <a class="link-button conantMap" href="https://www.conantmap.com"><img src="images/icons/web.png"/>Visit Site</a>
    <a class="link-button conantMap" href="https://github.com/johnnyjwaity/ConantMap"><img src="images/icons/source.png"/>View Source</a>
    <a class="conantMap" href="https://apps.apple.com/us/app/conant-map/id1464615962?itsct=apps_box_badge&amp;itscg=30200"><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1566518400&h=56ebef3f031a582d3e3243a0fc667296" alt="Download on the App Store" style="border-radius: 13px; width: 150px; height: 50px;"></a>
</div>
`
mobileAppInfo.flux.description += fluxLinks;
mobileAppInfo.conantMap.description += mapLinks;

mobileAppInfo.overview.title = document.querySelector(".apps h1").innerText;
mobileAppInfo.overview.description = document.querySelector(".apps .content .left>p").innerText;
mobileAppInfo.overview.img = document.querySelector(".apps .content .right img").src;
Array.from(document.querySelector(".apps ul").children).forEach(c => {
    mobileAppInfo.overview.skills.push(c.innerText);
})

let websiteInfo = {
    overview: {
        title: undefined,
        description: undefined,
        img: undefined,
        skills: []
    },
    positivity: {
        title: "Spread Positivity",
        description: "Spread Positivity was a website I bult in order for my community and the rest of the world to share positive messages with each other during the COVID-19 Pandemic quarentine. Spread Positivty has collected more than a 100 messages from all different parts of the world. Everyone is able to post positive mesagages with and read everyone elses in order to cheer up their day. Feel free to stop by and leave a message. The front end is built using React JS and the backend is a RESTful API built using Node JS and Express. The data is all stored in MongoDB.",
        img: "images/Positivity Display.png",
        skills: ["HTML", "CSS", "JavaScript", "NodeJS", "MongoDB"]
    },
    csk: {
        title: "CompSci Kids",
        description: "CompSci Kids was a club that I joined at my school that teaches 1st through 8th graders about computer science. Besides teaching, I was also the web master for the club. As web master I designed and built web infrastructure for the club that included a registration system that would allow parents to register their kids and would automatically send confirmation emails. I also built administration software for the club that would allow the leaders to manage registration, take attendence and send mass emails tothe parents from a web portal I built using React JS. On top of that I created secure login systems for the administrators with different customizable permission levels per account. The server side was built using Node JS and storage was done in MySQL and MongoDB.",
        img: "images/CSK Display.png",
        skills: ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS", "MySQL"]
    }
}
let positivityLinks = `
<div class="link-box">
    <a class="link-button positivity" href="https://spreadpositivity.net/"><img src="images/icons/web.png"/>Visit Site</a>
    <a class="link-button positivity" href="https://github.com/johnnyjwaity/positivity"><img src="images/icons/source.png"/>View Source</a>
</div>
`
let cskLinks = `
<div class="link-box">
    <a class="link-button csk" href="https://compscikids.net/"><img src="images/icons/web.png"/>Visit Site</a>
</div>
`
websiteInfo.positivity.description += positivityLinks;
websiteInfo.csk.description += cskLinks;

websiteInfo.overview.title = document.querySelector(".web h1").innerText;
websiteInfo.overview.description = document.querySelector(".web .content .left>p").innerText;
websiteInfo.overview.img = document.querySelector(".web .content .right img").src;
Array.from(document.querySelector(".web ul").children).forEach(c => {
    websiteInfo.overview.skills.push(c.innerText);
})






let appCards = document.querySelectorAll(".apps .project-card")
appCards.forEach(c => {
    c.addEventListener("click", switchAppCard);
})

let webCards = document.querySelectorAll(".web .project-card")
webCards.forEach(c => {
    c.addEventListener("click", switchWebCard);
})


function switchAppCard(e) {
    let shouldSet = !e.target.classList.contains("active");
    appCards.forEach(c => {
        c.classList.remove("active");
    })
    if(shouldSet){
        e.target.classList.add("active");
        setSkillContent(mobileAppInfo[e.target.id], ".apps")
    }else{
        setSkillContent(mobileAppInfo.overview, ".apps")
    }
}

function switchWebCard(e) {
    let shouldSet = !e.target.classList.contains("active");
    webCards.forEach(c => {
        c.classList.remove("active");
    })
    if(shouldSet){
        e.target.classList.add("active");
        setSkillContent(websiteInfo[e.target.id], ".web")
    }else{
        setSkillContent(websiteInfo.overview, ".web")
    }
}

function setSkillContent(content, section) {
    let header = document.querySelector(section + " h1")
    let desc = document.querySelector(section + " .content .left>p")
    let list = document.querySelector(section + " ul");
    let img = document.querySelector(section + " .content .right img");

    header.style.opacity = 0;
    desc.style.opacity = 0;
    list.style.opacity = 0;
    img.style.opacity = 0


    setTimeout(() => {
        header.innerText = content.title;
        desc.innerHTML = content.description;
        img.src = content.img;
        list.innerHTML = "";
        content.skills.forEach(s => {
            let item = document.createElement("li");
            item.innerText = s;
            list.appendChild(item);
        })
        header.style.opacity = 1;
        desc.style.opacity = 1;
        list.style.opacity = 1;
        img.style.opacity = 1;
    }, 500);

    
}


function sendMessage(){
    let name = document.querySelector("#name-input").value;
    let email = document.querySelector("#email-input").value;
    let message = document.querySelector("#message-input").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        }
    };
    xhttp.open("POST", "https://gyl096eb46.execute-api.us-east-2.amazonaws.com/default/contactMe", true);
    xhttp.send(JSON.stringify({name: name, email: email, message: message}));

    document.querySelector(".confirmation").style.display = "flex";
}

document.querySelector("#sendButton").addEventListener("click", sendMessage);