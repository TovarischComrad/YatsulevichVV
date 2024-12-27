class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
            <div class="header">
                <h1>Конспектики.ру</h1>

            </div>
      `;
    }
}
  
customElements.define('header-component', Header);