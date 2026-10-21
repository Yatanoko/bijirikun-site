const cameraButton = document.getElementById("cameraButton");
const scene = document.getElementById("arScene");
const target = document.querySelector("[mindar-image-target]");

scene.style.display = "none";

// 認識後にGIFを表示する画面
const gifScreen = document.createElement("div");

gifScreen.style.cssText = `
    display: none;
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: white;
    justify-content: center;
    align-items: center;
`;

const gif = document.createElement("img");
gif.src = "./movies/01.gif";
gif.alt = "キャラクターのアニメーション";
gif.style.cssText = "max-width: 100%; max-height: 100%; object-fit: contain;";

gifScreen.appendChild(gif);
document.body.appendChild(gifScreen);

// ボタンを押したらカメラを起動
cameraButton.addEventListener("click", async () => {
    scene.style.display = "block";

    try {
        await scene.systems["mindar-image-system"].start();
    } catch (error) {
        console.error("カメラを起動できませんでした:", error);
        alert("カメラを起動できませんでした。カメラの使用を許可してください。");
    }
});

// キャラクターを認識したらGIFを表示
target.addEventListener("targetFound", () => {
    gifScreen.style.display = "flex";
});

