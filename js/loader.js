const scripts = [
    '/YatsulevichVV/js/latex.js',
    'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js',
    '/YatsulevichVV/js/table_of_content.js',
    '/YatsulevichVV/js/header.js',
    '/YatsulevichVV/js/footer.js',
    '/YatsulevichVV/js/mobile.js'
]

function loadScripts(scriptList) {
    scriptList.forEach(src => {
        const script = document.createElement('script');
        script.src = src;
        document.head.appendChild(script);
    });
}

document.addEventListener("load", () => {
    hljs.highlightAll();
    console.log("I am here!");
});

loadScripts(scripts);