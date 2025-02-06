function nav_list(json) {
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

    var sections = [];
    for (var i = 0; i < html.length; i++) {
        var a = document.createElement("a");
        a.setAttribute("href", html[i]);
        a.innerHTML = name[i];
        sections.push(a);
    }

    var lst = document.getElementsByClassName("nav-links");
    if (lst[0].children.length == 0) {
        for (var i = 0; i < sections.length; i++) {
            lst[0].append(sections[i]);
        }
    }
    else {
        for (var i = 0; i < sections.length; i++) {
            lst[1].append(sections[i]);
        }
    }
}

class TableOfContent extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        var table_of_content = document.createElement("div");
        table_of_content.setAttribute("class", "table_of_content");

        var h2 = document.createElement("h2");
        h2.innerHTML = "Разделы";
        table_of_content.append(h2);

        var nav_links = document.createElement("nav");
        nav_links.setAttribute("class", "nav-links");
        table_of_content.append(nav_links);

        fetch('/YatsulevichVV/source/json/db.json')
            .then((response) => response.json())
            .then((json) => nav_list(json));

        this.append(table_of_content);      
    }
}
  
customElements.define('table-of-content', TableOfContent);