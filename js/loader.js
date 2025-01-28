// async function loadScripts() {
//     await import('https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js');
//     await import('/YatsulevichVV/js/dynamic_tc.js');
//     await import('/YatsulevichVV/js/header.js');
//     await import('/YatsulevichVV/js/footer.js');
//     await import('/YatsulevichVV/js/mobile.js')
// }

const scripts = [
    'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js',
    'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/go.min.js',
    '/YatsulevichVV/js/table_of_content.js',
    '/YatsulevichVV/js/header.js',
    '/YatsulevichVV/js/footer.js',
    '/YatsulevichVV/js/mobile.js',
    '/YatsulevichVV/js/other.js'
]

function loadScripts(scriptList) {
    scriptList.forEach(src => {
        const script = document.createElement('script');
        script.src = src;
        script.defer = true;
        document.head.appendChild(script);
    });
}

loadScripts(scripts);