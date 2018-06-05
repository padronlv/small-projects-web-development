// Make a page that has on it an element that is 100px by 100px in size and has
// a solid black border. When the user mouses down on this box, its background
// should change to a randomly selected color. When the user mouses up on it,
// its background should change to another randomly selected color.

var box = document.getElementsByClassName("box")[0];
var clr;

box.addEventListener("mousedown", function () {
    clr = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' +
    (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256))
    + ')';
    box.style.backgroundColor = clr;
});

box.addEventListener("mouseup", function () {
    clr = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' +
    (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256))
    + ')';
    box.style.backgroundColor = clr;
});
