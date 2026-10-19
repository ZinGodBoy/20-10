/* ==================================================
   20/10 WEBSITE - JAVASCRIPT
================================================== */


/* ==================================================
   ELEMENTS
================================================== */

const fallingContainer =
    document.getElementById(
        "fallingContainer"
    );

const clickEffects =
    document.getElementById(
        "clickEffects"
    );

const openWishButton =
    document.getElementById(
        "openWishButton"
    );

const wishSection =
    document.getElementById(
        "wishSection"
    );

const wishCard =
    document.querySelector(
        ".wish-card"
    );

const envelope =
    document.getElementById(
        "envelope"
    );

const typingMessage =
    document.getElementById(
        "typingMessage"
    );

const flowerButton =
    document.getElementById(
        "flowerButton"
    );

const bouquetContainer =
    document.getElementById(
        "bouquetContainer"
    );

const themeButton =
    document.getElementById(
        "themeButton"
    );

const musicButton =
    document.getElementById(
        "musicButton"
    );

const surpriseButton =
    document.getElementById(
        "surpriseButton"
    );

const surpriseText =
    document.getElementById(
        "surpriseText"
    );

const saveButton =
    document.getElementById(
        "saveButton"
    );


/* ==================================================
   WISH
================================================== */

openWishButton.addEventListener(
    "click",
    () => {

        wishCard.classList.add(
            "visible"
        );

        wishSection.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        heartBurst();

    }
);


/* ==================================================
   LETTER
================================================== */

const letterText =
    "Chúc bạn luôn vui vẻ, luôn được yêu thương và có thật nhiều khoảnh khắc đáng nhớ. Mong rằng những ngày phía trước sẽ luôn có thật nhiều niềm vui, may mắn và những điều tốt đẹp đến với bạn. 💖";


let letterOpened = false;

function openEnvelope() {

    if (letterOpened) {

        envelope.classList.remove(
            "open"
        );

        letterOpened = false;

        return;
    }

    envelope.classList.add(
        "open"
    );

    letterOpened = true;

    typingMessage.textContent = "";

    typeMessage(
        letterText,
        0
    );

    heartBurst();

}


envelope.addEventListener(
    "click",
    openEnvelope
);


envelope.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            openEnvelope();

        }

    }
);


/* ==================================================
   TYPING EFFECT
================================================== */

function typeMessage(
    text,
    index
) {

    if (
        index >= text.length
    ) {
        return;
    }

    typingMessage.textContent +=
        text[index];

    setTimeout(
        () => {

            typeMessage(
                text,
                index + 1
            );

        },
        30
    );

}


/* ==================================================
   FALLING FLOWERS
================================================== */

const fallingItems = [
    "🌸",
    "🌷",
    "🌹",
    "🌺",
    "💗",
    "💕",
    "✨",
    "💐"
];


function createFallingItem() {

    if (!fallingContainer) {
        return;
    }

    const item =
        document.createElement(
            "div"
        );

    item.className =
        "falling-item";

    item.textContent =
        fallingItems[
            Math.floor(
                Math.random() *
                fallingItems.length
            )
        ];

    item.style.left =
        Math.random() * 100 + "vw";

    item.style.fontSize =
        12 +
        Math.random() * 18 +
        "px";

    item.style.animationDuration =
        5 +
        Math.random() * 7 +
        "s";

    fallingContainer.appendChild(
        item
    );

    setTimeout(
        () => {
            item.remove();
        },
        13000
    );

}


setInterval(
    createFallingItem,
    550
);


/* ==================================================
   CLICK HEART
================================================== */

document.addEventListener(
    "click",
    (event) => {

        if (
            event.target.closest(
                "button"
            ) ||
            event.target.closest(
                ".envelope"
            )
        ) {
            return;
        }

        createClickHeart(
            event.clientX,
            event.clientY
        );

    }
);


function createClickHeart(
    x,
    y
) {

    const heart =
        document.createElement(
            "div"
        );

    heart.className =
        "click-heart";

    const symbols = [
        "💗",
        "💖",
        "💕",
        "💓",
        "🌸",
        "🌷"
    ];

    heart.textContent =
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];

    heart.style.left =
        x + "px";

    heart.style.top =
        y + "px";

    clickEffects.appendChild(
        heart
    );

    setTimeout(
        () => {
            heart.remove();
        },
        1000
    );

}


/* ==================================================
   HEART BURST
================================================== */

function heartBurst() {

    const centerX =
        window.innerWidth / 2;

    const centerY =
        window.innerHeight / 2;

    for (
        let i = 0;
        i < 16;
        i++
    ) {

        setTimeout(
            () => {

                const angle =
                    Math.random() *
                    Math.PI *
                    2;

                const radius =
                    30 +
                    Math.random() *
                    100;

                createClickHeart(
                    centerX +
                    Math.cos(angle) *
                    radius,

                    centerY +
                    Math.sin(angle) *
                    radius
                );

            },
            i * 45
        );

    }

}


/* ==================================================
   BOUQUET
================================================== */

const flowerSets = [

    [
        "🌹",
        "🌷",
        "🌸",
        "🌺"
    ],

    [
        "🌸",
        "🌹",
        "🌷",
        "💐"
    ],

    [
        "🌺",
        "🌷",
        "🌹",
        "🌸"
    ],

    [
        "🌷",
        "🌸",
        "🌺",
        "🌹"
    ],

    [
        "💐",
        "🌹",
        "🌸",
        "🌷"
    ]

];


flowerButton.addEventListener(
    "click",
    createBouquet
);


function createBouquet() {

    const bouquet =
        document.createElement(
            "div"
        );

    bouquet.className =
        "bouquet";


    const selected =
        flowerSets[
            Math.floor(
                Math.random() *
                flowerSets.length
            )
        ];


    bouquet.innerHTML = `

        <div class="bouquet-flowers">

            <div class="flower">
                ${selected[0]}
            </div>

            <div class="flower">
                ${selected[1]}
            </div>

            <div class="flower">
                ${selected[2]}
            </div>

            <div class="flower">
                ${selected[3]}
            </div>

            <div class="leaf leaf-left">
                🌿
            </div>

            <div class="leaf leaf-right">
                🌿
            </div>

        </div>

        <div class="bouquet-wrapper"></div>

        <div class="bouquet-ribbon"></div>

    `;


    bouquetContainer.prepend(
        bouquet
    );


    /* Không để quá nhiều bó hoa */

    const bouquets =
        bouquetContainer.querySelectorAll(
            ".bouquet"
        );

    if (
        bouquets.length > 6
    ) {

        bouquets[
            bouquets.length - 1
        ].remove();

    }


    heartBurst();

}


/* ==================================================
   DARK MODE
================================================== */

let darkMode =
    localStorage.getItem(
        "20-10-dark-mode"
    ) === "true";


function updateTheme() {

    document.body.classList.toggle(
        "dark",
        darkMode
    );

    themeButton.textContent =
        darkMode
            ? "☀️"
            : "🌙";

}


updateTheme();


themeButton.addEventListener(
    "click",
    () => {

        darkMode =
            !darkMode;

        localStorage.setItem(
            "20-10-dark-mode",
            darkMode
        );

        updateTheme();

    }
);


/* ==================================================
   NHẠC NỀN
   Web Audio API
   Không cần music.mp3
================================================== */

let audioContext = null;

let musicPlaying = false;

let musicTimer = null;

let oscillators = [];


function startMusic() {

    if (musicPlaying) {
        return;
    }


    audioContext =
        new (
            window.AudioContext ||
            window.webkitAudioContext
        )();


    if (
        audioContext.state ===
        "suspended"
    ) {

        audioContext.resume();

    }


    musicPlaying = true;

    musicButton.textContent =
        "🔊";


    playSoftNote();

}


function playSoftNote() {

    if (
        !musicPlaying ||
        !audioContext
    ) {
        return;
    }


    const notes = [
        261.63,
        329.63,
        392.00,
        523.25
    ];


    const frequency =
        notes[
            Math.floor(
                Math.random() *
                notes.length
            )
        ];


    const oscillator =
        audioContext.createOscillator();

    const gain =
        audioContext.createGain();


    oscillator.type =
        "sine";

    oscillator.frequency.value =
        frequency;


    gain.gain.setValueAtTime(
        0,
        audioContext.currentTime
    );


    gain.gain.linearRampToValueAtTime(
        0.035,
        audioContext.currentTime + 0.08
    );


    gain.gain.linearRampToValueAtTime(
        0,
        audioContext.currentTime + 1.8
    );


    oscillator.connect(gain);

    gain.connect(
        audioContext.destination
    );


    oscillator.start();

    oscillator.stop(
        audioContext.currentTime + 1.8
    );


    oscillators.push(
        oscillator
    );


    musicTimer =
        setTimeout(
            playSoftNote,
            700
        );

}


function stopMusic() {

    musicPlaying = false;

    musicButton.textContent =
        "🔇";


    if (musicTimer) {

        clearTimeout(
            musicTimer
        );

        musicTimer = null;

    }


    oscillators.forEach(
        (oscillator) => {

            try {
                oscillator.stop();
            } catch (error) {
                // Đã dừng
            }

        }
    );


    oscillators = [];


    if (audioContext) {

        audioContext.close();

        audioContext = null;

    }

}


musicButton.addEventListener(
    "click",
    () => {

        if (musicPlaying) {

            stopMusic();

        } else {

            startMusic();

        }

    }
);


/* ==================================================
   SURPRISE
================================================== */

let surpriseOpened = false;


surpriseButton.addEventListener(
    "click",
    () => {

        if (!surpriseOpened) {

            surpriseOpened = true;

            surpriseText.innerHTML =
                "🌸 Điều bất ngờ là: <strong>bạn xứng đáng với thật nhiều niềm vui, hạnh phúc và những điều tốt đẹp!</strong> 💖";

            surpriseButton.textContent =
                "💖 Cảm ơn nhé";

            heartBurst();

        } else {

            surpriseText.textContent =
                "Chúc bạn có một ngày 20/10 thật đáng nhớ! 🌷";

            heartBurst();

        }

    }
);


/* ==================================================
   SAVE BUTTON
================================================== */

saveButton.addEventListener(
    "click",
    () => {

        alert(
            "💖 Hãy chụp màn hình trang này để lưu lại lời chúc 20/10 nhé!"
        );

        heartBurst();

    }
);


/* ==================================================
   SCROLL ANIMATION
================================================== */

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },
        {
            threshold: .2
        }
    );


observer.observe(
    wishCard
);


/* ==================================================
   HOA BAN ĐẦU
================================================== */

setTimeout(
    () => {

        createBouquet();

    },
    900
);
