class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
            <div class="footer">
                <div>
                    Яцулевич Владимир, 2024
                </div>
            </div>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);