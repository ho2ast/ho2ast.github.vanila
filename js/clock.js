const clock = document.querySelector("h2#clock");

function getClock() {
  // const xmas = new Date("2022-12-25 00:00").getTime();
  // const now = new Date().getTime();
  // const diff = (xmas - now) / 1000;


  // const days = Math.floor(diff / (60 * 60 * 24));
  // const hours = Math.floor((diff / (60 * 60)) % 24);
  // const minutes = Math.floor((diff / 60) % 60);;
  // const second = Math.floor(diff % 60);
  // clock.innerText = `${days}d ${hours}h ${minutes}m ${second}s`;

  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${second}`;
}

getClock();
setInterval(getClock, 1000);
// setTimeout(sayHello, 5000);