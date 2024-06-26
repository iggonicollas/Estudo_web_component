class TituloDinamico extends HTMLElement {
    constructor(){
    super();

        const shadow = this.attachShadow({ mode: "open"});

        //base
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("titulo");

        //estilo
        const style = document.createElement("style");
        style.textContent = `
            h1{
                color: red;
            }
        `;

        // send shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);

    }
}

customElements.define("titulo-dinamico", TituloDinamico);