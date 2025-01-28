const scripts = [
    '/YatsulevichVV/js/other.js',
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

loadScripts(scripts);