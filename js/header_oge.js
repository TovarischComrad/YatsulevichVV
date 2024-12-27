class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
            <div class="header">
                <h1><a class="a2" href="../../../index.html">Конспектики.ру</a></h1>
                <div class="contact-info">
                    <div>Email: yatsulevichvv@outlook.com</div>
                    <div>+7 937 965 23 63</div>
                </div>
            </div>
      `;
    }
  }
  
  customElements.define('header-component', Header);