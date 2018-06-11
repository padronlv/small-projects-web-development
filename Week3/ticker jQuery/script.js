(function () {

    var headlines = $(".my-headlines");
    var pos= headlines.offset();
    var leftPos = pos.left;
    var links = $("a");
    var myReqId;
    // setTimeout(function() {
    //     headlines.style.left = left - 1 + "px"
    // })();


    headlines.eq(0).on("mouseover", function(){
        cancelAnimationFrame(myReqId);
    }).on("mouseout", function (){
        tick();
    });

    // function styleChange(str) {
    //     var elements = document.querySelectorAll(str);
    //     for (var i = 0; i < elements.length; i++) {
    //         elements[i].style.fontStyle = "italic";
    //         elements[i].style.fontWeight = "bold";
    //         elements[i].style.textDecoration = "underline";
    //     }
    // }
    // styleChange(".my-headlines");



    function tick() {
        leftPos--;
        if (leftPos < 0 - links.eq(0).outerWidth()) {
            leftPos += links.eq(0).outerWidth();
            links.eq(0).appendTo(headlines);
            links = $("a");
        }
        headlines.eq(0).css({
            left: leftPos + "px"
        });
        myReqId = requestAnimationFrame(tick);
    }
    tick();


    // window.swap = function() {
    //     // var first = links[0];
    //     left += links[0].offsetWidth;
    //     headlines.removeChild(first);
    //     headlines.appendChild(first);
    // };


})();
