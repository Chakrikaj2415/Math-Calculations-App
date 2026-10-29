// Function to split the text area content into an array of numbers
function splitFunction() {
    let arr = [];
    let str = document.getElementById("fileInput").value;
    
    // Split by commas and convert elements to numbers
    let stringArray = str.split(",");
    arr = stringArray.map(item => parseFloat(item.trim()));
    
    return arr;
}

// Optional text input calculation using eval or Math methods
function calculateInput() {
    let expr = document.getElementById("fname").value;
    try {
        let result = eval(expr);
        document.getElementById("Message").innerHTML = "Result: " + result;
    } catch (e) {
        document.getElementById("Message").innerHTML = "Invalid Expression";
    }
}

// Statistical calculation: Average (Mean)
function calculateAverage() {
    let numbers = splitFunction();
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    let average = sum / numbers.length;
    document.getElementById("Message").innerHTML = "Average: " + average;
}

// Statistical calculation: Maximum
function findMax() {
    let numbers = splitFunction();
    let max = Math.max(...numbers);
    document.getElementById("Message").innerHTML = "Maximum: " + max;
}

// Statistical calculation: Minimum
function findMin() {
    let numbers = splitFunction();
    let min = Math.min(...numbers);
    document.getElementById("Message").innerHTML = "Minimum: " + min;
}