$(document).ready(function () {
    const menuButton = $(".plate");
    const body = $("body");
    const prevArrow = $(".slider__button--prev");
    const nextArrow = $(".slider__button--next");
    menuButton.on("click", function () {
        this.classList.toggle("active");
        $(".header__mobile").toggleClass("header__mobile--visible");
        $("body").toggleClass("hidden-scroll");
    });

    $(".slide").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: prevArrow,
        nextArrow: nextArrow,
        // responsive: [
        //     {
        //         breakpoint: 1200,
        //         settings: {
        //             slidesToShow: 3,
        //         },
        //     },
        // ],
    });

    var player;
    $(".video__play").on("click", function onYouTubeIframeAPIReady() {
        player = new YT.Player("player", {
            width: "100%",
            videoId: "4EoUz39nPMM",
            events: {
                onReady: videoPlay,
            },
        });

        function videoPlay(event) {
            event.target.playVideo();
        }
    });
});
