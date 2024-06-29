const timeDate = document.querySelector(".time__date");
const days = document.querySelector(".time__day");

function handleClock() {
  let date = new Date();

  let year = date.getFullYear();
  let month = date.getDay();
  let day = date.getDate();

  let hours = date.getHours();
  let second = date.getSeconds();

  timeDate.innerText = `${year}년 ${month}월 ${day}일`;
  days.innerText = `${hours} : ${second}`;
}

handleClock();
setInterval(() => {
  handleClock();
}, 1000);
