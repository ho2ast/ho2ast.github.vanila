const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const h1 = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME = "username";

function handleLoginSubmit(info) {
  info.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  h1.classList.remove(HIDDEN_CLASSNAME);
  h1.innerText = `Hello ${username}`;
  localStorage.setItem(USERNAME, username);
}

const savedUsername = localStorage.getItem(USERNAME);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginSubmit);
} else {
  h1.innerText = `Hello ${savedUsername}`;
  h1.classList.remove(HIDDEN_CLASSNAME);
}