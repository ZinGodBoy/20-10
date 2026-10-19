@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700;800&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --pink: #e91e63;
    --pink-light: #ff6b9d;
    --pink-dark: #c2185b;

    --purple: #9c4dcc;

    --green: #4d9b67;
    --green-dark: #27734a;

    --text: #402630;
    --text-light: #765b65;

    --white: #ffffff;

    --soft: #fff2f7;
}

html {
    scroll-behavior: smooth;
}

body {
    min-height: 100vh;

    font-family: "Be Vietnam Pro", sans-serif;

    color: var(--text);

    background:
        radial-gradient(
            circle at 15% 15%,
            rgba(255, 180, 210, 0.55),
            transparent 28%
        ),
        radial-gradient(
            circle at 85% 80%,
            rgba(220, 190, 255, 0.55),
            transparent 30%
        ),
        linear-gradient(
            135deg,
            #fff7fa 0%,
            #fff1f6 45%,
            #f8f0ff 100%
        );

    display: flex;
    justify-content: center;
    align-items: flex-start;

    padding: 30px 15px 50px;

    overflow-x: hidden;
}


/* ==================================================
   HIỆU ỨNG NỀN
================================================== */

.effects {
    position: fixed;

    inset: 0;

    overflow: hidden;

    pointer-events: none;

    z-index: 1;
}

.falling-item {
    position: absolute;

    top: -80px;

    user-select: none;

    pointer-events: none;

    animation:
        fallDown var(--duration)
        linear var(--delay)
        forwards;

    opacity: 0;

    will-change: transform, opacity;
}

@keyframes fallDown {

    0% {
        transform:
            translate3d(0, -80px, 0)
            rotate(0deg)
            scale(var(--scale));

        opacity: 0;
    }

    10% {
        opacity: var(--opacity);
    }

    80% {
        opacity: var(--opacity);
    }

    100% {
        transform:
            translate3d(var(--move-x), 110vh, 0)
            rotate(var(--rotate))
            scale(var(--scale));

        opacity: 0;
    }
}


/* ==================================================
   CARD
================================================== */

.card {
    position: relative;

    z-index: 5;

    width: min(680px, 100%);

    padding: 45px 42px 30px;

    text-align: center;

    border-radius: 34px;

    background:
        linear-gradient(
            145deg,
            rgba(255,255,255,.95),
            rgba(255,250,253,.88)
        );

    border: 1px solid rgba(255,255,255,.95);

    box-shadow:
        0 35px 90px rgba(111,45,80,.18),
        0 10px 30px rgba(111,45,80,.08),
        inset 0 1px 0 rgba(255,255,255,1);

    backdrop-filter: blur(18px);

    animation:
        cardEntrance 1s cubic-bezier(.22,.8,.25,1);
}

@keyframes cardEntrance {

    0% {
        opacity: 0;

        transform:
            translateY(45px)
            scale(.94);
    }

    100% {
        opacity: 1;

        transform:
            translateY(0)
            scale(1);
    }
}


/* ==================================================
   TOP
================================================== */

.top-decoration {
    display: flex;

    justify-content: center;

    gap: 22px;

    margin-bottom: 16px;

    color: var(--pink);

    font-size: 18px;

    opacity: .75;
}

.top-decoration span:nth-child(1),
.top-decoration span:nth-child(3) {
    animation:
        sparkle 2s ease-in-out infinite;
}

.top-decoration span:nth-child(2) {
    animation:
        heartFloat 2.5s ease-in-out infinite;
}

@keyframes sparkle {

    0%,
    100% {
        transform:
            scale(.8)
            rotate(0deg);

        opacity: .45;
    }

    50% {
        transform:
            scale(1.35)
            rotate(15deg);

        opacity: 1;
    }
}

@keyframes heartFloat {

    0%,
    100% {
        transform:
            translateY(0);
    }

    50% {
        transform:
            translateY(-7px)
            scale(1.15);
    }
}


/* ==================================================
   BADGE
================================================== */

.badge {
    display: inline-flex;

    align-items: center;

    padding: 9px 20px;

    margin-bottom: 22px;

    border-radius: 999px;

    color: var(--pink);

    background:
        linear-gradient(
            135deg,
            #fff0f5,
            #fff7fa
        );

    border: 1px solid #ffd6e5;

    font-size: 13px;

    font-weight: 800;

    letter-spacing: 1.5px;

    box-shadow:
        0 8px 20px rgba(233,30,99,.08);
}


/* ==================================================
   HOA CHÍNH
================================================== */

.flower-wrapper {
    position: relative;

    width: 100px;

    height: 100px;

    margin: 0 auto 10px;

    display: flex;

    justify-content: center;

    align-items: center;
}

.flower-icon {
    position: relative;

    z-index: 2;

    font-size: 66px;

    filter:
        drop-shadow(
            0 12px 15px rgba(190,70,120,.18)
        );

    animation:
        flowerFloat 3s ease-in-out infinite;
}

.flower-glow {
    position: absolute;

    width: 75px;

    height: 75px;

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            rgba(255,100,160,.22),
            transparent 70%
        );

    animation:
        glowPulse 2.5s ease-in-out infinite;
}

@keyframes flowerFloat {

    0%,
    100% {
        transform:
            translateY(0)
            rotate(-4deg);
    }

    50% {
        transform:
            translateY(-10px)
            rotate(4deg);
    }
}

@keyframes glowPulse {

    0%,
    100% {
        transform:
            scale(.75);

        opacity: .45;
    }

    50% {
        transform:
            scale(1.25);

        opacity: .9;
    }
}


/* ==================================================
   TEXT
================================================== */

.small-title {
    font-size: 11px;

    font-weight: 800;

    letter-spacing: 3px;

    color: #a47b89;

    margin-bottom: 8px;
}

h1 {
    font-family: "Playfair Display", serif;

    font-size: clamp(42px, 8vw, 65px);

    line-height: 1.08;

    color: #43252f;

    margin-bottom: 15px;
}

h1 span {
    display: block;

    margin-top: 4px;

    background:
        linear-gradient(
            90deg,
            var(--pink),
            var(--purple),
            var(--pink),
            var(--pink-light)
        );

    background-size: 300% auto;

    color: transparent;

    -webkit-background-clip: text;
    background-clip: text;

    animation:
        gradientText 5s linear infinite;
}

@keyframes gradientText {

    to {
        background-position: 300% center;
    }
}


/* ==================================================
   DATE
================================================== */

.date {
    display: flex;

    justify-content: center;

    align-items: center;

    gap: 13px;

    color: var(--pink);

    font-size: 15px;

    font-weight: 800;

    margin-bottom: 20px;
}

.line {
    width: 45px;

    height: 1px;

    background:
        linear-gradient(
            90deg,
            transparent,
            #f2a5bf
        );
}

.line:last-child {
    background:
        linear-gradient(
            90deg,
            #f2a5bf,
            transparent
        );
}

.intro {
    max-width: 510px;

    margin: auto;

    color: var(--text-light);

    font-size: 15px;

    line-height: 1.9;
}


/* ==================================================
   NÚT
================================================== */

.open-btn,
.flower-btn {
    position: relative;

    overflow: hidden;

    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: 10px;

    min-width: 190px;

    padding: 15px 28px;

    margin-top: 27px;

    border: none;

    border-radius: 999px;

    color: #fff;

    background:
        linear-gradient(
            135deg,
            #e91e63,
            #ff5c91
        );

    font-family: inherit;

    font-size: 15px;

    font-weight: 800;

    cursor: pointer;

    box-shadow:
        0 13px 28px rgba(233,30,99,.27);

    transition:
        transform .25s ease,
        box-shadow .25s ease;
}

.open-btn::before,
.flower-btn::before {
    content: "";

    position: absolute;

    top: 0;

    left: -120%;

    width: 70%;

    height: 100%;

    background:
        linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.4),
            transparent
        );

    transform: skewX(-20deg);

    transition: left .7s ease;
}

.open-btn:hover::before,
.flower-btn:hover::before {
    left: 140%;
}

.open-btn:hover,
.flower-btn:hover {
    transform:
        translateY(-4px)
        scale(1.03);

    box-shadow:
        0 18px 35px rgba(233,30,99,.34);
}

.open-btn:active,
.flower-btn:active {
    transform: scale(.95);
}


/* ==================================================
   MESSAGE
================================================== */

.message {
    max-height: 0;

    opacity: 0;

    overflow: hidden;

    margin-top: 0;

    padding: 0 25px;

    border-radius: 24px;

    background:
        linear-gradient(
            145deg,
            #fff6fa,
            #fbf5ff
        );

    border: 1px solid transparent;

    transition:
        max-height .9s ease,
        opacity .6s ease,
        margin-top .7s ease,
        padding .7s ease,
        border-color .7s ease;
}

.message.show {
    max-height: 650px;

    opacity: 1;

    margin-top: 28px;

    padding: 28px 25px;

    border-color: #f7dce7;
}

.message-header {
    display: flex;

    justify-content: center;

    gap: 15px;

    margin-bottom: 18px;

    font-size: 20px;
}

.message-header span {
    animation:
        heartFloat 2s ease-in-out infinite;
}

.message-line {
    color: #644c56;

    font-size: 14px;

    line-height: 1.9;

    margin-bottom: 16px;

    opacity: 0;

    transform: translateY(15px);
}

.message.show .message-line {
    animation:
        messageLine .7s ease forwards;
}

.message.show .message-line:nth-of-type(1) {
    animation-delay: .15s;
}

.message.show .message-line:nth-of-type(2) {
    animation-delay: .3s;
}

.message.show .message-line:nth-of-type(3) {
    animation-delay: .45s;
}

@keyframes messageLine {

    to {
        opacity: 1;

        transform:
            translateY(0);
    }
}

.special {
    margin-top: 18px;

    color: var(--pink);

    font-family: "Playfair Display", serif;

    font-size: 21px;

    font-weight: 700;

    line-height: 1.5;
}

.signature {
    margin-top: 18px;

    color: #a17d8a;

    font-size: 12px;

    font-style: italic;
}


/* ==================================================
   KHU VỰC TẶNG HOA
================================================== */

.gift-section {
    margin-top: 35px;

    padding-top: 28px;

    border-top:
        1px dashed #f0cbd9;
}

.gift-title {
    display: flex;

    justify-content: center;

    align-items: center;

    gap: 10px;

    color: var(--pink);

    font-family:
        "Playfair Display",
        serif;

    font-size: 22px;

    font-weight: 700;
}

.gift-title span:first-child,
.gift-title span:last-child {
    animation:
        flowerSide 2s ease-in-out infinite;
}

@keyframes flowerSide {

    0%,
    100% {
        transform:
            rotate(-8deg)
            translateY(0);
    }

    50% {
        transform:
            rotate(8deg)
            translateY(-5px);
    }
}

.gift-description {
    margin-top: 8px;

    color: #987783;

    font-size: 12px;
}

.flower-btn {
    background:
        linear-gradient(
            135deg,
            #4d9b67,
            #2f7c4e
        );

    box-shadow:
        0 13px 28px rgba(45,125,75,.22);
}

.flower-btn:hover {
    box-shadow:
        0 18px 35px rgba(45,125,75,.32);
}


/* ==================================================
   KHU VỰC BÓ HOA
================================================== */

.bouquet-container {
    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 18px;

    margin-top: 25px;
}

.bouquet {
    position: relative;

    min-height: 230px;

    padding: 20px 15px 18px;

    border-radius: 25px;

    background:
        linear-gradient(
            145deg,
            #fffafb,
            #fff1f6
        );

    border:
        1px solid #f5dce6;

    box-shadow:
        0 12px 30px rgba(120,50,80,.10);

    overflow: hidden;

    animation:
        bouquetAppear .8s
        cubic-bezier(.17,.84,.32,1.2)
        forwards;
}

@keyframes bouquetAppear {

    0% {
        opacity: 0;

        transform:
            translateY(50px)
            scale(.55)
            rotate(-8deg);
    }

    60% {
        transform:
            translateY(-8px)
            scale(1.04)
            rotate(2deg);
    }

    100% {
        opacity: 1;

        transform:
            translateY(0)
            scale(1)
            rotate(0);
    }
}


/* ==================================================
   HOA TRONG BÓ
================================================== */

.bouquet-flowers {
    position: relative;

    height: 135px;

    display: flex;

    justify-content: center;

    align-items: flex-start;
}

.flower-piece {
    position: absolute;

    font-size: 43px;

    filter:
        drop-shadow(
            0 5px 5px rgba(100,50,70,.15)
        );

    animation:
        flowerPieceFloat 2.5s ease-in-out infinite;
}

.flower-piece:nth-child(1) {
    left: 19%;
    top: 30px;
    transform: rotate(-15deg);
    animation-delay: .1s;
}

.flower-piece:nth-child(2) {
    left: 37%;
    top: 2px;
    font-size: 48px;
    animation-delay: .3s;
}

.flower-piece:nth-child(3) {
    right: 19%;
    top: 30px;
    transform: rotate(15deg);
    animation-delay: .5s;
}

.flower-piece:nth-child(4) {
    left: 29%;
    top: 55px;
    font-size: 35px;
    animation-delay: .7s;
}

.flower-piece:nth-child(5) {
    right: 29%;
    top: 55px;
    font-size: 35px;
    animation-delay: .9s;
}

@keyframes flowerPieceFloat {

    0%,
    100% {
        margin-top: 0;
    }

    50% {
        margin-top: -6px;
    }
}


/* ==================================================
   LÁ
================================================== */

.leaves {
    position: absolute;

    left: 50%;

    bottom: 2px;

    transform: translateX(-50%);

    font-size: 48px;

    white-space: nowrap;

    z-index: 1;
}


/* ==================================================
   GIẤY GÓI HOA
================================================== */

.wrapper-paper {
    position: absolute;

    left: 50%;

    bottom: 5px;

    width: 120px;

    height: 90px;

    transform:
        translateX(-50%)
        rotate(2deg);

    background:
        linear-gradient(
            135deg,
            #ffd7e4,
            #fff0f5
        );

    clip-path:
        polygon(
            8% 0,
            92% 0,
            75% 100%,
            25% 100%
        );

    box-shadow:
        0 5px 12px rgba(100,50,70,.12);

    z-index: 3;
}

.wrapper-fold {
    position: absolute;

    left: 50%;

    bottom: 4px;

    width: 18px;

    height: 82px;

    transform:
        translateX(-50%);

    background:
        rgba(255,255,255,.45);

    z-index: 4;
}


/* ==================================================
   NƠ
================================================== */

.ribbon {
    position: absolute;

    left: 50%;

    bottom: 20px;

    width: 42px;

    height: 25px;

    transform:
        translateX(-50%);

    z-index: 6;
}

.ribbon::before,
.ribbon::after {
    content: "";

    position: absolute;

    top: 0;

    width: 22px;

    height: 20px;

    border: 5px solid #e91e63;
}

.ribbon::before {
    right: 50%;

    border-radius:
        50% 20% 50% 20%;

    transform:
        rotate(-25deg);
}

.ribbon::after {
    left: 50%;

    border-radius:
        20% 50% 20% 50%;

    transform:
        rotate(25deg);
}

.ribbon-center {
    position: absolute;

    left: 50%;

    top: 5px;

    width: 12px;

    height: 12px;

    border-radius: 50%;

    background: #c2185b;

    transform:
        translateX(-50%);

    z-index: 2;
}


/* ==================================================
   TEXT BÓ HOA
================================================== */

.bouquet-number {
    position: absolute;

    left: 50%;

    bottom: 8px;

    transform:
        translateX(-50%);

    z-index: 8;

    color: #a16f7e;

    font-size: 9px;

    font-weight: 700;

    white-space: nowrap;
}


/* ==================================================
   TIM BAY QUANH BÓ
================================================== */

.bouquet-heart {
    position: absolute;

    font-size: 15px;

    pointer-events: none;

    animation:
        bouquetHeart 2.5s ease-out forwards;
}

@keyframes bouquetHeart {

    0% {
        opacity: 0;

        transform:
            translateY(30px)
            scale(.4);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;

        transform:
            translateY(-100px)
            translateX(var(--heart-x))
            scale(1.2);
    }
}


/* ==================================================
   FOOTER
================================================== */

.bottom {
    display: flex;

    justify-content: center;

    align-items: center;

    gap: 5px;

    margin-top: 28px;

    color: #a98d98;

    font-size: 11px;

    letter-spacing: .5px;
}

.heart-pulse {
    color: var(--pink);

    font-size: 15px;

    animation:
        heartPulse 1.3s ease-in-out infinite;
}

@keyframes heartPulse {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.35);
    }
}


/* ==================================================
   MOBILE
================================================== */

@media (max-width: 600px) {

    body {
        padding:
            12px
            10px
            35px;
    }

    .card {
        width: 100%;

        padding:
            28px 16px 22px;

        border-radius: 25px;
    }

    .top-decoration {
        margin-bottom: 10px;
    }

    .badge {
        font-size: 10px;

        padding:
            8px 14px;
    }

    .flower-wrapper {
        width: 80px;
        height: 80px;
    }

    .flower-icon {
        font-size: 54px;
    }

    h1 {
        font-size: 39px;
    }

    .small-title {
        font-size: 8px;

        letter-spacing: 1.8px;
    }

    .intro {
        font-size: 13px;

        line-height: 1.8;
    }

    .open-btn,
    .flower-btn {
        width: 100%;

        min-width: 0;

        padding:
            14px 18px;
    }

    .message.show {
        padding:
            22px 16px;
    }

    .message-line {
        font-size: 13px;
    }

    .special {
        font-size: 18px;
    }

    .gift-title {
        font-size: 19px;
    }

    .bouquet-container {
        grid-template-columns: 1fr;

        gap: 15px;
    }

    .bouquet {
        min-height: 220px;
    }
}


/* ==================================================
   MÀN HÌNH RẤT NHỎ
================================================== */

@media (max-width: 380px) {

    h1 {
        font-size: 34px;
    }

    .gift-title {
        font-size: 17px;
    }

    .bouquet {
        min-height: 205px;
    }
}
