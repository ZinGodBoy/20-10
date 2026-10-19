/* =========================================
   20/10 GIFT PROJECT
   Không cần thư viện JS ngoài
========================================= */


/* =========================
   PARTICLES
========================= */

const particles = document.getElementById("particles");

const symbols = [
    "♡",
    "✿",
    "❀",
    "✦",
    "·"
];

function createParticle() {

    const particle = document.createElement("span");

    particle.className = "particle";

    particle.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.fontSize =
        (8 + Math.random() * 15) + "px";

    particle.style.animationDuration =
        (7 + Math.random() * 8) + "s";

    particle.style.animationDelay =
        Math.random() * 3 + "s";

    particle.style.color =
        Math.random() > .5
            ? "#ef6688"
            : "#c7a7cf";

    particles.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 16000);
}

setInterval(createParticle, 550);


/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll("[data-scroll]").forEach(button => {

    button.addEventListener("click", () => {

        const target =
            document.querySelector(
                button.dataset.scroll
            );

        if (!target) return;

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* =========================
   ENVELOPE
========================= */

const envelope =
    document.getElementById("envelope");

const openEnvelope =
    document.getElementById("openEnvelope");

let envelopeOpened = false;

openEnvelope.addEventListener("click", () => {

    envelopeOpened = !envelopeOpened;

    envelope.classList.toggle(
        "open",
        envelopeOpened
    );

    if (envelopeOpened) {

        openEnvelope.textContent =
            "♡ Thư đã được mở";

        showToast(
            "Một lời chúc đang chờ bạn ở bên trong ♡"
        );

        createHeartBurst();

    } else {

        openEnvelope.textContent =
            "Nhấn để mở thư";

    }

});


/* =========================
   HEART BURST
========================= */

function createHeartBurst() {

    const count = 18;

    for (let i = 0; i < count; i++) {

        const heart =
            document.createElement("span");

        heart.textContent =
            Math.random() > .5
                ? "♡"
                : "✦";

        heart.style.position = "fixed";
        heart.style.left = "50%";
        heart.style.top = "48%";
        heart.style.zIndex = "999";

        heart.style.color =
            Math.random() > .5
                ? "#ef6688"
                : "#c99ad5";

        heart.style.fontSize =
            10 + Math.random() * 18 + "px";

        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            80 + Math.random() * 180;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        heart.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) scale(.2)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        ) scale(1)`,
                    opacity: 0
                }
            ],
            {
                duration:
                    900 + Math.random() * 500,
                easing:
                    "cubic-bezier(.2,.8,.2,1)"
            }
        ).onfinish = () => heart.remove();

    }
}


/* =========================
   WISH FLOWER
========================= */

const wishFlower =
    document.getElementById("wishFlower");

const wishBtn =
    document.getElementById("wishBtn");

const wishResult =
    document.getElementById("wishResult");

const wishes = [
    "Mong mọi điều bạn mong muốn đều dần trở thành hiện thực. ♡",

    "Mong nụ cười luôn ở bên bạn trong những ngày phía trước. ✿",

    "Mong bạn luôn được yêu thương theo cách bạn xứng đáng. ♡",

    "Mong những điều dịu dàng nhất sẽ tìm đến bạn. 🌷",

    "Mong hôm nay thật vui và những ngày sau cũng vậy. ✦"
];

wishBtn.addEventListener("click", () => {

    wishFlower.classList.remove("bloom");

    void wishFlower.offsetWidth;

    wishFlower.classList.add("bloom");

    const wish =
        wishes[
            Math.floor(
                Math.random() * wishes.length
            )
        ];

    wishResult.textContent = wish;

    createHeartBurst();

    showToast("Điều ước đã được gửi đi ✨");

});


/* =========================
   TOAST
========================= */

const toast =
    document.getElementById("toast");

const toastText =
    toast.querySelector("p");

let toastTimer;

function showToast(message) {

    toastText.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer =
        setTimeout(() => {
            toast.classList.remove("show");
        }, 2800);

}


/* =========================
   THEME
========================= */

const themeBtn =
    document.getElementById("themeBtn");

const savedTheme =
    localStorage.getItem("20-10-theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeBtn.textContent = "☾";
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const dark =
        document.body.classList.contains("dark");

    themeBtn.textContent =
        dark ? "☾" : "☼";

    localStorage.setItem(
        "20-10-theme",
        dark ? "dark" : "light"
    );

});


/* =========================
   RESTART
========================= */

const restartBtn =
    document.getElementById("restartBtn");

restartBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (envelopeOpened) {

        envelopeOpened = false;

        envelope.classList.remove("open");

        openEnvelope.textContent =
            "Nhấn để mở thư";

    }

    wishResult.textContent = "";

});


/* =========================
   MOUSE FLOWER TRAIL
========================= */

let lastTrail = 0;

document.addEventListener("pointermove", event => {

    const now = Date.now();

    if (now - lastTrail < 80) return;

    lastTrail = now;

    const trail =
        document.createElement("span");

    trail.textContent =
        Math.random() > .5
            ? "✦"
            : "·";

    trail.style.position = "fixed";
    trail.style.left = event.clientX + "px";
    trail.style.top = event.clientY + "px";

    trail.style.color =
        "#ef6688";

    trail.style.fontSize =
        "9px";

    trail.style.pointerEvents =
        "none";

    trail.style.zIndex =
        "1000";

    document.body.appendChild(trail);

    trail.animate(
        [
            {
                transform:
                    "translate(-50%, -50%) scale(1)",
                opacity: .8
            },
            {
                transform:
                    "translate(-50%, -100px) scale(.1)",
                opacity: 0
            }
        ],
        {
            duration: 700,
            easing: "ease-out"
        }
    ).onfinish = () => trail.remove();

});


/* =========================
   CLICK EFFECT
========================= */

document.addEventListener("click", event => {

    if (
        event.target.closest("button") ||
        event.target.closest("a") ||
        event.target.closest(".wish-flower")
    ) {

        const ripple =
            document.createElement("span");

        ripple.style.position = "fixed";
        ripple.style.left = event.clientX + "px";
        ripple.style.top = event.clientY + "px";

        ripple.style.width = "10px";
        ripple.style.height = "10px";

        ripple.style.border =
            "1px solid rgba(239,102,136,.6)";

        ripple.style.borderRadius =
            "50%";

        ripple.style.transform =
            "translate(-50%,-50%)";

        ripple.style.pointerEvents =
            "none";

        ripple.style.zIndex =
            "1001";

        document.body.appendChild(ripple);

        ripple.animate(
            [
                {
                    width: "10px",
                    height: "10px",
                    opacity: .8
                },
                {
                    width: "70px",
                    height: "70px",
                    opacity: 0
                }
            ],
            {
                duration: 600,
                easing: "ease-out"
            }
        ).onfinish = () =>
            ripple.remove();

    }

});
