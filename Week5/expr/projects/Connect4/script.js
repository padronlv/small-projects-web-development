(function () {
    var player= "P1";
    var lastP = "player2";
    var slotsInRow0 = $('.row0');
    var slotsInRow1 = $('.row1');
    var slotsInRow2 = $('.row2');
    var slotsInRow3 = $('.row3');
    var slotsInRow4 = $('.row4');
    var slotsInRow5 = $('.row5');
    var rows = [slotsInRow0,slotsInRow1,slotsInRow2,slotsInRow3,slotsInRow4,slotsInRow5];
    var diagonalUp1 = $(".diagonalUp1");
    var diagonalUp2 = $(".diagonalUp2");
    var diagonalUp3 = $(".diagonalUp3");
    var diagonalUp4 = $(".diagonalUp4");
    var diagonalUp5 = $(".diagonalUp5");
    var diagonalUp6 = $(".diagonalUp6");
    var diagonalDown1 = $(".diagonalDown1");
    var diagonalDown2 = $(".diagonalDown2");
    var diagonalDown3 = $(".diagonalDown3");
    var diagonalDown4 = $(".diagonalDown4");
    var diagonalDown5 = $(".diagonalDown5");
    var diagonalDown6 = $(".diagonalDown6");
    var diagonal = [diagonalUp1, diagonalUp2, diagonalUp3, diagonalUp4, diagonalUp5, diagonalUp6, diagonalDown1, diagonalDown2, diagonalDown3, diagonalDown4, diagonalDown5, diagonalDown6];

    var childrenNumber;
    $(".column").on("click", function (e) {
        if (player == "player1"){
            // rowToCheck = $(e.currentTarget).children(".player1, .player2").length;
            childrenNumber = 6 - $(e.currentTarget).children(".player1, .player2").length;

            // console.log($(e.currentTarget));
            // console.log(childrenNumber);
            $(e.currentTarget).children(':nth-child(' + childrenNumber + ')').addClass("player1");
            player = "player2";
            lastP = "player1";

        } else {
            // rowToCheck = $(e.currentTarget).children(".player1, .player2").length;
            childrenNumber = 6 - $(e.currentTarget).children(".player1, .player2").length;
            // console.log($(e.currentTarget));
            // console.log(childrenNumber);
            $(e.currentTarget).children(':nth-child(' + childrenNumber +')').addClass("player2");
            player = "player1";
            lastP= "player2";
        }
        if (win($(e.currentTarget).children())) {
            setTimeout(function () {
                $(".popup-overlay").addClass("active");
            }, 1000);
        } else if (win(rows[childrenNumber - 1])) {
            setTimeout(function () {
                $(".popup-overlay").addClass("active");
            }, 1000);
        } else if (windiagonal(diagonal)) {
            setTimeout(function () {
                $(".popup-overlay").addClass("active");
            }, 1000);
        }
    });
    function win(elems) {
        // console.log(elems);
        var points = 0;
        for (var i = 0; i < elems.length; i++) {
            // console.log(elems.eq(i));
            if (elems.eq(i).hasClass(lastP)) {
                points += 1;
                console.log(points);
                if (points >= 4) {
                    console.log("win");
                    return true;
                }
            } else {
                points = 0;
            }
        }
    }
    function windiagonal(diagonal) {
        // console.log(elems);
        for (var j = 0; j < diagonal.length; j++) {
            var elems = diagonal[j];
            var points = 0;
            for (var i = 0; i < elems.length; i++) {
                // console.log(elems.eq(i));
                if (elems.eq(i).hasClass(lastP)) {
                    points += 1;
                    console.log(points);
                    if (points >= 4) {
                        console.log("win");
                        return true;
                    }
                } else {
                    points = 0;
                }
            }

        }
    }

    $("#start").on("click", function () {
        $(".popup-overlay").removeClass("active");
        $(".circle").removeClass("player1").removeClass("player2");
    });
})();
