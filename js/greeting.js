const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";
const HIDDEN = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  loginForm.classList.add(HIDDEN);

  const curHour = new Date().getHours();
  const helloHour = ["Morning", "Afternoon", "Evening"];
  if(curHour >= 6 && curHour < 12)
    greeting.innerText = `Good ${helloHour[0]}, ${username}`;
  else if(curHour >= 12 && curHour < 18)
    greeting.innerText = `Good ${helloHour[1]}, ${username}`;
  else
  greeting.innerText = `Good ${helloHour[2]}, ${username}`;

  
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null) {
  loginForm.classList.remove(HIDDEN);
  loginForm.addEventListener("submit", onLoginSubmit);
}
else {
  paintGreetings(savedUsername);
}