const openBtn = document.getElementById("openBtn");
const message = document.getElementById("message");

openBtn.addEventListener("click", () => {

    const isHidden = message.classList.contains("hidden");

    if (isHidden) {

        message.classList.remove("hidden");

        openBtn.innerHTML = "💖 Đã mở lời chúc";

        // Cuộn nhẹ xuống phần lời chúc
        setTimeout(() => {
            message.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 100);

    } else {

        message.classList.add("hidden");

        openBtn.innerHTML = "💌 Mở lời chúc";

    }

});
