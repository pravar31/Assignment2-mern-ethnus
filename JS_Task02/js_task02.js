function reverseString() {
  let string = document.getElementById("x").value;
  document.getElementById("reversed").innerHTML = `Reverse string: ${string.split("").reverse().join("")}`;
}
