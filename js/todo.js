const todoForm = document.getElementById("todo-form");
const todoContents = todoForm.querySelector("#todo-contents");
const todoTimer = todoForm.querySelector("#todo-timer");
const todoList = document.getElementById("todo-list");

const TODO_KEY = "todos";
let todos=[];

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((todo)=> todo.id !== parseInt(li.id));
  saveTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = `${newTodo.contents} | ${newTodo.timer}`;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function saveTodos() {
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

function todoHandler(event) {
  event.preventDefault();
  const newTodoContens = todoContents.value;
  const newTodoTimer = todoTimer.value;

  const newTodoObj = {
    id: Date.now(),
    contents: newTodoContens,
    timer: newTodoTimer
  };

  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos(newTodoObj);
}

todoForm.addEventListener("submit", todoHandler);

const savedTodo = localStorage.getItem(TODO_KEY);
if(savedTodo !== null) {
  const parsedTodo = JSON.parse(savedTodo);
  todos = parsedTodo;
  parsedTodo.forEach(paintTodo);
}
console.log("Todo Success");