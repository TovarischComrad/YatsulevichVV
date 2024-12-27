class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">
                <div>© Яцулевич Владимир, 2024.</div>
                <div>Разработчики сайта</div>
            </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);