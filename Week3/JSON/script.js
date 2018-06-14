(function () {

    var button = $("button");
    var text;

    button.on("click", function() {
        text = $("#input").val();

        jsonValid(text);
    });

    function jsonValid(str) {
        try {
            JSON.parse(str);
            console.log(true);
            alert("valid JSON");
        } catch (e) {
            alert("invalid JSON");
            console.log(false);
        }
    }

})();
