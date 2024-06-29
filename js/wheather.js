const API_KEY = "7847cf3208912195e9016a60e5307c5d";

async function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const weather = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
  ).then((response) => response.json());
  const pos = document.querySelector(".weather__position");
  const today = document.querySelector(".weather__today");
  const weatherImg = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  pos.innerText = weather.name;
  today.setAttribute("src", weatherImg);
}

function onGeoError() {
  alert("위치를 알  수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
