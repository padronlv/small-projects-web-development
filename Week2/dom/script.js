// Exercises
// Write a function that expects a string representing a selector to be passed
// as a parameter. The function should find all the elements in the document
// that match the selector and change their style so that the text they contain
// is italic, underlined, and bold.
//
function styleChange(str) {
    var elements = document.querySelectorAll(str);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.fontStyle = "italic";
        elements[i].style.fontWeight = "bold";
        elements[i].style.textDecoration = "underline";
    }
}
styleChange(".my-headlines");

// Write a function that expects a string representing a class name to be passed
// as a parameter. The function should return an array containing all the
// elements in the document that have the class that was passed in.

function collectElements (str) {
    var arrayLike = document.getElementsByClassName(str);
    var trueArray = Array.from(arrayLike);
    return trueArray;
}

collectElements("my-headlines");
//
// Write a function that inserts an element into the body of the currently
// loaded page. That element should have fixed position, z-index of 2147483647,
// left of 20px, top of 100px, font-size of 200px, and contain the text 'AWESOME'.

function insertElement (){

    var newDiv = document.createElement("DIV");
    var newText = document.createTextNode("AWESOME");
    newDiv.appendChild(newText);
    document.body.appendChild(newDiv);
    newDiv.style.position = "fixed";
    newDiv.style.zIndex = "2147483647";
    newDiv.style.left = 20 + "px";
    newDiv.style.top = 100 + "px";
    newDiv.style.fontSize = 200 + "px";
}

insertElement();
