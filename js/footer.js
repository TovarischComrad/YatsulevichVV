class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">
                <div class="author">© Яцулевич Владимир, 2025.</div>
                <div class="privacy"><a class="a_black" href="/YatsulevichVV/privacy.html">Разработчики сайта</a></div>
            </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);