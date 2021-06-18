let componentStyles = document.createElement('template');
componentStyles.innerHTML = `
<style>
    .resume-block {
        max-width: 700px;
        margin-bottom: 40px;
    }
    .resume-block img{
        width: 60px;
        height: 60px;
        vertical-align: top;
    }
    .resume-block div {
        display: inline-block;
        margin: 0;
        padding-left: 8px;
    }
    .resume-block h3 {
        font-size: 24px;
        margin: 0 0 8px 0;
    }
    .resume-block h4{
        margin-top: 0;
        margin-bottom: 0;
        color: rgb(75, 75, 75);
        font-size: 18px;
        font-weight: bold;
        font-style: italic;
    }
</style>
`;

let componentTemplate = document.createElement('template');
componentTemplate.innerHTML = `
<div class="resume-block">
    <img />
    <div>
        <h3></h3>
        <h4></h4>
    </div>
    <p></p>
</div>
`;

class ResumeBlock extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(componentStyles.content.cloneNode(true));
        this.shadowRoot.appendChild(componentTemplate.content.cloneNode(true));
    }
    connectedCallback(){
        let title = this.getAttribute("title");
        let subtitle = this.getAttribute("subtitle");
        let imgSrc = this.getAttribute("img");
        let content = this.getAttribute("content");
        this.shadowRoot.querySelector("h3").innerHTML = title;
        this.shadowRoot.querySelector("h4").innerHTML = subtitle;
        this.shadowRoot.querySelector("img").src = imgSrc;
        this.shadowRoot.querySelector("p").innerHTML = content;
    }
}

window.customElements.define('resume-block', ResumeBlock);