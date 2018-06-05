

// Make a page that has a <textarea> element on it. As the user types visible
// characters into this field, the characters should be replaced with the
// characters in the corresponding position in the Gettysburg Address. (Note -
//     you can get and set the text in a <textarea> through its value property.)

var text = document.getElementsByClassName("textarea")[0];
var str = "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.";
var newStr = "";
var i = 0;
text.addEventListener("input", function () {
    newStr += str[i];
    text.value = newStr;
    i++;
});
