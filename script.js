document.addEventListener("DOMContentLoaded", () => {

    /* ==================================================
       ELEMENTS
    ================================================== */

    const slides =
        Array.from(
            document.querySelectorAll(".slide")
        );

    const nextButton =
        document.getElementById("nextButton");

    const prevButton =
        document.getElementById("prevButton");

    const pageCurrent =
        document.getElementById("pageCurrent");

    const dots =
        Array.from(
            document.querySelectorAll(".slide-dot")
        );

    const nextLinks =
        Array.from(
            document.querySelectorAll("[data-next]")
        );

    const themeToggle =
        document.getElementById("themeToggle");

    const restartButton =
        document.getElementById("restartButton");

    const toast =
        document.getElementById("toast");


    /* LETTER */

    const envelope =
        document.getElementById("envelope");

    const letterCard =
        document.getElementById("letterCard");

    const letterHeading =
        document.getElementById("letterHeading");

    const letterControl =
        document.getElementById("letterControl");


    /* ==================================================
       STATE
    ================================================== */

    let currentIndex = 0;

    let letterIsOpen = false;

    let touchStartX = 0;

    let touchStartY = 0;

    let toastTimer = null;


    /* ==================================================
       HELPERS
    ================================================== */

    function formatPageNumber(number) {
        return String(number).padStart(2, "0");
    }


    function showToast(message) {

        if (!toast) {
            return;
        }

        clearTimeout(toastTimer);

        toast.textContent = message;

        toast.classList.add("show");

        toastTimer = setTimeout(() => {

            toast.classList.remove("show");

        }, 2200);
    }


    /* ==================================================
       LETTER RESET
    ================================================== */

    function resetLetter() {

        letterIsOpen = false;

        envelope.classList.remove("hide");

        letterCard.classList.remove("show");

        letterCard.setAttribute(
            "aria-hidden",
            "true"
        );

        letterHeading.classList.remove("hide");

        letterControl.innerHTML = `
            <span>Mở bức thư</span>
            <strong>→</strong>
        `;

        envelope.setAttribute(
            "aria-label",
            "Mở bức thư"
        );
    }


    /* ==================================================
       OPEN LETTER
    ================================================== */

    function openLetter() {

        if (letterIsOpen) {
            return;
        }

        letterIsOpen = true;


        /* Ẩn tiêu đề */

        letterHeading.classList.add("hide");


        /* Ẩn phong bì */

        envelope.classList.add("hide");


        /*
         * Đợi một chút để chuyển đổi
         * không bị giật.
         */

        window.setTimeout(() => {

            letterCard.classList.add("show");

            letterCard.setAttribute(
                "aria-hidden",
                "false"
            );

        }, 120);


        /* Nút */

        letterControl.innerHTML = `
            <span>Đóng bức thư</span>
            <strong>↩</strong>
        `;


        envelope.setAttribute(
            "aria-label",
            "Đóng bức thư"
        );


        showToast(
            "Bạn đã mở bức thư ♡"
        );
    }


    /* ==================================================
       CLOSE LETTER
    ================================================== */

    function closeLetter() {

        if (!letterIsOpen) {
            return;
        }

        letterIsOpen = false;


        /* Ẩn lá thư */

        letterCard.classList.remove("show");

        letterCard.setAttribute(
            "aria-hidden",
            "true"
        );


        /*
         * Chờ animation lá thư kết thúc
         * rồi mới hiện phong bì.
         */

        window.setTimeout(() => {

            envelope.classList.remove("hide");

            letterHeading.classList.remove("hide");

        }, 260);


        letterControl.innerHTML = `
            <span>Mở bức thư</span>
            <strong>→</strong>
        `;


        envelope.setAttribute(
            "aria-label",
            "Mở bức thư"
        );
    }


    /* ==================================================
       TOGGLE LETTER
    ================================================== */

    function toggleLetter() {

        if (letterIsOpen) {

            closeLetter();

        } else {

            openLetter();

        }
    }


    /* ==================================================
       LETTER EVENTS
    ================================================== */

    envelope.addEventListener(
        "click",
        () => {

            openLetter();

        }
    );


    envelope.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                openLetter();

            }

        }
    );


    letterControl.addEventListener(
        "click",
        () => {

            toggleLetter();

        }
    );


    /* ==================================================
       GO TO SLIDE
    ================================================== */

    function goToSlide(index) {

        /*
         * Giới hạn index.
         */

        if (index < 0) {
            index = 0;
        }

        if (index >= slides.length) {
            index = slides.length - 1;
        }


        /*
         * Nếu đang mở thư mà rời trang thư,
         * đóng thư trước.
         */

        if (
            currentIndex === 2 &&
            index !== 2 &&
            letterIsOpen
        ) {

            resetLetter();

        }


        currentIndex = index;


        /* SLIDES */

        slides.forEach(
            (slide, slideIndex) => {

                const isActive =
                    slideIndex === currentIndex;

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


        /* PAGE NUMBER */

        pageCurrent.textContent =
            formatPageNumber(
                currentIndex + 1
            );


        /* DOTS */

        dots.forEach(
            (dot, dotIndex) => {

                dot.classList.toggle(
                    "active",
                    dotIndex === currentIndex
                );

            }
        );


        /* ARROWS */

        prevButton.classList.toggle(
            "disabled",
            currentIndex === 0
        );

        nextButton.classList.toggle(
            "disabled",
            currentIndex === slides.length - 1
        );

    }


    /* ==================================================
       NEXT
    ================================================== */

    function nextSlide() {

        if (
            currentIndex <
            slides.length - 1
        ) {

            goToSlide(
                currentIndex + 1
            );

        }

    }


    /* ==================================================
       PREVIOUS
    ================================================== */

    function previousSlide() {

        if (currentIndex > 0) {

            goToSlide(
                currentIndex - 1
            );

        }

    }


    /* ==================================================
       NAVIGATION EVENTS
    ================================================== */

    nextButton.addEventListener(
        "click",
        nextSlide
    );


    prevButton.addEventListener(
        "click",
        previousSlide
    );


    nextLinks.forEach(
        (button) => {

            button.addEventListener(
                "click",
                nextSlide
            );

        }
    );


    dots.forEach(
        (dot) => {

            dot.addEventListener(
                "click",
                () => {

                    const target =
                        Number(
                            dot.dataset.goTo
                        );

                    goToSlide(target);

                }
            );

        }
    );


    /* ==================================================
       KEYBOARD
    ================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            /*
             * Không xử lý nếu người dùng đang
             * thao tác với input/textarea.
             */

            const tag =
                document.activeElement?.tagName;

            if (
                tag === "INPUT" ||
                tag === "TEXTAREA"
            ) {
                return;
            }


            if (event.key === "ArrowRight") {

                event.preventDefault();

                nextSlide();

            }


            if (event.key === "ArrowLeft") {

                event.preventDefault();

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


    /* ==================================================
       TOUCH SWIPE
    ================================================== */

    document.addEventListener(
        "touchstart",
        (event) => {

            const touch =
                event.changedTouches[0];

            touchStartX =
                touch.clientX;

            touchStartY =
                touch.clientY;

        },
        {
            passive: true
        }
    );


    document.addEventListener(
        "touchend",
        (event) => {

            const touch =
                event.changedTouches[0];

            const endX =
                touch.clientX;

            const endY =
                touch.clientY;

            const distanceX =
                endX - touchStartX;

            const distanceY =
                endY - touchStartY;


            /*
             * Nếu vuốt chủ yếu theo chiều dọc
             * thì bỏ qua.
             */

            if (
                Math.abs(distanceY) >
                Math.abs(distanceX)
            ) {

                return;

            }


            /*
             * Không đủ khoảng cách thì bỏ qua.
             */

            if (
                Math.abs(distanceX) < 60
            ) {

                return;

            }


            if (distanceX < 0) {

                nextSlide();

            } else {

                previousSlide();

            }

        },
        {
            passive: true
        }
    );


    /* ==================================================
       THEME
    ================================================== */

    const savedTheme =
        localStorage.getItem(
            "20-10-theme"
        );


    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        themeToggle.textContent = "☾";

    } else {

        themeToggle.textContent = "☼";

    }


    themeToggle.addEventListener(
        "click",
        () => {

            const isDark =
                document.body.classList.toggle(
                    "dark"
                );


            if (isDark) {

                themeToggle.textContent = "☾";

                localStorage.setItem(
                    "20-10-theme",
                    "dark"
                );

            } else {

                themeToggle.textContent = "☼";

                localStorage.setItem(
                    "20-10-theme",
                    "light"
                );

            }

        }
    );


    /* ==================================================
       RESTART
    ================================================== */

    restartButton.addEventListener(
        "click",
        () => {

            resetLetter();

            goToSlide(0);

            showToast(
                "Bắt đầu lại món quà ♡"
            );

        }
    );


    /* ==================================================
       INITIAL STATE
    ================================================== */

    resetLetter();

    goToSlide(0);

});
