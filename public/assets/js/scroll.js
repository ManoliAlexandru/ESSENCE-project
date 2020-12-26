const shadow = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 50) {
        shadow.classList.add("shadow");
    }
    else {
        shadow.classList.remove("shadow");
    }
});