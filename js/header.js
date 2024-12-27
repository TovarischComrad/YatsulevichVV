class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
            <header class="header">
                <h1><a class="a2" href="/YatsulevichVV/index.html">Конспектики.ру</a></h1>
                <div class="contact-info">
                    <div>Email: yatsulevichvv@outlook.com</div>
                    <div>+7 937 965 23 63</div>
                </div>
            </header>
      `;
    }
}
  
customElements.define('header-component', Header);