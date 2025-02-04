class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
            <header class="header">
                <h1 id="website_header"><a class="a2" href="/YatsulevichVV/index.html">ΔATA.V</a></h1>
                <div class="content-button" onclick="TableOfContentOpen()"><img class="burger" src="/YatsulevichVV/source/image/Vector.svg" width="100%" height="100%"></div>
                <div class="contact-info">
                    <div class="link"><a target="_blank" href="https://t.me/YatsulevichVV"><img src="/YatsulevichVV/source/image/tg.svg"></a></div>
                    <div class="link"><a target="_blank" href="https://vk.com/yatsulevich_vladimir"><img src="/YatsulevichVV/source/image/vk.svg"></a></div>
                </div>
            </header>
      `;
    }
}
  
customElements.define('header-component', Header);