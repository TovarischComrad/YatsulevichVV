function TableOfContentOpen() {
    document.querySelector('.tc_mobile').classList.add('active');
    document.getElementById('main_body').classList.add('menu-active');
}

function TableOfContentClose() {
    document.querySelector('.tc_mobile').classList.remove('active');
    document.getElementById('main_body').classList.remove('menu-active');
}

// Закрытие при клике на затемнение
document.getElementById('main_body').addEventListener('click', function (event) {
    if (event.target === this) {
        TableOfContentClose();
    }
});
