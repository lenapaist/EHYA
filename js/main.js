$(document).ready(function () {
    const menuButton = $(".plate");
    const body = $("body");
    menuButton.on("click", function () {
        this.classList.toggle("active");
        $(".header__mobile").toggleClass("header__mobile--visible");
        $("body").toggleClass("hidden-scroll");
    });
});
