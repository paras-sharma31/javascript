const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}
let isALive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  console.log(dinoTop, "dinoTop");

  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
  console.log(cactusLeft, "cactusLeft");

  if (cactusLeft < 50 && cactusLeft < 0 && dinoTop >= 140) {
    alert("Game Over !");
  }
}, 10);
document.addEventListener("keydown", function (event) {
  jump();
});