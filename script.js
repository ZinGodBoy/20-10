document.addEventListener("DOMContentLoaded", function () {

    /* =================================================
       GET ELEMENTS
    ================================================= */

    const envelope =
        document.getElementById("envelope");

    const envelopeArea =
        document.getElementById("envelopeArea");

    const openEnvelope =
        document.getElementById("openEnvelope");

    const secretHeading =
        document.getElementById("secretHeading");

    const secretInfo =
        document.getElementById("secretInfo");

    const themeButton =
        document.getElementById("themeButton");

    const restartButton =
        document.getElementById("restartButton");

    const toast =
        document.getElementById("toast");


    /* =================================================
       LETTER STATE
    ================================================= */

    let letterIsOpen = false;


    /* =================================================
       TOAST
    ================================================= */

    let toastTimer = null;

    function showToast(message) {

        if (!toast) {
            return;
        }

        toast.textContent = message;

        toast.classList.add("show");

        if (toastTimer) {
            clearTimeout(toastTimer);
        }

        toastTimer = setTimeout(function () {

            toast.classList.remove("show");

        }, 2400);
    }


    /* =================================================
       OPEN LETTER
    ================================================= */

    function openLetter() {

        if (letterIsOpen) {
            return;
        }

        letterIsOpen = true;

        envelope.classList.add("open");

        envelopeArea.classList.add("opened");

        secretHeading.classList.add("hidden");

        secretInfo.classList.add("hidden");

        envelope.setAttribute(
            "aria-expanded",
            "true"
        );

        openEnvelope.innerHTML = `
            <span>Đóng bức thư</span>
            <b>↩</b>
        `;

        showToast(
            "Bạn đã mở bức thư bí mật ♡"
        );
    }


    /* =================================================
       CLOSE LETTER
    ================================================= */

    function closeLetter() {

        if (!letterIsOpen) {
            return;
        }

        letterIsOpen = false;

        envelope.classList.remove("open");

        envelopeArea.classList.remove("opened");

        secretHeading.classList.remove("hidden");

        secretInfo.classList.remove("hidden");

        envelope.setAttribute(
            "aria-expanded",
            "false"
        );

        openEnvelope.innerHTML = `
            <span>Nhấn để mở thư</span>
            <b>↗</b>
        `;

        showToast(
            "Bức thư đã được đóng ♡"
        );
    }


    /* =================================================
       TOGGLE LETTER
    ================================================= */

    function toggleLetter() {

        if (letterIsOpen) {

            closeLetter();

        } else {

            openLetter();

        }
    }


    /* =================================================
       ENVELOPE CLICK
    ================================================= */

    envelope.addEventListener(
        "click",
        function () {

            toggleLetter();

        }
    );


    /* =================================================
       KEYBOARD
    ================================================= */

    envelope.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                toggleLetter();

            }

        }
    );


    /* =================================================
       BUTTON CLICK
    ================================================= */

    openEnvelope.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            toggleLetter();

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

            document.body.classList.toggle(
                "dark"
            );

            const isDark =
                document.body.classList.contains(
                    "dark"
                );


            if (isDark) {

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
       NAVIGATION
    ================================================= */

    const navigationLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    navigationLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );

                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        }
    );


    /* =================================================
       RESTART
    ================================================= */

    restartButton.addEventListener(
        "click",
        function () {

            closeLetter();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    /* =================================================
       INITIAL STATE
    ================================================= */

    envelope.classList.remove("open");

    envelopeArea.classList.remove(
        "opened"
    );

    secretHeading.classList.remove(
        "hidden"
    );

    secretInfo.classList.remove(
        "hidden"
    );

    envelope.setAttribute(
        "aria-expanded",
        "false"
    );


    /* =================================================
       PAGE LOADED
    ================================================= */

    console.log(
        "20/10 Gift — Loaded successfully."
    );

});
