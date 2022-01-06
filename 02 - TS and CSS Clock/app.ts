const secondHand = document.querySelector(".second-hand") as HTMLDivElement;
const hourHand = document.querySelector(".hour-hand") as HTMLDivElement;
const minuteHand = document.querySelector(".min-hand") as HTMLDivElement;

const setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();

  //   console.log(minute);
  //   console.log(hour);

  //   console.log(seconds);

  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minuteDegrees = (minute / 60) * 360 + 90;
  const hourDegrees = (hour / 60) * 360 + 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
};

setInterval(setDate, 1000);
