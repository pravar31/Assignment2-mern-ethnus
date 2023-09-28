const USERNAME = "example";
const PASSWORD = "example@20xx";

const verify = () => {
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  if (username.value === USERNAME && password.value === PASSWORD) {
    alert("login successful");
  } else {
    alert(`Incorrect username or password. Try again\n
    (Credentials:\nusername: ${USERNAME}, password: ${PASSWORD})`);
    username.innerText = "";
    password.innerText = "";
  }
};
