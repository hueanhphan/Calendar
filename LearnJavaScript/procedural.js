const form = document.getElementById("user-input");

function signupHandler(event) {
  event.preventDefault();

  const usernameInput = document.getElementById("username");
  const enterUserName = usernameInput.value;

  const passwordInput = document.getElementById("password");
  const enterPassword = passwordInput.value;

  if (enterUserName.trim().length === 0) {
    alert("Invalid input - username must not be empty!");
    return;
  }
  if (enterPassword.trim().length <= 5) {
    alert("Invalid input - password must be six characters or longer.");
    return;
  }

  const user = {
    userName: enterUserName,
    password: enterPassword,
  };
  console.log(user);
  console.log("Hi, I am " + user.userName);
}

form.addEventListener("submit", signupHandler);
