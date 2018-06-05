// Exercises
// Make a page that has on it an element that is 100px by 100px in size, has
// absolute positioning, and has a solid background color. Add an event handler
// that makes this box center itself directly under the user's mouse pointer as
// it is moved across the screen.

var box = document.getElementsByClassName("box")[0];

document.addEventListener("mousemove", function (e) {
    box.style.left = (e.pageX - 0.5 * box.offsetWidth) + "px";
    box.style.top = (e.pageY - 0.5 * box.offsetHeight) + "px";
});
