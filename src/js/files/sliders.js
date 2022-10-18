import Swiper, { Navigation, Keyboard } from "swiper";

import "../../scss/base/swiper.scss";

function initSliders() {
    if (document.querySelector(".tail__swiper")) {
        new Swiper(".tail__swiper", {
            modules: [Navigation, Keyboard],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
            speed: 800,
            loop: true,

            keyboard: {
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true,
            },
            navigation: {
                nextEl: ".tail__arrow_next",
                prevEl: ".tail__arrow_prev",
            },
        });
    }

    if (document.querySelector(".slider-trip__body")) {
        new Swiper(".slider-trip__body", {
            modules: [Navigation, Keyboard],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
            speed: 800,
            loop: true,
            keyboard: {
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true,
            },
            navigation: {
                nextEl: ".trip__arrow_next",
                prevEl: ".trip__arrow_prev",
            },
        });
    }
}

window.addEventListener("load", function (e) {
    initSliders();
});
