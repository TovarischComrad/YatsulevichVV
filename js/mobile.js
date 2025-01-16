function TableOfContentOpen() {
    // document.getElementsByClassName("tc_mobile")[0].style.display = "block";
    // document.getElementsByClassName("table_of_content")[0].style.display = "block";

    document.querySelector('.tc_mobile').classList.add('active');

    document.getElementsByClassName("header")[0].style.background = "#74A0B6";
    document.getElementsByClassName("footer")[0].style.background = "#74A0B6";
    document.getElementsByClassName("main_content")[0].style.background = "#CCCCCC";
}

function TableOfContentClose() {
    // document.getElementsByClassName("tc_mobile")[0].style.display = "none";
    // document.getElementsByClassName("table_of_content")[0].style.display = "none";
    document.querySelector('.tc_mobile').classList.remove('active');

    document.getElementsByClassName("header")[0].style.background = "#91C8E4";
    document.getElementsByClassName("footer")[0].style.background = "#91C8E4";
    document.getElementsByClassName("main_content")[0].style.background = "#FFFFFF";
}