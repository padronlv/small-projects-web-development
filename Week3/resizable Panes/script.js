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
        if(barClick){
            console.log("moving");
            finishX = e.offsetX;
            bar.css({
                left: finishX + "px"
            });
            $(".resizer").css({
                width: finishX + "px"
            });
        }
    });

    $(".panes").on("mouseup", function(e) {
        if(barClick){

            finishX = e.offsetX;
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
