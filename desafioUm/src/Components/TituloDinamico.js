class TituloDinamico extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    /*1 - base do component*/
    const componentRoot = document.createElement("h1");
    componentRoot.textContent = this.getAttribute("love");
    //        componentRoot.textContent = "";

    /*2 - estilizar */
    const style = document.createElement("style");
    style.textContent = `
			h1{
				color:red;
			}
		`;

    /*3 - enviar para a shadow*/
    shadow.appendChild(componentRoot);
    shadow.appendChild(style);
  }
}

customElements.define("titulo-dinamico", TituloDinamico);
