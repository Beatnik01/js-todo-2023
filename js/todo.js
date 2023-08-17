const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];
let isOn = false;

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id != parseInt(li.id));
  saveTodos();
}

function checkToDo(event) {
  const li = event.target.closest("li");
  if ((li.tagName = "li")) {
    isOn = !isOn;
    li.style.backgroundColor = isOn ? "#3CB371" : "tomato";
    li.style.borderColor = "transparent";
    let toDo = toDos.find((todo) => todo.id === parseInt(li.id));
    toDo.isOn = isOn;
    saveTodos();
    console.log(toDo);
  }
}

function paintToDo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  const btn = document.createElement("button");
  span.innerText = newTodoObj.text;
  btn.innerText = "❌";
  li.style.backgroundColor = newTodoObj.isOn ? "#3CB371" : "tomato";
  li.style.borderColor = "transparent";
  btn.addEventListener("click", deleteToDo);
  li.addEventListener("click", checkToDo);
  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);
}

function handleToDoSumbit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
    isOn: false,
  };
  toDoInput.value = "";
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveTodos();
}
toDoForm.addEventListener("submit", handleToDoSumbit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parsedToDos = JSON.parse(savedTodos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
