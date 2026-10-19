"use strict";


/* =========================================
   LẤY CÁC PHẦN TỬ
========================================= */

const slides = Array.from(
    document.querySelectorAll(".slide")
);

const previousButton =
    document.getElementById("previous");

const nextButton =
    document.getElementById("next");

const slideButtons =
    Array.from(
        document.querySelectorAll(
            "[data-slide-target]"
        )
    );

const counter =
    document.getElementById("counter");


/* =========================================
   LETTER
========================================= */

const envelope =
    document.getElementById("envelope");

const letter =
    document.getElementById("letter");

const letterIntro =
    document.getElementById("letterIntro");

const letterClose =
    document.getElementById("letterClose");


/* =========================================
   WISH
========================================= */

const wishButton =
    document.getElementById("wishButton");

const wishResult =
    document.getElementById("wishResult");


/* =========================================
   STATE
========================================= */

let currentSlide = 0;

let letterIsOpen = false;

let touchStartX = null;


/* =========================================
   CẬP NHẬT SLIDE
========================================= */

function updateSlide() {

    slides.forEach(
        (slide, index) => {

            const isActive =
                index === currentSlide;

            slide.classList.toggle(
                "active",
                isActive
            );

            slide.setAttribute(
                "aria-hidden",
                String(!isActive)
            );
        }
    );


    /* THANH SLIDE */

    slideButtons.forEach(
        (button, index) => {

            const isActive =
                index === currentSlide;

            button.classList.toggle(
                "active",
                isActive
            );

            button.setAttribute(
                "aria-current",
                isActive
                    ? "page"
                    : "false"
            );
        }
    );


    /* NÚT TRÁI */

    previousButton.disabled =
        currentSlide === 0;


    /* NÚT PHẢI */

    nextButton.disabled =
        currentSlide === slides.length - 1;


    /* SỐ TRANG */

    counter.textContent =
        String(currentSlide + 1)
            .padStart(2, "0")
        +
        " / "
        +
        String(slides.length)
            .padStart(2, "0");


    /*
       Nếu rời khỏi trang thư
       thì tự đóng thư
    */

    if (
        currentSlide !== 2 &&
        letterIsOpen
    ) {
        closeLetter();
    }
}


/* =========================================
   CHUYỂN TRANG
========================================= */

function goToSlide(index) {

    if (
        index < 0 ||
        index >= slides.length
    ) {
        return;
    }

    currentSlide = index;

    updateSlide();
}


function nextSlide() {

    if (
        currentSlide <
        slides.length - 1
    ) {
        goToSlide(
            currentSlide + 1
        );
    }
}


function previousSlide() {

    if (
        currentSlide > 0
    ) {
        goToSlide(
            currentSlide - 1
        );
    }
}


/* =========================================
   NÚT TRÁI
========================================= */

previousButton.addEventListener(
    "click",
    previousSlide
);


/* =========================================
   NÚT PHẢI
========================================= */

nextButton.addEventListener(
    "click",
    nextSlide
);


/* =========================================
   CÁC CHẤM SLIDE
========================================= */

slideButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                const target =
                    Number(
                        button.dataset
                            .slideTarget
                    );

                goToSlide(target);
            }
        );
    }
);


/* =========================================
   CÁC NÚT DATA-GO
========================================= */

document
    .querySelectorAll("[data-go]")
    .forEach(
        (button) => {

            button.addEventListener(
                "click",
                () => {

                    const target =
                        Number(
                            button.dataset.go
                        );

                    goToSlide(target);
                }
            );
        }
    );


/* =========================================
   MỞ THƯ
========================================= */

function openLetter() {

    if (letterIsOpen) {
        return;
    }

    letterIsOpen = true;


    /*
       Ẩn phần:

       02
       SECRET LETTER
       Một bức thư nhỏ
       Có một lời nhắn...
    */

    letterIntro.classList.add(
        "hidden"
    );


    /*
       Ẩn phong bì
    */

    envelope.classList.add(
        "hidden"
    );


    /*
       Hiện thư
    */

    letter.classList.add(
        "open"
    );

    letter.setAttribute(
        "aria-hidden",
        "false"
    );


    /*
       Đưa focus vào nút X
    */

    setTimeout(
        () => {
            letterClose.focus();
        },
        150
    );
}


/* =========================================
   ĐÓNG THƯ
========================================= */

function closeLetter() {

    if (!letterIsOpen) {
        return;
    }

    letterIsOpen = false;


    /*
       Hiện lại intro
    */

    letterIntro.classList.remove(
        "hidden"
    );


    /*
       Hiện lại phong bì
    */

    envelope.classList.remove(
        "hidden"
    );


    /*
       Ẩn thư
    */

    letter.classList.remove(
        "open"
    );

    letter.setAttribute(
        "aria-hidden",
        "true"
    );
}


/* =========================================
   CLICK PHONG BÌ
========================================= */

envelope.addEventListener(
    "click",
    openLetter
);


/* =========================================
   CLICK X
========================================= */

letterClose.addEventListener(
    "click",
    closeLetter
);


/* =========================================
   NÚT LỜI CHÚC
========================================= */

wishButton.addEventListener(
    "click",
    () => {

        wishResult.textContent =
            "Chúc bạn luôn được yêu thương, luôn vui và luôn có thật nhiều ngày đẹp. ♡";
    }
);


/* =========================================
   BÀN PHÍM MÁY TÍNH
========================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "ArrowRight"
        ) {
            nextSlide();
        }


        if (
            event.key === "ArrowLeft"
        ) {
            previousSlide();
        }


        if (
            event.key === "Escape" &&
            letterIsOpen
        ) {
            closeLetter();
        }
    }
);


/* =========================================
   VUỐT ĐIỆN THOẠI
========================================= */

document.addEventListener(
    "touchstart",
    (event) => {

        if (
            event.touches.length !== 1
        ) {
            return;
        }

        touchStartX =
            event.touches[0].clientX;
    },
    {
        passive: true
    }
);


document.addEventListener(
    "touchend",
    (event) => {

        if (
            touchStartX === null ||
            event.changedTouches.length !== 1
        ) {
            return;
        }

        const touchEndX =
            event.changedTouches[0].clientX;

        const distance =
            touchEndX - touchStartX;

        touchStartX = null;


        /*
           Vuốt quá ngắn
           => không làm gì
        */

        if (
            Math.abs(distance) < 55
        ) {
            return;
        }


        /*
           Vuốt trái
           => trang sau
        */

        if (distance < 0) {
            nextSlide();
        }


        /*
           Vuốt phải
           => trang trước
        */

        else {
            previousSlide();
        }
    },
    {
        passive: true
    }
);


/* =========================================
   KHỞI TẠO
========================================= */

updateSlide();
