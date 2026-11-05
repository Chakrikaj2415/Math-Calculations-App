// Handles standard expression evaluation from the text input
function calculateInput() {
    let expr = document.getElementById("fname").value;
    try {
        let result = eval(expr);
        document.getElementById("Message").innerHTML = "Result: " + result;
    } catch (e) {
        document.getElementById("Message").innerHTML = "Invalid Expression";
    }
}

// Checks if a file is selected before loading
function checkFileProperty() {
    let x = document.getElementById("fileToLoad");
    let txt = "";
    if ('files' in x) {
        if (x.files.length == 0) {
            txt = "Select one or more files...";
        } else {
            loadFileAsText();
        }
    } else {
        if (x.value == "") {
            txt += "Select one or more files...";
        } else {
            txt += "The files property is not supported by your browser!";
            txt += "<br>The path of the selected file: " + x.value;
        }
    }
    document.getElementById("Message").innerHTML = txt;
}

// Loads the text file contents into the textarea
function loadFileAsText() {
    let fileToLoad = document.getElementById("fileToLoad").files[0];

    if (!fileToLoad) return;

    let fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent) {
        let textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("fileInput").value = textFromFileLoaded; 
    };
    
    fileReader.readAsText(fileToLoad, "UTF-8");
}