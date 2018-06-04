(function () {
    var headlines = document.getElementsByClassName("my-headlines")[0];
    var left = headlines.offsetLeft;
    var links = headlines.getElementsByTagName("A");
    // setTimeout(function() {
    //     headlines.style.left = left - 1 + "px"
    // })();

    function tick() {
        left--;
        if (left < 0 - links[0].offsetWidth) {
            left += links[0].offsetWidth;
            headlines.appendChild(links[0]);
        }

        headlines.style.left = left + "px";
        requestAnimationFrame(tick);
    }
    tick();


    // window.swap = function() {
    //     // var first = links[0];
    //     left += links[0].offsetWidth;
    //     headlines.removeChild(first);
    //     headlines.appendChild(first);
    // };


})();
