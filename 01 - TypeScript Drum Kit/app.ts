const playSound = (e) => {
  const audio = document.querySelector(
    `audio[data-key= "${e.keyCode}"]`
  ) as HTMLAudioElement;

  const key = document.querySelector(
    `.key[data-key= "${e.keyCode}"]`
  ) as HTMLDivElement;

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  key.classList.add("playing");
};

function removeTransistion(e) {
  if (e.propertyName !== "transform") return;

  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key") as NodeList;

keys.forEach((key) => key.addEventListener("transitionend", removeTransistion));

window.addEventListener("keydown", playSound);
