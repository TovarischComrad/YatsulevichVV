class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">
                <div>© Яцулевич Владимир, 2024.</div>
                <div><a class="a_black" href="/YatsulevichVV/privacy.html">Разработчики сайта</a></div>
            </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);