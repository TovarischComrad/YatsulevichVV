class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
            <div class="header">
                <div class="row">
                    <div class="column_33">
                        <h1><a class="a1" href="../../index.html">Конспектики.ру</h1>
                    </div>
                    <div class="column_33">
                       
                    </div>
                    <div class="column_33">
                        
                    </div>
                </div>
            </div>
      `;
    }
  }
  
  customElements.define('header-component', Header);