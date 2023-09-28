function multiply() {
  let number_1 = document.getElementById("number-1").value;
  let number_2 = document.getElementById("number-2").value;
  document.getElementById("result").innerHTML = `Result is: ${String(number_1 * number_2)}`;
}

function divide() {
  let number_1 = document.getElementById("number-1").value;
  let number_2 = document.getElementById("number-2").value;
  document.getElementById("result").innerHTML = `Result is: ${String(number_1 / number_2)}`;
}
