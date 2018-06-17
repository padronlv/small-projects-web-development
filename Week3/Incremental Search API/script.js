(function () {
    var xhr;
    // Input event (text field)
    // loop throw list of countries and add each country that starts with the current value of the text field to an array.
    var inp = $("input");
    var results = $("#results");
    inp.on("input.inputEvent", function() {
        var val = inp.val();

        // Edge case: if value of the text field is an empty string, do not make a list of matches and hide/empty any results you are currently showing
        if (val.length == 0) {
            return;
        }
        console.log(val);
        if (xhr) {
            xhr.abort();
        }
        xhr = $.ajax({
            url: 'https://flame-egg.glitch.me/',
            data: {
                q: val
            },
            success: function(data) {
                console.log(data);
                // do something with the data here
                var resultsHtml = "";

                if (data.length == 0) {
                    resultsHtml += "<div class='result'>No result</div>";

                } else {
                    for (var j = 0; j < data.length; j++) {
                        resultsHtml += "<div class='result'>" + data[j] + "</div>";
                    }
                }
                results.html(resultsHtml);

                // 2 mouseover/mouseenter ()
                // -remove hightlight class from the element that has is (if any)
                // add hightlight class to the target of the event

                results.on("mouseenter", ".result", function (e) {
                    $(".result").removeClass("highlight");
                    console.log("mouseenter");
                    $(e.target).addClass("highlight");
                });

                // results.on("mouseleave", ".result", function (e) {
                //     console.log("mouseleave");
                //     $(e.target).removeClass("highlight");
                // });

                // 3 mousedown (individual result)
                //  set the value of the text field to be the text of the target of event
                // hide/empty results
                results.on("mousedown", ".result", function (e) {
                    e.stopPropagation();
                    console.log("mousedown");
                    inp.val($(e.target).text());
                    results.empty();

                });

                // 4. keydown (text field)
                //    * if the key is the down arrow
                //      * if no result has highlight class, add highlight class to the first result
                //      * if any result except the last result has the highlight class, remove the highlight class from the one that has it and add it to the next one
                //      * if the last result has the highlight class, do nothing
                //    * if the key is the up arrow
                //    * - if no result has highlight class, add highlight class to the last result
                //      - if any result except the first result has the highlight class, remove the highlight class from the one that has it and add it to the previous one
                //      - if the first result has the highlight class, do nothing
                //    * if the key is enter/return
                //      * set the value of the text field to be the text of the result that currently has the highlight class
                //      * hide/empty results

                inp.on("keydown", function (e) {
                    var highIndex;
                    if (e.keyCode == 40) {
                        console.log("keydown down");
                        if (results.find( ".highlight" ).length) {
                            if ($(".highlight").index() == $(".result").length - 1) {
                                console.log("last item");
                                return;

                            } else {
                                console.log("there is already a highlight");
                                highIndex= $(".highlight").index();
                                console.log(highIndex);
                                $(".result").removeClass("highlight");
                                $(".result").eq(highIndex + 1).addClass("highlight");
                            }
                        } else {
                            results.children(":first").addClass("highlight");
                        }
                    } else if (e.keyCode == 38) {
                        console.log("keydown up");
                        if (results.find( ".highlight" ).length) {
                            if ($(".highlight").index() == 0) {
                                console.log("first item");
                                return;
                            } else {
                                console.log("there is already a highlight");
                                highIndex= $(".highlight").index();
                                console.log(highIndex);
                                $(".result").removeClass("highlight");
                                $(".result").eq(highIndex - 1).addClass("highlight");
                            }
                        } else {
                            results.children(":last").addClass("highlight");
                        }
                    } else if (e.keyCode == 13) {
                        console.log("keydown enter");
                        if (results.find( ".highlight" ).length) {
                            inp.val(results.find( ".highlight" ).text());
                            results.empty();
                        } else {
                            return;
                        }
                    }

                });

                // 5. blur (text field)
                //    * empty/hide the results
                inp.blur(function(){
                    console.log("This input field has lost its focus.");
                    results.empty();

                });

                // 6. focus (text field)
                //    * show results that match the text currently in the text field
                inp.focus(function(){
                    console.log("This input field has find its focus");
                    inp.trigger("input.inputEvent");
                });
            }
        });
    });


})();
