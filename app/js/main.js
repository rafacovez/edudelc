const body = document.querySelector("body");
const modalBg = document.querySelector(".modal-wrapper");
const nav = document.querySelector(".nav-menu");
const navOpenBtn = document.getElementById("burgerWrapper");
const navCloseBtn = document.getElementById("xWrapper");

navOpenBtn.addEventListener("click", navOpen);
navCloseBtn.addEventListener("click", navClose);

function navOpen() {
    body.style.overflow = "hidden";
    modalBg.style.visibility = "visible";
    modalBg.style.opacity = "1";
    nav.style.visibility = "visible";
    nav.style.opacity = "1";
    nav.style.transform = "translateY(-100px)";
}

function navClose() {
    body.style.overflow = "visible";
    modalBg.style.visibility = "hidden";
    modalBg.style.opacity = "0";
    nav.style.visibility = "hidden";
    nav.style.opacity = "0";
    nav.style.transform = "translateY(100px)";
}