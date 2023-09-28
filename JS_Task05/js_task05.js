const checkDetails = () => {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let website = document.getElementById("website");
  let message = document.getElementById("message");

  if (document.getElementById("name").value === "") {
    document.getElementById("name-reqd").innerHTML = "This field is required";
    name.style.border = "red solid 1px";
  } else {
    document.getElementById("name-reqd").innerHTML = "";
    name.style.border = "black solid 1px";
  }

  if (email.value === "") {
    document.getElementById("email-reqd").innerHTML = "This field is required";
    email.style.border = "red solid 1px";
  } else {
    document.getElementById("email-reqd").innerHTML = "";
    email.style.border = "black solid 1px";
  }

  if (website.value === "") {
    document.getElementById("website-reqd").innerHTML = "This field is required";
    website.style.border = "red solid 1px";
  } else {
    document.getElementById("website-reqd").innerHTML = "";
    website.style.border = "black solid 1px";
  }

  if (message.value === "") {
    document.getElementById("message-reqd").innerHTML = "This field is required";
    message.style.border = "red solid 1px";
  } else {
    document.getElementById("message-reqd").innerHTML = "";
    message.style.border = "black solid 1px";
  }
};
