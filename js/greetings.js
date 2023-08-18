const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const greetingName = document.querySelector("#greetingName");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  const time = new Date().getHours();
  let greetingText = "";
  if (time <= 6) {
    greetingText = "Good morning!";
  } else if (time <= 12) {
    greetingText = "Good afternoon!";
  } else if (time <= 18) {
    greetingText = "Good evening!";
  } else {
    greetingText = "Good night!";
  }
  greetingName.innerText = `${greetingText} ${username}`;
  greetingName.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);

  console.log(time);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);
if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(saveUsername);
}
