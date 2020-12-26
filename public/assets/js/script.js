
let content = document.querySelector('.categories_cotent');

content.addEventListener("click", function (e) {
    let content_menu = document.querySelector('.sub_menu1');
    content_menu.classList.toggle('_active');
});
