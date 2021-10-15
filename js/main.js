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
    $(".recommendation__button img").on("click", function (e) {
        if ($(this).attr("src") === "./img/heart.svg") {
            $(this).attr("src", "./img/red-heart.svg");
        } else {
            $(this).attr("src", "./img/heart.svg");
        }
    });
    $(".carousel").slick({
        slidesToShow: 4,
        infinite: false,
        slidesToScroll: 1,
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
        infinite: false,
        slidesToScroll: 1,
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
        slidesToScroll: 5,
        infinite: false,
        prevArrow: unpublishedPrev,
        nextArrow: unpublishedNext,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1164,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 1026,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 783,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
    const modalButton = $("[data-toggle=modal]");
    const closeModalButton = $(".modal__close");
    modalButton.on("click", openModal);
    closeModalButton.on("click", closeModal);

    const modalOverlay = $(".modal__overlay");
    const modalDialog = $(".modal__dialog");
    const form = $(".form");

    function openModal() {
        modalOverlay.addClass("modal__overlay--visible");
        modalDialog.addClass("modal__dialog--visible");
        $("body").addClass("hidden-scroll");
    }

    function closeModal(event) {
        event.preventDefault();
        modalOverlay.removeClass("modal__overlay--visible");
        modalDialog.removeClass("modal__dialog--visible");
        $("body").removeClass("hidden-scroll");
    }
    document.addEventListener("keydown", (event) => {
        if (event.code === "Escape") {
            modalOverlay.removeClass("modal__overlay--visible");
            modalDialog.removeClass("modal__dialog--visible");
            $("body").removeClass("hidden-scroll");
        }
    });
    // Обработка форм
    // form.each(function () {
    //     $(this).validate({
    //         errorClass: "invalid",
    //         messages: {
    //             name: {
    //                 required: "Please specify your name",
    //                 minlength: "Name must be at least 2 letters long",
    //             },
    //             email: {
    //                 required: "We need your email address to contact you",
    //                 email: "Your email address must be in the format of name@domain.com",
    //             },
    //             phone: {
    //                 required: "Phone is required",
    //                 minlength: "You must enter 10 digits of the number",
    //             },
    //         },
    //     });
    // });
    // $("input[name*='phone']").mask("+7(999) 999-9999");
});
