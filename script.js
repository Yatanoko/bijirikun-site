// GIFポップアップ
const gifPopup = document.getElementById("gifPopup");
const gifImage = document.getElementById("gifImage");
const gifClose = document.getElementById("gifClose");

// キャラクター画像をタップしたらGIFを表示
document.querySelectorAll(".search-item").forEach((item) => {
    item.addEventListener("click", () => {
        const gifNumber = item.dataset.gif;
        gifImage.src = `movies/${gifNumber}.gif`;
        gifPopup.style.display = "flex";
    });
});

// ×で閉じる
gifClose.addEventListener("click", () => {
    gifPopup.style.display = "none";
    gifImage.src = "";
});
