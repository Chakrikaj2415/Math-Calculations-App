function calculateInput() {
    let input = document.getElementById("fname").value;

    try {
        let result = eval(input);

        document.getElementById("fname").value = result;
        document.getElementById("Message").innerHTML = "Calculation Complete" + result;
    }
    catch(err) {
        document.getElementById("fname").value = "Error";
        document.getElementById("Message").innerHTML = "Invalid Expression";
    }
}
function findMax() {

}

function findMin() {

}