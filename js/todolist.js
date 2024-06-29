const listAdd = document.querySelector(".todo-list__add");
const listDelete = document.querySelector(".todo-list__delete");
const text = document.querySelector(".todo-list__text");
const todoList = document.querySelector(".section__list");

const ToDos_key = "todos";

let toDos = [];

const savedToDos = () => {
  localStorage.setItem(ToDos_key, JSON.stringify(toDos));
};

const deleteToDo = (event) => {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  savedToDos(toDos);
};

const paintToDo = (newToDo) => {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
};

function handleAdd(e) {
  e.preventDefault();
  const newToDo = text.value;
  text.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  savedToDos();
}

listAdd.addEventListener("click", handleAdd);

const savedToDo = localStorage.getItem(ToDos_key);
console.log(savedToDo);
if (savedToDo !== null) {
  const parsedToDos = JSON.parse(savedToDo);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
} else {
  paintToDo(toDos);
}
