// Splits the textarea content by commas into an array
function splitFunction() {
    let str = document.getElementById("fileInput").value;
    let arr = str.split(",");
    
    // Convert each item in the array to a number
    for (let i = 0; i < arr.length; i++) {
        arr[i] = parseFloat(arr[i]);
    }
    
    return arr;
}

// Calculate Average (Mean)
function calculateAverage() {
    let numbers = splitFunction();
    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    
    let average = sum / numbers.length;
    document.getElementById("Message").innerHTML = "Average: " + average;
}

// Find Maximum Value
function findMax() {
    let numbers = splitFunction();
    let max = numbers[0];
    
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    
    document.getElementById("Message").innerHTML = "Maximum: " + max;
}

// Find Minimum Value
function findMin() {
    let numbers = splitFunction();
    let min = numbers[0];
    
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    
    document.getElementById("Message").innerHTML = "Minimum: " + min;
}