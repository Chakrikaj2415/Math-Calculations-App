function splitFunction() {
  let arr = [];
  let str = document.getElementById("fileInput").value;
  arr = str.split(",");

  return arr;

}

function calculateInput() {
    let expr = document.getElementById("fname").value;
    try {
        let result = eval(expr);
        document.getElementById("Message").innerHTML = "Result: " + result;
    } catch (e) {
        document.getElementById("Message").innerHTML = "Invalid Expression";
    }
}

function calculateAverage() {
    let numbers = splitFunction();
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    let average = sum / numbers.length;
    document.getElementById("Message").innerHTML = "Average: " + average;
}

function findMax() {
    let numbers = splitFunction();
    let max = Math.max(...numbers);
    document.getElementById("Message").innerHTML = "Maximum: " + max;
}

function findMin() {
    let numbers = splitFunction();
    let min = Math.min(...numbers);
    document.getElementById("Message").innerHTML = "Minimum: " + min;
}