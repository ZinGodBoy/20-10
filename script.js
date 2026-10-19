document.addEventListener("DOMContentLoaded", () => {

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

    const themeBtn =
        document.getElementById("themeBtn");

    const restartBtn =
        document.getElementById("restartBtn");

    const toast =
        document.getElementById("toast");


    /* ================= TOAST ================= */

    let toastTimer;

    function showToast(text) {

        toast.textContent = text;

        toast.classList.add("show");

        clearTimeout(toastTimer);

        toastTimer = setTimeout(() => {
            toast.classList.remove("show");
        }, 2500);
    }


    /* ================= LETTER ================= */

    let opened = false;

    function openLetter() {

        opened = true;

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


    function closeLetter() {

        opened = false;

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


    function toggleLetter() {

        if (opened) {
            closeLetter();
        } else {
            openLetter();
        }
    }


    envelope.addEventListener(
        "click",
        toggleLetter
    );


    envelope.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                toggleLetter();
            }
        }
    );


    openEnvelope.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            toggleLetter();
        }
    );


    /* ================= THEME ================= */

    const savedTheme =
        localStorage.getItem("20-10-theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        themeBtn.textContent = "☾";
    }


    themeBtn.addEventListener(
        "click",
        () => {

            document.body.classList.toggle("dark");

            const dark =
                document.body.classList.contains("dark");

            themeBtn.textContent =
                dark ? "☾" : "☼";

            localStorage.setItem(
                "20-10-theme",
                dark ? "dark" : "light"
            );
        }
    );


    /* ================= RESTART ================= */

    restartBtn.addEventListener(
        "click",
        () => {

            closeLetter();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    );


    /* ================= SMOOTH SCROLL ================= */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const id =
                        link.getAttribute("href");

                    const target =
                        document.querySelector(id);

                    if (!target) return;

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            );
        });

});
