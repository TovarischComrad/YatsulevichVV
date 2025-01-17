function TableOfContentOpen() {
    document.querySelector('.tc_mobile').classList.add('active');

    document.getElementsByClassName("header")[0].style.background = "#74A0B6";
    document.getElementsByClassName("footer")[0].style.background = "#74A0B6";
    document.getElementsByClassName("main_content")[0].style.background = "#CCCCCC";
    document.getElementsByClassName("python")[0].style.background = "#CCCCCC";
}

function TableOfContentClose() {
    document.querySelector('.tc_mobile').classList.remove('active');

    document.getElementsByClassName("header")[0].style.background = "#91C8E4";
    document.getElementsByClassName("footer")[0].style.background = "#91C8E4";
    document.getElementsByClassName("main_content")[0].style.background = "#FFFFFF";
    document.getElementsByClassName("python")[0].style.background = "#F6F6F6";
}

window.addEventListener('resize', function(event) {
    var fl = document.querySelector('.tc_mobile').classList.contains("active");
    if (fl && (window.innerWidth >= 650)) {
        TableOfContentClose();
    }
}, true);