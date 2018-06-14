(function() {
    var input;
    var number;
    var german = ["eins", "zwei", "drei", "vier", "funf", "sechs", "sieben", "acht", "neun", "zehn"];

    function translateNumberToGerman() {
        var final = askForNumber();
        $("#result").html(german[final - 1]);
    }


    function askForNumber() {
        input = prompt("Number between 1 and 10");
        number = Number(input);
        console.log(number);
        if (isNaN(number)) {
            alert("not a number!");
            askForNumber();
        } else if (typeof number == "number") {
            if (number <= 10 && number > 0) {
                return number;
            } else {
                alert("Number between 1 and 10");
                throw new Error("not a valid number");
                // askForNumber();
            }
        }
    }
    translateNumberToGerman();
})();
