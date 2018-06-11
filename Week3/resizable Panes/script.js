(function () {
    var bar = $("#bar");
    var finishX;
    var barClick = false;

    bar.on("mousedown", function(e) {
        e.preventDefault();
        console.log("touchstart");
        barClick = true;

    });

    $(".panes").on("mousemove", function(e) {
        e.preventDefault();
        if(barClick){
            console.log("moving" + e.offsetX);
            finishX = e.offsetX + e.target.offsetLeft;
            bar.css({
                left: finishX + "px"
            });
            $(".resizer").css({
                width: finishX + "px"
            });
        }
    });

    $(".panes").on("mouseup", function(e) {
        e.preventDefault();
        if(barClick){
            console.log("finish" + e.offsetX);
            finishX = e.offsetX + e.target.offsetLeft;
            bar.css({
                left: finishX + "px"
            });
            $(".resizer").css({
                width: finishX + "px"
            });
            barClick = false;
        }
    });


})();
