(function () {
    var headlines = document.getElementsByClassName("my-headlines")[0];
    var left = headlines.offsetLeft;
    var links = headlines.getElementsByTagName("A");
    var myReqId;
    // setTimeout(function() {
    //     headlines.style.left = left - 1 + "px"
    // })();

    headlines.addEventListener("mouseover", function(){
        cancelAnimationFrame(myReqId);
    });

    headlines.addEventListener("mouseout", function (){
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
        left--;
        if (left < 0 - links[0].offsetWidth) {
            left += links[0].offsetWidth;
            headlines.appendChild(links[0]);
        }
        headlines.style.left = left + "px";
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
