let skillComponentStyles = document.createElement('template');
skillComponentStyles.innerHTML = `
<style>
    .resume-skill{
        background-color: white;
        height: 50px;
        border: gray 1px solid;
        border-radius: 25px;
        display: inline-flex;
        justify-content: flex-start;
        align-items: center;
        margin: 0 10px 10px 0;
        transition: all 0.2s ease-in-out;
    }

    .resume-skill:hover {
        transform: scale(1.2);
        margin: 0px 20px 10px 10px;
    }

    .resume-skill img {
        width: 40px;
        height: 40px;
        border-radius: 20px;
        margin: 0 5px;
    }

    .resume-skill p {
        margin-right: 20px;
        font-size: 18px;
        font-weight: bold;
        white-space: nowrap;
    }
</style>
`;

let skillComponentTemplate = document.createElement('template');
skillComponentTemplate.innerHTML = `
<div class="resume-skill">
    <img />
    <p></p>
</div>
`;

class ResumeSkill extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(skillComponentStyles.content.cloneNode(true));
        this.shadowRoot.appendChild(skillComponentTemplate.content.cloneNode(true));
    }
    connectedCallback(){
        let imgSRC = this.getAttribute("img");
        let skill = this.getAttribute("skill");
        this.shadowRoot.querySelector("img").src = imgSRC;
        this.shadowRoot.querySelector("p").innerHTML = skill;
    }
}

window.customElements.define('resume-skill', ResumeSkill);