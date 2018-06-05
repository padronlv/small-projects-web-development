
// Make a page that has on it an element that is 200px by 200px in size and has
// a solid background color. Nest within that element another element that is
// 50px by 50px in size and has a different solid background color. When the
// user clicks on the outer element its background color should change to a
// randomly selected color. However, if the user clicks on the inner element,
// the inner element's background color should change to a randomly selected
// background color but the outer element's background color should not change
// at all.

var boxBig = document.getElementsByClassName("box")[0];
var boxSmall = document.getElementsByClassName("box")[1];
var clr;

boxBig.addEventListener("click", function () {
    clr = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' +
    (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256))
    + ')';
    boxBig.style.backgroundColor = clr;
});

boxSmall.addEventListener("click", function (e) {
    clr = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' +
    (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256))
    + ')';
    boxSmall.style.backgroundColor = clr;
    e.stopPropagation();
});
