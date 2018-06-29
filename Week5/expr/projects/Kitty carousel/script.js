(function () {

    var kitties = document.getElementsByClassName("kitty");
    var dots = document.getElementsByClassName("dot");
    var timer;
    var isTransitioning = false;
    var current = 0;
    var startX;
    var startY;
    var finishX;
    var finishY;
    function moveKitties(next) {
        isTransitioning = true;
        kitties[current].classList.remove("onscreen");
        kitties[current].classList.add("exit");
        dots[current].classList.remove("highlight");

        if(typeof next == "number") {
            current = next;
        } else {
            current++;
        }
        if (current >= kitties.length) {
            current = 0;
        }
        kitties[current].classList.add("onscreen");
        dots[current].classList.add("highlight");
    }
    document.addEventListener("transitionend", function(e) {
        if (e.target.classList.contains("exit")) {
            isTransitioning = false;
            // e.target.removeEventListener("transitionend", transitionEnd);
            e.target.classList.remove("exit");
            timer = setTimeout(moveKitties, 4000);
        }
    });


    //  [].slice.call(dots.forEach(function(dot, i) {
    //     dot.addEventListener("click", function(e) {
    //     clearTimeout(timer);
    //     console.log(i);
    // });

    // for (var i = 0; i < dots.length; i++) {
    //     dots[i].addEventListener('click', function() {
    //         clearTimeout();
    //         moveKitties(i);
    //     });
    // }
    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', getDotClickHandler(i));
    }

    function getDotClickHandler(n) {
        return function() {
            if(current == n) {
                return;
            }
            if (isTransitioning) {
                return;
            }
            clearTimeout(timer);
            moveKitties(n);
        };
    }
    document.addEventListener("touchstart", function(e) {
        console.log("touchstart");
        startX = e.touches[0].pageX;
        startY = e.touches[0].pageY;
    });
    document.addEventListener("touchend", function(e) {
        console.log("touchend");
        finishX = e.changedTouches[0].pageX;
        finishY = e.changedTouches[0].pageY;
        console.log(finishX);
        if (finishX < startX) {
            if (isTransitioning == false) {
                clearTimeout(timer);
                moveKitties();
            }
        }
    });
    timer = setTimeout(moveKitties, 4000);
})();
