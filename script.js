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
