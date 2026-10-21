// GIFポップアップ
const gifPopup = document.getElementById("gifPopup");
const gifImage = document.getElementById("gifImage");
const gifClose = document.getElementById("gifClose");

// キャラクター画像をタップしたらGIFを表示
document.querySelectorAll(".search-item").forEach((item) => {
    item.addEventListener("click", function (event) {
        event.preventDefault();

        const gifNumber = this.dataset.gif;

        if (!gifNumber) {
            return;
        }

        gifImage.src = "";
        gifPopup.style.display = "flex";

        setTimeout(() => {
            gifImage.src = `movies/${gifNumber}.gif`;
        }, 50);
    });
});

// 使い方ポップアップ
console.log("GIFの閉じる処理より前まで読み込みOK");
const howToButton = document.getElementById("howToButton");
const howToModal = document.getElementById("howToModal");
const howToClose = howToModal.querySelector(".close-button");

// ボタンを押したら開く
howToButton.addEventListener("click", () => {
    howToModal.style.display = "flex";
});

// ×を押したら閉じる
howToClose.addEventListener("click", () => {
    howToModal.style.display = "none";
});
// 使い方スライド
const slideTrack = document.getElementById("slideTrack");
const slideCounter = document.getElementById("slideCounter");
const prevSlide = document.getElementById("prevSlide");
const nextSlide = document.getElementById("nextSlide");
const slideWindow = document.querySelector(".slide-window");

const totalSlides = 6;
let currentSlide = 0;

function updateSlide() {
    slideTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    slideCounter.textContent = `${currentSlide + 1} / ${totalSlides}`;

    prevSlide.disabled = currentSlide === 0;
    nextSlide.disabled = currentSlide === totalSlides - 1;
}

prevSlide.addEventListener("click", () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
    }
});

nextSlide.addEventListener("click", () => {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSlide();
    }
});

// スマホの左右スワイプ
let touchStartX = 0;

slideWindow.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].screenX;
}, { passive: true });

slideWindow.addEventListener("touchend", (event) => {
    const touchEndX = event.changedTouches[0].screenX;
    const distance = touchEndX - touchStartX;

    if (distance < -50 && currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSlide();
    } else if (distance > 50 && currentSlide > 0) {
        currentSlide--;
        updateSlide();
    }
}, { passive: true });

updateSlide();
// ×でGIFを閉じる
gifClose.addEventListener("click", () => {
    gifPopup.style.display = "none";
    gifImage.src = "";
});

// 美尻くんって？ポップアップ
const aboutButton = document.getElementById("aboutButton");
const aboutModal = document.getElementById("aboutModal");
const aboutClose = document.getElementById("aboutClose");

// 開く
aboutButton.addEventListener("click", () => {
    aboutModal.style.display = "flex";
});

// ×で閉じる
aboutClose.addEventListener("click", () => {
    aboutModal.style.display = "none";
});
