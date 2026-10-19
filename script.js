/* =================================
   20/10 INTERACTIVE WEBSITE
================================= */

const effects = document.getElementById("effects");
const openBtn = document.getElementById("openBtn");
const message = document.getElementById("message");

const envelope = document.getElementById("envelope");
const typingText = document.getElementById("typingText");

const flowerBtn = document.getElementById("flowerBtn");
const bouquetContainer = document.getElementById("bouquetContainer");

const musicBtn = document.getElementById("musicBtn");
const themeBtn = document.getElementById("themeBtn");

const saveBtn = document.getElementById("saveBtn");
const bgMusic = document.getElementById("bgMusic");


/* =================================
   LỜI CHÚC
================================= */

const wishText =
    "Chúc bạn có một ngày 20/10 thật vui vẻ, luôn được yêu thương, luôn mỉm cười và gặp thật nhiều điều tốt đẹp. Mong rằng những ngày phía trước sẽ luôn có thật nhiều niềm vui và những người tuyệt vời bên cạnh bạn. 💖";


/* =================================
   MỞ LỜI CHÚC
================================= */

openBtn.addEventListener("click", () => {

    message.classList.add("show");

    message.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    createHeartBurst();

});


/* =================================
   PHONG THƯ
================================= */

envelope.addEventListener("click", () => {

    const isOpen = envelope.classList.toggle("open");

    if (isOpen) {

        typingText.textContent = "";

        typeText(
            wishText,
            0
        );

        createHeartBurst();

    }

});


function typeText(text, index) {

    if (index >= text.length) {
        return;
    }

    typingText.textContent += text[index];

    setTimeout(() => {

        typeText(
            text,
            index + 1
        );

    }, 35);

}


/* =================================
   TIM KHI CLICK
================================= */

document.addEventListener("click", (event) => {

    if (
        event.target.closest("button") ||
        event.target.closest(".envelope")
    ) {
        return;
    }

    createClickHeart(
        event.clientX,
        event.clientY
    );

});


function createClickHeart(x, y) {

    const heart = document.createElement("div");

    heart.className = "click-heart";

    const hearts = [
        "💗",
        "💖",
        "💕",
        "💓",
        "🌸",
        "🌷"
    ];

    heart.textContent =
        hearts[
            Math.floor(
                Math.random() * hearts.length
            )
        ];

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);

}


/* =================================
   HEART BURST
================================= */

function createHeartBurst() {

    for (let i = 0; i < 15; i++) {

        setTimeout(() => {

            const heart =
                document.createElement("div");

            heart.className = "click-heart";

            heart.textContent = [
                "💗",
                "💖",
                "💕",
                "🌸"
            ][Math.floor(Math.random() * 4)];

            heart.style.left =
                `${45 + Math.random() * 10}%`;

            heart.style.top =
                `${45 + Math.random() * 10}%`;

            heart.style.fontSize =
                `${18 + Math.random() * 20}px`;

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 1000);

        }, i * 60);

    }

}


/* =================================
   HOA RƠI
================================= */

const fallingIcons = [
    "🌸",
    "🌷",
    "🌹",
    "💗",
    "💕",
    "✨"
];


function createFallingIcon() {

    const item =
        document.createElement("div");

    item.className = "falling";

    item.textContent =
        fallingIcons[
            Math.floor(
                Math.random() *
                fallingIcons.length
            )
        ];

    item.style.left =
        `${Math.random() * 100}vw`;

    item.style.fontSize =
        `${12 + Math.random() * 18}px`;

    item.style.animationDuration =
        `${5 + Math.random() * 7}s`;

    item.style.opacity =
        `${.4 + Math.random() * .6}`;

    effects.appendChild(item);

    setTimeout(() => {
        item.remove();
    }, 13000);

}


setInterval(
    createFallingIcon,
    500
);


/* =================================
   TẠO BÓ HOA
================================= */

const flowers = [
    ["🌹", "🌷", "🌸", "🌺"],
    ["🌸", "🌹", "🌷", "💐"],
    ["🌺", "🌷", "🌹", "🌸"],
    ["🌷", "🌸", "🌺", "🌹"]
];


flowerBtn.addEventListener("click", () => {

    createBouquet();

});


function createBouquet() {

    const bouquet =
        document.createElement("div");

    bouquet.className = "bouquet";

    const randomFlowers =
        flowers[
            Math.floor(
                Math.random() *
                flowers.length
            )
        ];

    bouquet.innerHTML = `

        <div class="flowers">

            <div class="flower">
                ${randomFlowers[0]}
            </div>

            <div class="flower">
                ${randomFlowers[1]}
            </div>

            <div class="flower">
                ${randomFlowers[2]}
            </div>

            <div class="flower">
                ${randomFlowers[3]}
            </div>

            <div class="leaf left">
                🌿
            </div>

            <div class="leaf right">
                🌿
            </div>

        </div>

        <div class="wrapper"></div>

        <div class="ribbon"></div>

    `;

    bouquetContainer.prepend(bouquet);

    createHeartBurst();

}


/* =================================
   NHẠC
================================= */

let musicPlaying = false;

musicBtn.addEventListener("click", async () => {

    try {

        if (!musicPlaying) {

            await bgMusic.play();

            musicPlaying = true;

            musicBtn.textContent = "🔊";

        } else {

            bgMusic.pause();

            musicPlaying = false;

            musicBtn.textContent = "🔇";

        }

    } catch (error) {

        alert(
            "Hãy đặt file nhạc tên music.mp3 cùng thư mục với index.html nhé!"
        );

    }

});


/* =================================
   DARK MODE
================================= */

let darkMode =
    localStorage.getItem("20oct-dark") === "true";


function updateTheme() {

    document.body.classList.toggle(
        "dark",
        darkMode
    );

    themeBtn.textContent =
        darkMode ? "☀️" : "🌙";

}


updateTheme();


themeBtn.addEventListener("click", () => {

    darkMode = !darkMode;

    localStorage.setItem(
        "20oct-dark",
        darkMode
    );

    updateTheme();

});


/* =================================
   NÚT LƯU
================================= */

saveBtn.addEventListener("click", () => {

    alert(
        "💖 Hãy chụp màn hình trang này để lưu lại lời chúc 20/10 nhé!"
    );

    createHeartBurst();

});


/* =================================
   CHẠY HOA BAN ĐẦU
================================= */

setTimeout(() => {

    createBouquet();

}, 800);
