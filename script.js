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
    align-items: center;

    padding: 30px 15px;

    overflow-x: hidden;
}

/* =========================================
   EFFECT LAYER
========================================= */

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
        fallDown var(--duration) linear var(--delay) forwards;

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

/* =========================================
   CARD
========================================= */

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
            rgba(255,255,255,0.94),
            rgba(255,250,253,0.86)
        );

    border: 1px solid rgba(255,255,255,0.95);

    box-shadow:
        0 35px 90px rgba(111, 45, 80, 0.18),
        0 10px 30px rgba(111, 45, 80, 0.08),
        inset 0 1px 0 rgba(255,255,255,1);

    backdrop-filter: blur(18px);

    animation: cardEntrance 1s cubic-bezier(.22,.8,.25,1);
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

/* =========================================
   TOP DECORATION
========================================= */

.top-decoration {
    display: flex;

    justify-content: center;

    gap: 22px;

    margin-bottom: 16px;

    color: var(--pink);

    font-size: 18px;

    opacity: .75;
}

.top-decoration span:nth-child(1) {
    animation: sparkle 2s ease-in-out infinite;
}

.top-decoration span:nth-child(2) {
    animation: heartFloat 2.5s ease-in-out infinite;
}

.top-decoration span:nth-child(3) {
    animation: sparkle 2s ease-in-out .7s infinite;
}

@keyframes sparkle {

    0%,
    100% {
        transform: scale(.8) rotate(0deg);

        opacity: .45;
    }

    50% {
        transform: scale(1.35) rotate(15deg);

        opacity: 1;
    }
}

@keyframes heartFloat {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-7px) scale(1.15);
    }
}

/* =========================================
   BADGE
========================================= */

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

    animation: badgeEntrance .8s ease .2s both;
}

@keyframes badgeEntrance {

    from {
        opacity: 0;

        transform:
            translateY(-12px)
            scale(.9);
    }

    to {
        opacity: 1;

        transform:
            translateY(0)
            scale(1);
    }
}

/* =========================================
   FLOWER
========================================= */

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
        transform: scale(.75);

        opacity: .45;
    }

    50% {
        transform: scale(1.25);

        opacity: .9;
    }
}

/* =========================================
   TEXT
========================================= */

.small-title {
    font-size: 11px;

    font-weight: 800;

    letter-spacing: 3px;

    color: #a47b89;

    margin-bottom: 8px;

    animation: textReveal .8s ease .35s both;
}

h1 {
    font-family: "Playfair Display", serif;

    font-size: clamp(42px, 8vw, 65px);

    line-height: 1.08;

    color: #43252f;

    margin-bottom: 15px;

    animation: textReveal .9s ease .45s both;
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

@keyframes textReveal {

    from {
        opacity: 0;

        transform:
            translateY(18px);
    }

    to {
        opacity: 1;

        transform:
            translateY(0);
    }
}

/* =========================================
   DATE
========================================= */

.date {
    display: flex;

    justify-content: center;

    align-items: center;

    gap: 13px;

    color: var(--pink);

    font-size: 15px;

    font-weight: 800;

    margin-bottom: 20px;

    animation: textReveal .8s ease .6s both;
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

/* =========================================
   INTRO
========================================= */

.intro {
    max-width: 510px;

    margin: auto;

    color: var(--text-light);

    font-size: 15px;

    line-height: 1.9;

    animation: textReveal .8s ease .7s both;
}

/* =========================================
   BUTTON
========================================= */

.open-btn {
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

    animation: buttonEntrance .8s ease .85s both;
}

@keyframes buttonEntrance {

    from {
        opacity: 0;

        transform:
            translateY(20px)
            scale(.92);
    }

    to {
        opacity: 1;

        transform:
            translateY(0)
            scale(1);
    }
}

.open-btn::before {
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
            rgba(255,255,255,.35),
            transparent
        );

    transform: skewX(-20deg);

    transition: left .7s ease;
}

.open-btn:hover::before {
    left: 140%;
}

.open-btn:hover {
    transform:
        translateY(-4px)
        scale(1.03);

    box-shadow:
        0 18px 35px rgba(233,30,99,.34);
}

.open-btn:active {
    transform: scale(.97);
}

.btn-icon {
    font-size: 19px;

    animation: envelopeBounce 1.8s ease-in-out infinite;
}

@keyframes envelopeBounce {

    0%,
    100% {
        transform: rotate(0deg);
    }

    50% {
        transform:
            rotate(-8deg)
            translateY(-2px);
    }
}

/* =========================================
   MESSAGE
========================================= */

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
        max-height .9s cubic-bezier(.22,.8,.25,1),
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

    color: var(--pink);

    font-size: 20px;
}

.message-header span:nth-child(1) {
    animation: headerFlower 2s ease-in-out infinite;
}

.message-header span:nth-child(2) {
    animation: heartFloat 1.8s ease-in-out infinite;
}

.message-header span:nth-child(3) {
    animation: headerFlower 2s ease-in-out .5s infinite;
}

@keyframes headerFlower {

    0%,
    100% {
        transform: rotate(-8deg) translateY(0);
    }

    50% {
        transform: rotate(8deg) translateY(-5px);
    }
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

        transform: translateY(0);
    }
}

.special {
    margin-top: 18px;

    color: var(--pink);

    font-family: "Playfair Display", serif;

    font-size: 21px;

    font-weight: 700;

    line-height: 1.5;

    opacity: 0;

    transform: scale(.9);
}

.message.show .special {
    animation:
        specialAppear .8s ease .65s forwards;
}

@keyframes specialAppear {

    to {
        opacity: 1;

        transform: scale(1);
    }
}

.signature {
    margin-top: 18px;

    color: #a17d8a;

    font-size: 12px;

    font-style: italic;

    opacity: 0;
}

.message.show .signature {
    animation:
        fadeUp .7s ease .9s forwards;
}

@keyframes fadeUp {

    from {
        opacity: 0;

        transform: translateY(10px);
    }

    to {
        opacity: 1;

        transform: translateY(0);
    }
}

/* =========================================
   BOTTOM
========================================= */

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

/* =========================================
   HEART BURST
========================================= */

.burst-heart {
    position: fixed;

    z-index: 20;

    pointer-events: none;

    font-size: 22px;

    animation:
        burst .9s ease-out forwards;
}

@keyframes burst {

    0% {
        opacity: 1;

        transform:
            translate(-50%, -50%)
            scale(.4);
    }

    100% {
        opacity: 0;

        transform:
            translate(
                calc(-50% + var(--x)),
                calc(-50% + var(--y))
            )
            scale(1.4)
            rotate(var(--rotate));
    }
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 600px) {

    body {
        padding: 18px 12px;
    }

    .card {
        padding: 32px 20px 25px;

        border-radius: 27px;
    }

    .top-decoration {
        margin-bottom: 12px;
    }

    .badge {
        font-size: 11px;

        padding: 8px 15px;
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
        font-size: 9px;

        letter-spacing: 2px;
    }

    .intro {
        font-size: 13px;

        line-height: 1.8;
    }

    .message.show {
        padding: 23px 17px;
    }

    .message-line {
        font-size: 13px;
    }

    .special {
        font-size: 18px;
    }

    .open-btn {
        width: 100%;
    }
}

/* =========================================
   REDUCED MOTION
========================================= */

@media (prefers-reduced-motion: reduce) {

    *,
    *::before,
    *::after {
        animation-duration: .01ms !important;
        animation-iteration-count: 1 !important;

        scroll-behavior: auto !important;

        transition-duration: .01ms !important;
    }
}
