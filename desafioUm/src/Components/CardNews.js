class CardNews extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = "Hello World";
  }
}

customElements.define("card-news", CardNews);
