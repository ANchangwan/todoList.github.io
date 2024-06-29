const inputValue = document.querySelector(".form .form__input");
const inputButton = document.querySelector(".form .form__button");

function handleSubmit(e) {
  e.preventDefault();
  if (!inputValue.value) {
    confirm("입력해주세요!");
  }
  localStorage.setItem("name", inputValue.value);
  window.location.href = "home.html";
}

inputButton.addEventListener("click", handleSubmit);
