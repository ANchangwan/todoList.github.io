const welcome = document.querySelector(".welcome");
document.querySelector("body").onload = () => {
  const div = document.createElement("div");
  const span = document.createElement("span");
  const name = localStorage.getItem("name");

  span.innerHTML = `${name}님 환영합니다.`;
  welcome.appendChild(span);
};

setTimeout(() => {
  welcome.remove();
}, 3000);
