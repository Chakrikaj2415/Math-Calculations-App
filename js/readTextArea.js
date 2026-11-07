function splitFunction() {
    let arr = [];
    let str = document.getElementById("fileInput").value;
    arr = str.split(",");
    return arr;
}

function getNumericArray() {
    let rawArr = splitFunction();
    let numbers = [];
    for (let i = 0; i < rawArr.length; i++) {
        let num = parseFloat(rawArr[i].trim());
        if (!isNaN(num)) {
            numbers.push(num);
        }
    }
    return numbers;
}

function calculateAverage() {
    let numbers = getNumericArray();
    if (numbers.length === 0) {
        document.getElementById("Message").innerHTML = "Error: No numbers found in text area.";
        return;
    }
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    let average = sum / numbers.length;
    document.getElementById("Message").innerHTML = "Average: " + average;
}

function findMax() {
    let numbers = getNumericArray();
    if (numbers.length === 0) {
        document.getElementById("Message").innerHTML = "Error: No numbers found in text area.";
        return;
    }
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    document.getElementById("Message").innerHTML = "Maximum: " + max;
}

function findMin() {
    let numbers = getNumericArray();
    if (numbers.length === 0) {
        document.getElementById("Message").innerHTML = "Error: No numbers found in text area.";
        return;
    }
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    document.getElementById("Message").innerHTML = "Minimum: " + min;
}

function calculateMedian() {
    let numbers = getNumericArray();
    if (numbers.length === 0) {
        document.getElementById("Message").innerHTML = "Error: No numbers found in text area.";
        return;
    }
    numbers.sort((a, b) => a - b);
    let middle = Math.floor(numbers.length / 2);
    let median;
    if (numbers.length % 2 === 0) {
        median = (numbers[middle - 1] + numbers[middle]) / 2;
    } else {
        median = numbers[middle];
    }
    document.getElementById("Message").innerHTML = "Median: " + median;
}

function calculateMode() {
    let numbers = getNumericArray();
    if (numbers.length === 0) {
        document.getElementById("Message").innerHTML = "Error: No numbers found in text area.";
        return;
    }
    let counts = {};
    let maxFreq = 0;
    let modes = [];
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > maxFreq) {
            maxFreq = counts[num];
        }
    }
    for (let num in counts) {
        if (counts[num] === maxFreq) {
            modes.push(num);
        }
    }
    if (maxFreq === 1 && modes.length === numbers.length) {
        document.getElementById("Message").innerHTML = "Mode: No single mode (all values unique)";
    } else {
        document.getElementById("Message").innerHTML = "Mode: " + modes.join(", ");
    }
}

function calculateRound() {
    let numbers = getNumericArray();
    if (numbers.length === 0) {
        document.getElementById("Message").innerHTML = "Error: No numbers found in text area.";
        return;
    }
    let roundedNumbers = numbers.map(n => Math.round(n));
    document.getElementById("Message").innerHTML = "Rounded: " + roundedNumbers.join(", ");
}

function calculatePower() {
    let numbers = getNumericArray();
    if (numbers.length < 2) {
        document.getElementById("Message").innerHTML = "Error: Need at least two numbers (base, exponent).";
        return;
    }
    let result = Math.pow(numbers[0], numbers[1]);
    document.getElementById("Message").innerHTML = "Power (" + numbers[0] + " ^ " + numbers[1] + "): " + result;
}

function calculatePiMultiply() {
    let numbers = getNumericArray();
    if (numbers.length === 0) {
        document.getElementById("Message").innerHTML = "Error: No numbers found in text area.";
        return;
    }
    let result = numbers[0] * Math.PI;
    document.getElementById("Message").innerHTML = "First Value * PI: " + result;
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

function toggleBackground() {
    document.body.classList.toggle("dark-theme");
}