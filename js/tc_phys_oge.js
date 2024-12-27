class TableOfContent extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        var html = ["oge_phys_formulas.html"];
        var name = ["Формулы"];

        var s = `
            <div class="table_of_content">
                <h2>Разделы</h2>
                <nav class="nav-links">
        `;
        var left = "<a href=\"";
        var center = "\">";
        var right = "</a>";
        
        for (var i = 0; i < html.length; i++) {
            s += left + html[i] + center + name[i] + right;
        }
        s += `
                </nav>
            </div>
        `
        this.innerHTML = s;
    }
}
  
customElements.define('table-of-content', TableOfContent);