const body = document.querySelector("body");

const imgs = ["1.jpg", "2.jpg", "3.jpg"];
const randomImg = Math.floor(Math.random() * imgs.length);

body.style.backgroundImage = `url(/img/${imgs[randomImg]})`;
