/* =====================================================
   20/10 WEBSITE
===================================================== */


/* =====================================================
   SLIDE
===================================================== */

const slides =
    document.querySelectorAll(".slide");

let currentSlide = 0;


function goToSlide(index) {

    if (index < 0) {
        index = 0;
    }

    if (index >= slides.length) {
        index = slides.length - 1;
    }


    slides.forEach((slide, i) => {

        slide.classList.remove("active");
        slide.classList.remove("previous");


        if (i < index) {
            slide.classList.add("previous");
        }

    });


    slides[index].classList.add("active");

    currentSlide = index;

    sparkleEffect();
}


/* =====================================================
   NÚT TIẾP
===================================================== */

document.querySelectorAll("[data-next]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                goToSlide(
                    currentSlide + 1
                );

            }
        );

    });


/* =====================================================
   BÀN PHÍM
===================================================== */

document.addEventListener(
    "keydown",
    event => {

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
   SWIPE MOBILE
===================================================== */

let touchStartX = 0;

let touchEndX = 0;


document.addEventListener(
    "touchstart",
    event => {

        touchStartX =
            event.changedTouches[0].screenX;

    },
    {
        passive: true
    }
);


document.addEventListener(
    "touchend",
    event => {

        touchEndX =
            event.changedTouches[0].screenX;


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

    },
    {
        passive: true
    }
);


/* =====================================================
   PHONG THƯ
===================================================== */

const envelope =
    document.getElementById(
        "envelope"
    );

const letterText =
    document.getElementById(
        "letterText"
    );


let letterOpened = false;


const message =
    "Chúc bạn luôn vui vẻ, hạnh phúc và được yêu thương. Mong rằng mỗi ngày phía trước đều có thật nhiều niềm vui, may mắn và những điều tốt đẹp. 💙";


if (envelope) {

    envelope.addEventListener(
        "click",
        () => {

            letterOpened =
                !letterOpened;


            envelope.classList.toggle(
                "open",
                letterOpened
            );


            if (letterOpened) {

                letterText.textContent =
                    "";

                typeLetter(
                    0
                );

                heartBurst();

            }

        }
    );


    envelope.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                envelope.click();

            }

        }
    );

}


function typeLetter(index) {

    if (
        index >= message.length
    ) {

        return;

    }


    letterText.textContent +=
        message[index];


    setTimeout(
        () => {

            typeLetter(
                index + 1
            );

        },
        22
    );

}


/* =====================================================
   BÓ HOA
===================================================== */

const flowerButton =
    document.getElementById(
        "flowerButton"
    );

const bouquet =
    document.getElementById(
        "bouquet"
    );


const flowerSets = [

    [
        "🌹",
        "🌷",
        "🌸",
        "🌺",
        "🌼"
    ],

    [
        "🌷",
        "🌸",
        "🌹",
        "🌺",
        "💐"
    ],

    [
        "🌺",
        "🌹",
        "🌷",
        "🌸",
        "🌼"
    ]

];


if (flowerButton) {

    flowerButton.addEventListener(
        "click",
        createBouquet
    );

}


function createBouquet() {

    const flowers =
        flowerSets[
            Math.floor(
                Math.random() *
                flowerSets.length
            )
        ];


    bouquet.innerHTML = `

        <div class="real-bouquet">

            <div class="flower f1">
                ${flowers[0]}
            </div>

            <div class="flower f2">
                ${flowers[1]}
            </div>

            <div class="flower f3">
                ${flowers[2]}
            </div>

            <div class="flower f4">
                ${flowers[3]}
            </div>

            <div class="flower f5">
                ${flowers[4]}
            </div>


            <div class="leaf l1">
                🌿
            </div>

            <div class="leaf l2">
                🌿
            </div>


            <div class="wrapper"></div>

            <div class="ribbon"></div>

        </div>

    `;


    playBloomSound();

    heartBurst();

}


/* =====================================================
   ÂM THANH HOA NỞ
   Không có nút loa
===================================================== */

let audioContext = null;


function playBloomSound() {

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
            450,
            now
        );


        oscillator.frequency.exponentialRampToValueAtTime(
            800,
            now + 0.18
        );


        oscillator.frequency.exponentialRampToValueAtTime(
            1200,
            now + 0.35
        );


        gain.gain.setValueAtTime(
            0,
            now
        );


        gain.gain.linearRampToValueAtTime(
            0.12,
            now + 0.04
        );


        gain.gain.exponentialRampToValueAtTime(
            0.001,
            now + 0.6
        );


        oscillator.connect(gain);

        gain.connect(
            audioContext.destination
        );


        oscillator.start(now);

        oscillator.stop(
            now + 0.65
        );

    } catch (error) {

        console.log(
            "Bloom sound unavailable."
        );

    }

}


/* =====================================================
   TIM / SPARKLE
===================================================== */

const clickEffects =
    document.getElementById(
        "clickEffects"
    );


const effectSymbols = [
    "💙",
    "💜",
    "💖",
    "🌸",
    "✨"
];


function createHeart(
    x,
    y
) {

    const heart =
        document.createElement("div");


    heart.className =
        "click-heart";


    heart.textContent =
        effectSymbols[
            Math.floor(
                Math.random() *
                effectSymbols.length
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


function heartBurst() {

    const x =
        window.innerWidth / 2;

    const y =
        window.innerHeight / 2;


    for (
        let i = 0;
        i < 12;
        i++
    ) {

        setTimeout(
            () => {

                const angle =
                    Math.random() *
                    Math.PI *
                    2;


                const distance =
                    30 +
                    Math.random() *
                    100;


                createHeart(

                    x +
                    Math.cos(angle) *
                    distance,

                    y +
                    Math.sin(angle) *
                    distance

                );

            },
            i * 35
        );

    }

}


function sparkleEffect() {

    for (
        let i = 0;
        i < 4;
        i++
    ) {

        setTimeout(
            () => {

                createHeart(

                    Math.random() *
                    window.innerWidth,

                    100 +
                    Math.random() *
                    400

                );

            },
            i * 70
        );

    }

}


/* =====================================================
   CLICK MÀN HÌNH
===================================================== */

document.addEventListener(
    "click",
    event => {

        const target =
            event.target;


        if (
            target.closest("button") ||
            target.closest(".envelope")
        ) {

            return;

        }


        createHeart(
            event.clientX,
            event.clientY
        );

    }
);


/* =====================================================
   HOA RƠI
===================================================== */

const fallingFlowers =
    document.getElementById(
        "fallingFlowers"
    );


const fallingSymbols = [
    "🌸",
    "🌷",
    "🌺",
    "🌼",
    "✨"
];


function createFallingFlower() {

    const flower =
        document.createElement("div");


    flower.className =
        "falling";


    flower.textContent =
        fallingSymbols[
            Math.floor(
                Math.random() *
                fallingSymbols.length
            )
        ];


    flower.style.left =
        Math.random() * 100 + "vw";


    flower.style.fontSize =
        11 +
        Math.random() * 12 +
        "px";


    flower.style.animationDuration =
        6 +
        Math.random() * 7 +
        "s";


    fallingFlowers.appendChild(
        flower
    );


    setTimeout(
        () => {

            flower.remove();

        },
        14000
    );

}


setInterval(
    createFallingFlower,
    1100
);


/* =====================================================
   BẤT NGỜ
===================================================== */

const surpriseButton =
    document.getElementById(
        "surpriseButton"
    );

const surprise =
    document.getElementById(
        "surprise"
    );

const finalText =
    document.getElementById(
        "finalText"
    );


let surpriseOpened = false;


surpriseButton.addEventListener(
    "click",
    () => {

        surpriseOpened =
            !surpriseOpened;


        if (surpriseOpened) {

            surprise.classList.add(
                "show"
            );


            finalText.textContent =
                "Và đây là lời chúc cuối cùng dành cho bạn...";


            surpriseButton.textContent =
                "💙 Chúc bạn thật vui";


            heartBurst();

        } else {

            surprise.classList.remove(
                "show"
            );


            finalText.textContent =
                "Một lời chúc nhỏ nhưng được gửi bằng thật nhiều sự chân thành. 💙";


            surpriseButton.textContent =
                "🎁 Mở lời chúc";

        }

    }
);


/* =====================================================
   XEM LẠI
===================================================== */

const restartButton =
    document.getElementById(
        "restartButton"
    );


restartButton.addEventListener(
    "click",
    () => {

        goToSlide(0);

        window.scrollTo(
            0,
            0
        );

    }
);


/* =====================================================
   DARK MODE
===================================================== */

const themeToggle =
    document.getElementById(
        "themeToggle"
    );


let darkMode =
    localStorage.getItem(
        "20-10-theme"
    ) === "dark";


function updateTheme() {

    document.body.classList.toggle(
        "dark",
        darkMode
    );


    themeToggle.textContent =
        darkMode
            ? "☀"
            : "☾";

}


updateTheme();


themeToggle.addEventListener(
    "click",
    () => {

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
   KHỞI ĐỘNG
===================================================== */

goToSlide(0);
