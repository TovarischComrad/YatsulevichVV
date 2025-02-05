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

    for (var i = 0; i < html.length; i++) {
        var a = document.createElement("a");
        a.setAttribute("href", html[i]);
        a.innerHTML = name[i];
        console.log(a);
        document.getElementById("tc_links").append(a);
        console.log(document.getElementById("tc_links"));
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
        nav_links.setAttribute("id", "tc_links");
        nav_links.setAttribute("class", "nav-links");
        table_of_content.append(nav_links);

        document.getElementById("main_body").append(table_of_content);

        fetch('/YatsulevichVV/source/json/db.json')
            .then((response) => response.json())
            .then((json) => nav_list(json));
    }
}
  
customElements.define('table-of-content', TableOfContent);

