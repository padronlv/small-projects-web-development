(function () {

    var button = $("button");
    var text;

    try {
        text.val(localStorage.getItem('previousText'));
    } catch (e) {};

    button.on("click", function() {
        text = $("#input").val();

        jsonValid(text);
    });

    function jsonValid(str) {
        try {
            localStorage.setItem('previousText', str);
        } catch (e) {
            return;
        }
    }

})();
