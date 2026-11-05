function splitFunction() {
    let str = document.getElementById("fileInput").value;
    
    let rawArr = str.trim().split(/[\s,]+/);
    let numbers = [];
    
    for (let i = 0; i < rawArr.length; i++) {
        let num = parseFloat(rawArr[i]);
        if (!isNaN(num)) {
            numbers.push(num);
        }
    }
    
    return numbers;
}

// Calculate Average (Mean)
function calculateAverage() {
    let numbers = splitFunction();
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
    let numbers = splitFunction();
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
    let numbers = splitFunction();
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