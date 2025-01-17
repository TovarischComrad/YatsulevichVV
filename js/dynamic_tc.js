class TableOfContent extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        fetch('/YatsulevichVV/source/json/db.json')
            .then((response) => response.json())
            .then((json) => {
        
                var path = window.location.pathname;
                var fileName = "";
                if (path == "/YatsulevichVV/") {
                    fileName = "index.html";
                }
                else {
                    fileName = path.substring(path.lastIndexOf('/') + 1);
                }
                var type = json['types'][fileName];
                var html = Object.keys(json['db'][type]);
                var name = Object.values(json['db'][type]);

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
            });
    }
}
  
customElements.define('table-of-content', TableOfContent);

