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

function calculateMedian() {
    let numbers = splitFunction();
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
    let numbers = splitFunction();
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