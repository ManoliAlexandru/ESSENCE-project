const shadow = document.querySelector(".nav");

window.addEventListener("scroll" , () => {
    if(window.pageYOffset > 10) {
        shadow.classList.add("shadow");
    }
    else{
        shadow.classList.remove("shadow");
    }
});