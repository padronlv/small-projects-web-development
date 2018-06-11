(function () {
    var popupActive = false;
    var hm = document.getElementsByClassName("hamburgermenu")[0];
    var hmlayer = document.getElementById("hamburger-menu");
    var hmpop = document.getElementsByClassName("menu")[0];
    var closer = document.getElementsByClassName("closer")[0];

    hm.addEventListener("click", function () {
        hmlayer.style.transform = "translateY(0%)";
        hmpop.style.transform = "translateX(0%)";
        // hmpop.classList.add("animation");
    });

    closer.addEventListener("click", function () {
        hmlayer.style.transform = "translateY(-100%)";
        hmpop.style.transform = "translateX(100%)";
        // hmpop.classList.remove("animation");
    });

    hmpop.addEventListener("click", function (e) {
        e.stopPropagation();
    });


    hmlayer.addEventListener("click", function () {
        if(popupActive == false){
            hmlayer.style.transform = "translateY(-100%)";
            hmpop.style.transform = "translateX(100%)";
            // hmpop.classList.remove("animation");
        }
    });

    setTimeout(function () {
        $(".popup-overlay").addClass("active");
        $("#hamburger-menu").css({
            transform: "translateY(0%)"
        });
        popupActive = true;
    }, 1000);

    $(".popup-closer").on("click", function () {
        $(".popup-overlay").removeClass("active");
        $("#hamburger-menu").css({
            transform: "translateY(-100%)"
        });
        popupActive = false;
    });
})();
