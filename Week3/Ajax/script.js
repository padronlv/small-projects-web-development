(function () {
    // $("#search").on("click", function() {
    //
    //     var input = $("#pokesearch").val();
    //     console.log(input);
    //
    //     $.ajax ({
    //         url: "https://api.funtranslations.com/translate/yoda.json",
    //         data: {input},
    //         success: function(resp) {
    //             console.log(resp);
    //         }
    //     });
    // });

    $.ajax({
        url:"/data.json",
        success: function(resp) {
            console.log(resp);
        }

    });













})();
