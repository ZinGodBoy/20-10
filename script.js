document.addEventListener("DOMContentLoaded", function () {

    /* =================================================
       ELEMENTS
    ================================================= */

    const pages =
        document.querySelectorAll(".page");

    const prevButton =
        document.getElementById("prevButton");

    const nextButton =
        document.getElementById("nextButton");

    const currentPage =
        document.getElementById("currentPage");

    const dots =
        document.querySelectorAll(".dot");

    const themeButton =
        document.getElementById("themeButton");

    const restartButton =
        document.getElementById("restartButton");

    const toast =
        document.getElementById("toast");


    /* LETTER */

    const envelope =
        document.getElementById("envelope");

    const fullLetter =
        document.getElementById("fullLetter");

    const letterIntro =
        document.getElementById("letterIntro");

    const letterButton =
        document.getElementById("letterButton");


    /* =================================================
       PAGE STATE
    ================================================= */

    let pageIndex = 0;

    const totalPages = pages.length;


    /* =================================================
       TOAST
    ================================================= */

    let toastTimer;

    function showToast(message) {

        toast.textContent = message;

        toast.classList.add("show");

        clearTimeout(toastTimer);

        toastTimer = setTimeout(function () {

            toast.classList.remove("show");

        }, 2200);
    }


    /* =================================================
       RESET LETTER
    ================================================= */

    function resetLetter() {

        envelope.classList.remove("hide");

        fullLetter.classList.remove("show");

        letterIntro.classList.remove("hide");

        letterButton.innerHTML = `
            <span>Mở bức thư</span>
            <b>→</b>
        `;

    }


    /* =================================================
       OPEN LETTER
    ================================================= */

    function openLetter() {

        envelope.classList.add("hide");

        letterIntro.classList.add("hide");

        setTimeout(function () {

            fullLetter.classList.add("show");

        }, 180);

        letterButton.innerHTML = `
            <span>Đóng bức thư</span>
            <b>↩</b>
        `;

        showToast(
            "Một lời chúc nhỏ dành riêng cho bạn ♡"
        );
    }


    /* =================================================
       CLOSE LETTER
    ================================================= */

    function closeLetter() {

        fullLetter.classList.remove("show");

        setTimeout(function () {

            envelope.classList.remove("hide");

            letterIntro.classList.remove("hide");

        }, 250);

        letterButton.innerHTML = `
            <span>Mở bức thư</span>
            <b>→</b>
        `;
    }


    /* =================================================
       LETTER TOGGLE
    ================================================= */

    let letterOpen = false;

    function toggleLetter() {

        letterOpen = !letterOpen;

        if (letterOpen) {

            openLetter();

        } else {

            closeLetter();

        }
    }


    envelope.addEventListener(
        "click",
        function () {

            if (!letterOpen) {
                toggleLetter();
            }

        }
    );


    letterButton.addEventListener(
        "click",
        function () {

            toggleLetter();

        }
    );


    /* =================================================
       SHOW PAGE
    ================================================= */

    function showPage(index) {

        if (index < 0) {
            index = 0;
        }

        if (index >= totalPages) {
            index = totalPages - 1;
        }

        pageIndex = index;


        pages.forEach(
            function (page, i) {

                page.classList.toggle(
                    "active",
                    i === pageIndex
                );

            }
        );


        /* PAGE NUMBER */

        currentPage.textContent =
            String(pageIndex + 1).padStart(2, "0");


        /* DOTS */

        dots.forEach(
            function (dot, i) {

                dot.classList.toggle(
                    "active",
                    i === pageIndex
                );

            }
        );


        /* ARROWS */

        prevButton.classList.toggle(
            "disabled",
            pageIndex === 0
        );

        nextButton.classList.toggle(
            "disabled",
            pageIndex === totalPages - 1
        );


        /* Nếu rời trang thư thì reset */

        if (pageIndex !== 2) {

            letterOpen = false;

            resetLetter();

        }

    }


    /* =================================================
       NEXT
    ================================================= */

    function nextPage() {

        if (pageIndex < totalPages - 1) {

            showPage(pageIndex + 1);

        }

    }


    /* =================================================
       PREVIOUS
    ================================================= */

    function previousPage() {

        if (pageIndex > 0) {

            showPage(pageIndex - 1);

        }

    }


    /* =================================================
       ARROW BUTTONS
    ================================================= */

    nextButton.addEventListener(
        "click",
        nextPage
    );

    prevButton.addEventListener(
        "click",
        previousPage
    );


    /* =================================================
       BUTTONS DATA-NEXT
    ================================================= */

    document.querySelectorAll("[data-next]")
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    nextPage
                );

            }
        );


    /* =================================================
       DOT BUTTONS
    ================================================= */

    dots.forEach(
        function (dot) {

            dot.addEventListener(
                "click",
                function () {

                    const target =
                        Number(
                            dot.dataset.pageButton
                        ) - 1;

                    showPage(target);

                }
            );

        }
    );


    /* =================================================
       KEYBOARD
       ← → để chuyển trang
    ================================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "ArrowRight"
            ) {

                nextPage();

            }

            if (
                event.key === "ArrowLeft"
            ) {

                previousPage();

            }

            if (
                event.key === "Escape" &&
                letterOpen
            ) {

                letterOpen = false;

                closeLetter();

            }

        }
    );


    /* =================================================
       TOUCH SWIPE
    ================================================= */

    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener(
        "touchstart",
        function (event) {

            touchStartX =
                event.changedTouches[0].screenX;

        },
        {
            passive: true
        }
    );


    document.addEventListener(
        "touchend",
        function (event) {

            touchEndX =
                event.changedTouches[0].screenX;

            const distance =
                touchEndX - touchStartX;


            if (Math.abs(distance) < 60) {
                return;
            }


            if (distance < 0) {

                nextPage();

            } else {

                previousPage();

            }

        },
        {
            passive: true
        }
    );


    /* =================================================
       THEME
    ================================================= */

    const savedTheme =
        localStorage.getItem(
            "20-10-theme"
        );


    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        themeButton.textContent = "☾";

    }


    themeButton.addEventListener(
        "click",
        function () {

            const dark =
                document.body.classList.toggle(
                    "dark"
                );


            if (dark) {

                themeButton.textContent = "☾";

                localStorage.setItem(
                    "20-10-theme",
                    "dark"
                );

            } else {

                themeButton.textContent = "☼";

                localStorage.setItem(
                    "20-10-theme",
                    "light"
                );

            }

        }
    );


    /* =================================================
       RESTART
    ================================================= */

    restartButton.addEventListener(
        "click",
        function () {

            letterOpen = false;

            resetLetter();

            showPage(0);

            showToast(
                "Bắt đầu lại món quà ♡"
            );

        }
    );


    /* =================================================
       INITIALIZE
    ================================================= */

    showPage(0);

    resetLetter();


    console.log(
        "20/10 Gift — Slide mode loaded."
    );

});
