class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
            <div class="header">
                <div class="row">
                    <div class="column_33">
                        <h1><a href="../../../index.html">Конспектики.ру</a></h1>
                    </div>
                    <div class="column_33">
                        <h1><a href="../oge.html">ОГЭ</a></h1>
                    </div>
                    <div class="column_33">
                        
                    </div>
                </div>
            </div>
      `;
    }
  }
  
  customElements.define('header-component', Header);