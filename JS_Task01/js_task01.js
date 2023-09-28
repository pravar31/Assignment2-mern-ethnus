function reverseNum() {
  let reverse = 0;
  let number = document.getElementById("x").value;
  while (number > 0) {
    rightmost = number % 10;
    reverse = reverse * 10 + rightmost;
    number = Math.floor(number / 10);
  }
  document.getElementById("reversed").innerHTML = `Reverse is: ${reverse}`;
}
