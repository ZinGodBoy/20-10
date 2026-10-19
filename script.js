/* =====================================================
   20/10 JAVASCRIPT
===================================================== */


/* =====================================================
   LẤY ELEMENT
===================================================== */

const fallingContainer =
    document.getElementById("fallingContainer");

const clickEffects =
    document.getElementById("clickEffects");

const openWishButton =
    document.getElementById("openWishButton");

const wishSection =
    document.getElementById("wishSection");

const wishCard =
    document.querySelector(".wish-card");

const envelope =
    document.getElementById("envelope");

const typingMessage =
    document.getElementById("typingMessage");

const flowerButton =
    document.getElementById("flowerButton");

const bouquetContainer =
    document.getElementById("bouquetContainer");

const themeButton =
    document.getElementById("themeButton");

const surpriseButton =
    document.getElementById("surpriseButton");

const surpriseText =
    document.getElementById("surpriseText");


/* =====================================================
   MỞ LỜI CHÚC
===================================================== */

openWishButton.addEventListener(
    "click",
    function () {

        wishCard.classList.add("visible");

        wishSection.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        heartBurst();

    }
);


/* =====================================================
   PHONG THƯ
===================================================== */

const message =
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

    if (envelopeOpened) {

        envelope.classList.remove("open");

        envelopeOpened = false;

        return;

    }


    envelope.classList.add("open");

    envelopeOpened = true;

    typingMessage.textContent = "";

    typeText(
        message,
        0
    );

    heartBurst();

}


/* =====================================================
   HIỆU ỨNG GÕ CHỮ
===================================================== */

function typeText(
    text,
    index
) {

    if (index >= text.length) {
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
        28
    );

}


/* =====================================================
   HOA / TIM RƠI
===================================================== */

const fallingItems = [
    "🌸",
    "🌷",
    "🌺",
    "🌼",
    "💙",
    "✨",
    "💐"
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
        Math.random() * 16 +
        "px";


    item.style.animationDuration =
        5 +
        Math.random() * 6 +
        "s";


    fallingContainer.appendChild(item);


    setTimeout(
        function () {

            item.remove();

        },
        12000
    );

}


setInterval(
    createFallingItem,
    650
);


/* =====================================================
   TIM KHI CLICK
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


    clickEffects.appendChild(heart);


    setTimeout(
        function () {

            heart.remove();

        },
        1000
    );

}


/* =====================================================
   HIỆU ỨNG NỔ TIM
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
            i * 45
        );

    }

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
    createBouquet
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


    bouquetContainer.prepend(
        bouquet
    );


    const bouquets =
        bouquetContainer.querySelectorAll(
            ".bouquet"
        );


    if (bouquets.length > 6) {

        bouquets[
            bouquets.length - 1
        ].remove();

    }


    heartBurst();

}


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
   NÚT BẤT NGỜ
===================================================== */

let surpriseOpened = false;


surpriseButton.addEventListener(
    "click",
    function () {

        if (!surpriseOpened) {

            surpriseOpened = true;


            surpriseText.innerHTML =
                "🌸 Điều bất ngờ là: <strong>bạn xứng đáng với thật nhiều niềm vui, hạnh phúc và những điều tốt đẹp!</strong> 💙";


            surpriseButton.textContent =
                "💙 Cảm ơn nhé";


            heartBurst();

        }

        else {

            surpriseText.textContent =
                "Chúc bạn có một ngày 20/10 thật đáng nhớ! 🌷";

        }

    }
);


/* =====================================================
   HIỆN CARD KHI CUỘN
===================================================== */

const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

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
            threshold: 0.2
        }
    );


observer.observe(wishCard);


/* =====================================================
   TẠO BÓ HOA ĐẦU TIÊN
===================================================== */

setTimeout(
    function () {

        createBouquet();

    },
    800
);
