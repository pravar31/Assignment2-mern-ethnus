let password = document.getElementById("password");
let repassword = document.getElementById("repassword");
let ph = document.getElementById("ph");

const verify = () => {
  if (password.value.length < 8) {
    document.getElementById("invpswd").innerHTML = "password too short. use >8 chars";
  } else {
    document.getElementById("invpswd").innerHTML = "";
  }
};
