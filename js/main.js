$(document).ready(function () {
    const menuButton = $(".plate");
    const body = $("body");
    const prevArrow = $(".slider__button-prev");
    const nextArrow = $(".slider__button-next");
    const unpublishedPrev = $(".unpublished__button-prev");
    const unpublishedNext = $(".unpublished__button-next");
    menuButton.on("click", function () {
        this.classList.toggle("active");
        $(".header__mobile").toggleClass("header__mobile--visible");
        $("body").toggleClass("hidden-scroll");
    });
    $(".carousel").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        prevArrow: prevArrow,
        nextArrow: nextArrow,
        asNavFor: ".slide-adaptive",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 645,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    });
    $(".slide-adaptive").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        asNavFor: ".carousel",
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 645,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    });
    $(".unpublished__books").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: unpublishedPrev,
        nextArrow: unpublishedNext,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1026,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 783,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
    let player;
    $(".video-play").on("click", function onYouTubeIframeAPIReady() {
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
    $("#play1").on("click", function onYouTubeIframeAPIReady() {
        player = new YT.Player("playerSmall", {
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
    $("#play2").on("click", function onYouTubeIframeAPIReady() {
        player = new YT.Player("playerSmall2", {
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
    $("#play3").on("click", function onYouTubeIframeAPIReady() {
        player = new YT.Player("playerSmall3", {
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
