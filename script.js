/* =====================================================
   20/10 SLIDE WEBSITE
===================================================== */


/* =====================================================
   ELEMENT
===================================================== */

const slides =
    document.querySelectorAll(".slide");

const nextButton =
    document.getElementById("nextButton");

const prevButton =
    document.getElementById("prevButton");

const slideCounter =
    document.getElementById("slideCounter");

const dotsContainer =
    document.getElementById("dots");

const themeButton =
    document.getElementById("themeButton");

const fallingContainer =
    document.getElementById("fallingContainer");

const clickEffects =
    document.getElementById("clickEffects");

const envelope =
    document.getElementById("envelope");

const typingMessage =
    document.getElementById("typingMessage");

const flowerButton =
    document.getElementById("flowerButton");

const bouquetContainer =
    document.getElementById("bouquetContainer");

const surpriseButton =
    document.getElementById("surpriseButton");

const surpriseText =
    document.getElementById("surpriseText");

const finalMessage =
    document.getElementById("finalMessage");

const restartButton =
    document.getElementById("restartButton");


let currentSlide = 0;


/* =====================================================
   TẠO DOT
===================================================== */

slides.forEach(
    function (_, index) {

        const dot =
            document.createElement("button");

        dot.className =
            "dot";

        dot.setAttribute(
            "aria-label",
            "Đến slide " + (index + 1)
        );


        dot.addEventListener(
            "click",
            function () {

                goToSlide(index);

            }
        );


        dotsContainer.appendChild(
            dot
        );

    }
);


const dots =
    document.querySelectorAll(".dot");


/* =====================================================
   CHUYỂN SLIDE
===================================================== */

function goToSlide(index) {

    if (index < 0) {

        index =
            slides.length - 1;

    }


    if (index >= slides.length) {

        index = 0;

    }


    slides.forEach(
        function (slide, i) {

            slide.classList.remove(
                "active"
            );

            slide.classList.remove(
                "previous"
            );


            if (i < index) {

                slide.classList.add(
                    "previous"
                );

            }

        }
    );


    slides[index].classList.add(
        "active"
    );


    currentSlide =
        index;


    updateNavigation();


    /* Mỗi lần chuyển slide có vài hạt sáng */

    if (index !== 0) {

        smallSparkle();

    }

}


/* =====================================================
   CẬP NHẬT NAV
===================================================== */

function updateNavigation() {

    slideCounter.textContent =
        `${currentSlide + 1} / ${slides.length}`;


    dots.forEach(
        function (dot, index) {

            dot.classList.toggle(
                "active",
                index === currentSlide
            );

        }
    );


    if (currentSlide === 0) {

        prevButton.style.opacity =
            ".45";

    } else {

        prevButton.style.opacity =
            "1";

    }


    if (
        currentSlide ===
        slides.length - 1
    ) {

        nextButton.style.opacity =
            ".45";

    } else {

        nextButton.style.opacity =
            "1";

    }

}


/* =====================================================
   NÚT TIẾP THEO
===================================================== */

nextButton.addEventListener(
    "click",
    function () {

        goToSlide(
            currentSlide + 1
        );

    }
);


/* =====================================================
   NÚT QUAY LẠI
===================================================== */

prevButton.addEventListener(
    "click",
    function () {

        goToSlide(
            currentSlide - 1
        );

    }
);


/* =====================================================
   CÁC NÚT "TIẾP THEO" TRONG SLIDE
===================================================== */

document.querySelectorAll(
    "[data-next]"
).forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                goToSlide(
                    currentSlide + 1
                );

            }
        );

    }
);


/* =====================================================
   PHÍM BÀN PHÍM
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "ArrowRight") {

            goToSlide(
                currentSlide + 1
            );

        }


        if (event.key === "ArrowLeft") {

            goToSlide(
                currentSlide - 1
            );

        }

    }
);


/* =====================================================
   SWIPE ĐIỆN THOẠI
===================================================== */

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

        handleSwipe();

    },
    {
        passive: true
    }
);


function handleSwipe() {

    const distance =
        touchEndX - touchStartX;


    if (Math.abs(distance) < 60) {

        return;

    }


    if (distance < 0) {

        goToSlide(
            currentSlide + 1
        );

    } else {

        goToSlide(
            currentSlide - 1
        );

    }

}


/* =====================================================
   PHONG THƯ
===================================================== */

const letterMessage =
    "Chúc bạn luôn vui vẻ, hạnh phúc và được yêu thương. Mong rằng mỗi ngày phía trước đều có thật nhiều niềm vui, may mắn và những điều tốt đẹp đến với bạn. 💙";


let envelopeOpened = false;


envelope.addEventListener(
    "click",
    toggleEnvelope
);


envelope.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            toggleEnvelope();

        }

    }
);


function toggleEnvelope() {

    envelopeOpened =
        !envelopeOpened;


    envelope.classList.toggle(
        "open",
        envelopeOpened
    );


    if (envelopeOpened) {

        typingMessage.textContent =
            "";

        typeText(
            letterMessage,
            0
        );

        heartBurst();

    }

}


/* =====================================================
   HIỆU ỨNG GÕ CHỮ
===================================================== */

function typeText(
    text,
    index
) {

    if (
        index >=
        text.length
    ) {

        return;

    }


    typingMessage.textContent +=
        text[index];


    setTimeout(
        function () {

            typeText(
                text,
                index + 1
            );

        },
        25
    );

}


/* =====================================================
   BÓ HOA
===================================================== */

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
    function () {

        createBouquet();

        playFlowerBloomSound();

        heartBurst();

    }
);


function createBouquet() {

    const flowers =
        flowerSets[
            Math.floor(
                Math.random() *
                flowerSets.length
            )
        ];


    const bouquet =
        document.createElement("div");

    bouquet.className =
        "bouquet";


    bouquet.innerHTML = `

        <div class="bouquet-flowers">

            <div class="flower">
                ${flowers[0]}
            </div>

            <div class="flower">
                ${flowers[1]}
            </div>

            <div class="flower">
                ${flowers[2]}
            </div>

            <div class="flower">
                ${flowers[3]}
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


    bouquetContainer.innerHTML =
        "";


    bouquetContainer.appendChild(
        bouquet
    );

}


/* =====================================================
   AUDIO HOA NỞ
   KHÔNG CÓ NÚT LOA
===================================================== */

let audioContext = null;


function playFlowerBloomSound() {

    try {

        if (!audioContext) {

            audioContext =
                new (
                    window.AudioContext ||
                    window.webkitAudioContext
                )();

        }


        if (
            audioContext.state ===
            "suspended"
        ) {

            audioContext.resume();

        }


        const now =
            audioContext.currentTime;


        const oscillator =
            audioContext.createOscillator();

        const gain =
            audioContext.createGain();


        oscillator.type =
            "sine";


        oscillator.frequency.setValueAtTime(
            420,
            now
        );


        oscillator.frequency.exponentialRampToValueAtTime(
            850,
            now + .18
        );


        oscillator.frequency.exponentialRampToValueAtTime(
            1100,
            now + .38
        );


        gain.gain.setValueAtTime(
            0,
            now
        );


        gain.gain.linearRampToValueAtTime(
            .16,
            now + .03
        );


        gain.gain.exponentialRampToValueAtTime(
            .001,
            now + .65
        );


        oscillator.connect(
            gain
        );


        gain.connect(
            audioContext.destination
        );


        oscillator.start(now);

        oscillator.stop(
            now + .7
        );


        setTimeout(
            playSparkleSound,
            120
        );

    } catch (error) {

        console.log(
            "Audio effect:",
            error
        );

    }

}


function playSparkleSound() {

    if (!audioContext) {

        return;

    }


    const now =
        audioContext.currentTime;


    const oscillator =
        audioContext.createOscillator();

    const gain =
        audioContext.createGain();


    oscillator.type =
        "sine";


    oscillator.frequency.setValueAtTime(
        1200,
        now
    );


    oscillator.frequency.exponentialRampToValueAtTime(
        1700,
        now + .2
    );


    gain.gain.setValueAtTime(
        .07,
        now
    );


    gain.gain.exponentialRampToValueAtTime(
        .001,
        now + .3
    );


    oscillator.connect(
        gain
    );


    gain.connect(
        audioContext.destination
    );


    oscillator.start(now);

    oscillator.stop(
        now + .35
    );

}


/* =====================================================
   TIM CLICK
===================================================== */

document.addEventListener(
    "click",
    function (event) {

        if (
            event.target.closest("button") ||
            event.target.closest(".envelope")
        ) {

            return;

        }


        createHeart(
            event.clientX,
            event.clientY
        );

    }
);


function createHeart(
    x,
    y
) {

    const heart =
        document.createElement("div");

    heart.className =
        "click-heart";


    const symbols = [
        "💙",
        "💜",
        "💖",
        "✨",
        "🌸"
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
        function () {

            heart.remove();

        },
        1000
    );

}


/* =====================================================
   TIM NỔ
===================================================== */

function heartBurst() {

    const centerX =
        window.innerWidth / 2;

    const centerY =
        window.innerHeight / 2;


    for (
        let i = 0;
        i < 14;
        i++
    ) {

        setTimeout(
            function () {

                const angle =
                    Math.random() *
                    Math.PI *
                    2;


                const distance =
                    30 +
                    Math.random() *
                    100;


                createHeart(
                    centerX +
                    Math.cos(angle) *
                    distance,

                    centerY +
                    Math.sin(angle) *
                    distance
                );

            },
            i * 40
        );

    }

}


/* =====================================================
   HẠT SÁNG
===================================================== */

function smallSparkle() {

    for (
        let i = 0;
        i < 5;
        i++
    ) {

        setTimeout(
            function () {

                createHeart(
                    Math.random() *
                    window.innerWidth,

                    100 +
                    Math.random() *
                    400
                );

            },
            i * 80
        );

    }

}


/* =====================================================
   HOA RƠI
===================================================== */

const fallingItems = [
    "🌸",
    "🌷",
    "🌺",
    "🌼",
    "💙",
    "✨"
];


function createFallingItem() {

    const item =
        document.createElement("div");


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
        Math.random() * 14 +
        "px";


    item.style.animationDuration =
        5 +
        Math.random() * 6 +
        "s";


    fallingContainer.appendChild(
        item
    );


    setTimeout(
        function () {

            item.remove();

        },
        12000
    );

}


setInterval(
    createFallingItem,
    900
);


/* =====================================================
   BẤT NGỜ
===================================================== */

let surpriseOpened = false;


surpriseButton.addEventListener(
    "click",
    function () {

        surpriseOpened =
            !surpriseOpened;


        if (surpriseOpened) {

            surpriseText.innerHTML =
                "🌸 Điều bất ngờ là: <strong>bạn xứng đáng với thật nhiều niềm vui, hạnh phúc và những điều tốt đẹp!</strong> 💙";


            surpriseButton.textContent =
                "💙 Cảm ơn nhé";


            finalMessage.classList.add(
                "show"
            );


            heartBurst();

        } else {

            surpriseText.textContent =
                "Nhấn nút để khám phá nhé...";


            surpriseButton.textContent =
                "🎁 Mở bất ngờ";


            finalMessage.classList.remove(
                "show"
            );

        }

    }
);


/* =====================================================
   RESTART
===================================================== */

restartButton.addEventListener(
    "click",
    function () {

        goToSlide(0);

    }
);


/* =====================================================
   DARK MODE
===================================================== */

let darkMode =
    localStorage.getItem(
        "20-10-theme"
    ) === "dark";


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
    function () {

        darkMode =
            !darkMode;


        localStorage.setItem(
            "20-10-theme",
            darkMode
                ? "dark"
                : "light"
        );


        updateTheme();

    }
);


/* =====================================================
   KHỞI TẠO
===================================================== */

goToSlide(0);
