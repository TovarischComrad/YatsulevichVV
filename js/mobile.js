function TableOfContentOpen() {
    document.querySelector('.tc_mobile').classList.add('active');
    document.getElementById('main_body').classList.add('menu-active');
}

function TableOfContentClose() {
    document.querySelector('.tc_mobile').classList.remove('active');
    document.getElementById('main_body').classList.remove('menu-active');
}

window.addEventListener('resize', function(event) {
    var fl = document.querySelector('.tc_mobile').classList.contains("active");
    if (fl && (window.innerWidth >= 650)) {
        TableOfContentClose();
    }
}, true);