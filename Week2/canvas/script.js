(function() {
    var bigBoy = document.querySelector('canvas');
    var canv = document.getElementsByTagName('canvas')[1];
    var ctxCanv =  canv.getContext('2d');
    var ctxB = bigBoy.getContext("2d");
    var X = 10;
    var Y = 10;

    ctxCanv.strokeStyle = '#990000';
    // ctxCanv.fillStyle = 'rgba(153, 51, 0, .5)';
    // ctxCanv.beginPath();
    // ctxCanv.moveTo(100, 0);
    // ctxCanv.lineTo(0, 200);
    // ctxCanv.moveTo(100, 0);
    // ctxCanv.lineTo(200, 200);
    // ctxCanv.lineTo(0, 200);
    // ctxCanv.stroke();

    // ctxCanv.fillRect(20, 30, 100, 200);
    ctxCanv.beginPath();

    ctxCanv.arc(100, 100, 50, 0.5 * Math.PI, 2.5 * Math.PI, false);
    ctxCanv.lineTo(100,300);
    ctxCanv.lineTo(50, 350);
    ctxCanv.moveTo(100, 300);
    ctxCanv.lineTo(150, 350);
    ctxCanv.moveTo(25, 175);
    ctxCanv.lineTo(100, 200);
    ctxCanv.lineTo(175, 175);

    ctxCanv.stroke();




    ctxB.drawImage(canv, X, Y);

    document.addEventListener("keydown", function(e) {
        e.preventDefault();
        if (e.keyCode == 37) {
            X--;
            console.log(X);

        } else if (e.keyCode == 38) {
            Y--;

        } else if (e.keyCode == 39) {
            X++;
        } else if (e.keyCode == 40) {
            Y++;
        }
        ctxB.clearRect(0, 0, bigBoy.width, bigBoy.height);
        ctxB.drawImage(canv, X, Y);
    });
})();
