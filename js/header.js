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




document.addEventListener('contextmenu', function(event) {
    const selectedText = window.getSelection().toString().trim();
    
    if (selectedText) {
        event.preventDefault();
        
        const form = document.createElement('div');
        form.style.position = 'absolute';
        form.style.left = `${event.clientX}px`;
        form.style.top = `${event.clientY}px`;
        form.style.background = 'white';
        form.style.border = '1px solid #ddd';
        form.style.padding = '10px';
        form.style.borderRadius = '5px';
        form.style.zIndex = '1000';
        
        form.innerHTML = `
            <h4>Сообщить об опечатке</h4>
            <p>Выделенный текст: <strong>${selectedText}</strong></p>
            <textarea id="correction" placeholder="Ваш вариант исправления..." rows="3" style="width:100%; margin:5px 0;"></textarea>
            <button id="submit-typo" style="padding:5px 10px; background:#4CAF50; color:white; border:none; cursor:pointer;">
                Отправить
            </button>
        `;
        
        document.body.appendChild(form);
        
        document.getElementById('submit-typo').addEventListener('click', () => {
            const correction = document.getElementById('correction').value;
            const pageUrl = window.location.href;
            
            // Отправка данных (например, через fetch)
            fetch('/api/report-typo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ wrongText: selectedText, correction, pageUrl })
            })
            .then(response => alert('Спасибо! Ошибка отправлена.'))
            .catch(() => alert('Ошибка отправки.'));
            
            document.body.removeChild(form);
        });
        
        // Закрытие формы при клике вне её
        document.addEventListener('click', function closeForm(e) {
            if (!form.contains(e.target)) {
                document.body.removeChild(form);
                document.removeEventListener('click', closeForm);
            }
        });
    }
});