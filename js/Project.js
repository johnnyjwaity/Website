let projectComponentStyles = document.createElement('template');
projectComponentStyles.innerHTML = `
<style>
    .project {
        width: 300px;
        height: 200px;
        background-color: white;
        position: relative;
        z-index: 0;
        transition: transform, width, height, left, right;
        transition-duration: 0.2s;
        transition-timing-function: ease-in-out;
    }
    .project.open{
        position: absolute;
        width: 100%;
        height:100%;
        left: 0;
        top: 0;
        z-index: 2;
        transform: scale(1) !important;
    }
    .project:hover {
        transform: scale(1.1);
        z-index: 1;
        transition-duration: 0.4s;
    }
    .cover {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 1;
        transition: opacity, display;
        transition-duration: 0.8s;
        transition-timing-function: ease-in-out;
    }
    .cover.open {
        opacity: 0;
    }

    .cover img {
        width: 75px;
        height: 75px;
        border-radius: 10px;
    }
</style>
`;

let projectComponentTemplate = document.createElement('template');
projectComponentTemplate.innerHTML = `
<div class="project">
    <div class="cover">
        <img class="cover-icon" />
    </div>
</div>
`;

class Project extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(projectComponentStyles.content.cloneNode(true));
        this.shadowRoot.appendChild(projectComponentTemplate.content.cloneNode(true));
    }
    connectedCallback(){
        let projectID = this.getAttribute("projectID");
        let project = projectManifest[projectID];
        this.shadowRoot.querySelector(".cover-icon").src = project.iconSRC;
        this.shadowRoot.querySelector(".cover").style.background = `linear-gradient(40deg, ${project.color1} 0%, ${project.color2} 100%)`;
        this.shadowRoot.querySelector(".project").addEventListener("click", (e) => {
            this.shadowRoot.querySelector(".project").style.position = "absolute"
            // this.shadowRoot.querySelector(".project").classList.add("open");
            // this.shadowRoot.querySelector(".cover").classList.add("open");
        }, false);
    }
    
}

window.customElements.define('project-box', Project);