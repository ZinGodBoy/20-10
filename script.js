/* =========================================================
   20/10 DIGITAL GIFT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const body = document.body;

    const particles = document.getElementById("particles");

    const envelope = document.getElementById("envelope");
    const envelopeArea = document.getElementById("envelopeArea");

    const openEnvelope =
        document.getElementById("openEnvelope");

    const secretHeading =
        document.getElementById("secretHeading");

    const secretInfo =
        document.getElementById("secretInfo");

    const themeBtn =
        document.getElementById("themeBtn");

    const wishFlower =
        document.getElementById("wishFlower");

    const wishBtn =
        document.getElementById("wishBtn");

    const wishResult =
        document.getElementById("wishResult");

    const restartBtn =
        document.getElementById("restartBtn");

    const toast =
        document.getElementById("toast");


    /* =====================================================
       PARTICLES
    ===================================================== */

    function createParticles() {

        if (!particles) return;

        const count =
            window.innerWidth < 600
                ? 18
                : 32;

        particles.innerHTML = "";

        for (let i = 0; i < count; i++) {

            const particle =
                document.createElement("span");

            particle.className = "particle";

            particle.style.left =
                `${Math.random() * 100}%`;

            particle.style.animationDuration =
                `${6 + Math.random() * 8}s`;

            particle.style.animationDelay =
                `${Math.random() * 8}s`;

            particle.style.width =
                `${2 + Math.random() * 5}px`;

            particle.style.height =
                particle.style.width;

            particles.appendChild(particle);
        }
    }

    createParticles();


    /* =====================================================
       TOAST
    ===================================================== */

    let toastTimer;

    function showToast(message) {

        if (!toast) return;

        toast.textContent = message;

        toast.classList.add("show");

        clearTimeout(toastTimer);

        toastTimer =
            setTimeout(() => {
                toast.classList.remove("show");
            }, 2600);
    }


    /* =====================================================
       HEART BURST
    ===================================================== */

    function createHeartBurst() {

        const rect =
            envelope
                ? envelope.getBoundingClientRect()
                : null;

        if (!rect) return;

        const centerX =
            rect.left + rect.width / 2;

        const centerY =
            rect.top + rect.height / 2;

        for (let i = 0; i < 15; i++) {

            const heart =
                document.createElement("span");

            heart.className = "burst-heart";

            heart.textContent =
                Math.random() > .5
                    ? "♡"
                    : "♥";

            heart.style.left =
                `${centerX}px`;

            heart.style.top =
                `${centerY}px`;

            const angle =
                Math.random() * Math.PI * 2;

            const distance =
                70 + Math.random() * 130;

            heart.style.setProperty(
                "--x",
                `${Math.cos(angle) * distance}px`
            );

            heart.style.setProperty(
                "--y",
                `${Math.sin(angle) * distance}px`
            );

            heart.style.animationDelay =
                `${Math.random() * .15}s`;

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 1500);
        }
    }


    /* =====================================================
       LETTER
    ===================================================== */

    let envelopeOpened = false;

    function openLetter() {

        if (envelopeOpened) return;

        envelopeOpened = true;

        envelope.classList.add("open");

        envelopeArea.classList.add("opened");

        secretHeading.classList.add("hidden");

        secretInfo.classList.add("hidden");

        envelope.setAttribute(
            "aria-expanded",
            "true"
        );

        openEnvelope.innerHTML =
            `
                <span>Đóng bức thư</span>
                <span>↩</span>
            `;

        createHeartBurst();

        showToast(
            "Bạn đã mở bức thư bí mật ♡"
        );

        /*
         * Khi mở thư, cuộn nhẹ tới khu vực
         * bức thư để người dùng nhìn thấy trọn vẹn.
         */
        setTimeout(() => {

            envelopeArea.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 180);
    }


    function closeLetter() {

        if (!envelopeOpened) return;

        envelopeOpened = false;

        envelope.classList.remove("open");

        envelopeArea.classList.remove("opened");

        secretHeading.classList.remove("hidden");

        secretInfo.classList.remove("hidden");

        envelope.setAttribute(
            "aria-expanded",
            "false"
        );

        openEnvelope.innerHTML =
            `
                <span>Nhấn để mở thư</span>
                <span>↗</span>
            `;

        showToast(
            "Bức thư đã được đóng ♡"
        );
    }


    function toggleLetter() {

        if (envelopeOpened) {
            closeLetter();
        } else {
            openLetter();
        }
    }


    if (envelope) {

        envelope.addEventListener(
            "click",
            toggleLetter
        );

        envelope.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    toggleLetter();
                }
            }
        );
    }


    if (openEnvelope) {

        openEnvelope.addEventListener(
            "click",
            (event) => {

                event.stopPropagation();

                toggleLetter();
            }
        );
    }


    /* =====================================================
       THEME
    ===================================================== */

    const savedTheme =
        localStorage.getItem(
            "women-day-theme"
        );

    if (savedTheme === "dark") {

        body.classList.add("dark");

        themeBtn.textContent = "☾";

    } else {

        themeBtn.textContent = "☼";
    }


    if (themeBtn) {

        themeBtn.addEventListener(
            "click",
            () => {

                body.classList.toggle("dark");

                const isDark =
                    body.classList.contains("dark");

                themeBtn.textContent =
                    isDark
                        ? "☾"
                        : "☼";

                localStorage.setItem(
                    "women-day-theme",
                    isDark
                        ? "dark"
                        : "light"
                );
            }
        );
    }


    /* =====================================================
       WISH FLOWER
    ===================================================== */

    let wished = false;

    const wishMessages = [
        "Mong điều bạn ước sẽ trở thành sự thật ♡",

        "Chúc bạn luôn gặp thật nhiều điều tốt đẹp ✦",

        "Hy vọng ngày nào cũng có lý do để bạn mỉm cười ♡",

        "Điều ước đã được gửi đi rồi ❀",

        "Chúc bạn luôn được yêu thương và trân trọng."
    ];


    function makeWish() {

        wished = !wished;

        if (wished) {

            wishFlower.classList.add("bloom");

            const randomIndex =
                Math.floor(
                    Math.random() *
                    wishMessages.length
                );

            wishResult.textContent =
                wishMessages[randomIndex];

            wishBtn.textContent =
                "Điều ước đã gửi ♡";

            createWishBurst();

            showToast(
                "Điều ước của bạn đã được gửi ✦"
            );

        } else {

            wishFlower.classList.remove(
                "bloom"
            );

            wishResult.textContent = "";

            wishBtn.textContent =
                "Gửi điều ước";
        }
    }


    function createWishBurst() {

        if (!wishFlower) return;

        const rect =
            wishFlower.getBoundingClientRect();

        const centerX =
            rect.left + rect.width / 2;

        const centerY =
            rect.top + rect.height / 2;

        for (let i = 0; i < 12; i++) {

            const heart =
                document.createElement("span");

            heart.className =
                "burst-heart";

            heart.textContent = "♡";

            heart.style.left =
                `${centerX}px`;

            heart.style.top =
                `${centerY}px`;

            const angle =
                Math.random() * Math.PI * 2;

            const distance =
                50 + Math.random() * 100;

            heart.style.setProperty(
                "--x",
                `${Math.cos(angle) * distance}px`
            );

            heart.style.setProperty(
                "--y",
                `${Math.sin(angle) * distance}px`
            );

            document.body.appendChild(
                heart
            );

            setTimeout(
                () => heart.remove(),
                1500
            );
        }
    }


    if (wishFlower) {

        wishFlower.addEventListener(
            "click",
            makeWish
        );

        wishFlower.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    makeWish();
                }
            }
        );
    }


    if (wishBtn) {

        wishBtn.addEventListener(
            "click",
            makeWish
        );
    }


    /* =====================================================
       RESTART
    ===================================================== */

    if (restartBtn) {

        restartBtn.addEventListener(
            "click",
            () => {

                closeLetter();

                wished = false;

                if (wishFlower) {
                    wishFlower.classList.remove(
                        "bloom"
                    );
                }

                if (wishResult) {
                    wishResult.textContent = "";
                }

                if (wishBtn) {
                    wishBtn.textContent =
                        "Gửi điều ước";
                }

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

                showToast(
                    "Đã trở về trang đầu ♡"
                );
            }
        );
    }


    /* =====================================================
       SMOOTH NAVIGATION
    ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                (event) => {

                    const id =
                        link.getAttribute(
                            "href"
                        );

                    if (!id || id === "#") {
                        return;
                    }

                    const target =
                        document.querySelector(
                            id
                        );

                    if (!target) return;

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            );
        });


    /* =====================================================
       MOUSE HEART TRAIL
    ===================================================== */

    let lastMouseTime = 0;

    document.addEventListener(
        "mousemove",
        (event) => {

            const now =
                Date.now();

            if (
                now - lastMouseTime < 90
            ) {
                return;
            }

            lastMouseTime = now;

            if (
                Math.random() > .55
            ) {
                return;
            }

            const heart =
                document.createElement("span");

            heart.className =
                "mouse-heart";

            heart.textContent =
                Math.random() > .5
                    ? "♡"
                    : "·";

            heart.style.left =
                `${event.clientX}px`;

            heart.style.top =
                `${event.clientY}px`;

            document.body.appendChild(
                heart
            );

            setTimeout(
                () => heart.remove(),
                900
            );
        }
    );


    /* =====================================================
       CLICK HEART EFFECT
    ===================================================== */

    document.addEventListener(
        "click",
        (event) => {

            /*
             * Không tạo thêm hiệu ứng khi click
             * vào các phần tử tương tác chính.
             */
            if (
                event.target.closest(
                    "#envelope, #openEnvelope, #wishBtn, #wishFlower, #themeBtn"
                )
            ) {
                return;
            }

            const heart =
                document.createElement("span");

            heart.className =
                "mouse-heart";

            heart.textContent = "♡";

            heart.style.left =
                `${event.clientX}px`;

            heart.style.top =
                `${event.clientY}px`;

            heart.style.fontSize =
                "16px";

            document.body.appendChild(
                heart
            );

            setTimeout(
                () => heart.remove(),
                900
            );
        }
    );


    /* =====================================================
       RESIZE
    ===================================================== */

    window.addEventListener(
        "resize",
        () => {
            createParticles();
        }
    );

});
