(function () {
    const header = document.querySelector(".header");
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add("header-scrol");
        }
        else {
            header.classList.remove("header-scrol");
        }
    };
}());

// Burger

(function () {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".header-buttons");
    const close = document.querySelector(".header-nav-close");
    burger.addEventListener("click", () => {
        menu.classList.add("header-buttons-active");
    });
        close.addEventListener("click", () => {
        menu.classList.remove("header-buttons-active");
    });

}());