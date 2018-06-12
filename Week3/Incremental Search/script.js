(function () {
    var countries = [ "Afghanistan", "Albania", "Algeria", "American Samoa", "Angola", "Anguilla", "Antigua", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bonaire (Netherlands Antilles)", "Bosnia Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Congo, The Democratic Republic of", "Cook Islands", "Costa Rica", "Croatia", "Curacao (Netherlands Antilles)", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iraq", "Ireland (Republic of)", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kosrae Island", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Lithuania", "Luxembourg", "Macau", "Macedonia (FYROM)", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Moldova", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Ponape", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Rota", "Russia", "Rwanda", "Saba (Netherlands Antilles)", "Saipan", "Samoa", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "South Africa", "South Korea", "Spain", "Sri Lanka", "St. Barthelemy", "St. Croix", "St. Eustatius (Netherlands Antilles)", "St. John", "St. Kitts and Nevis", "St. Lucia", "St. Maarten (Netherlands Antilles)", "St. Thomas", "St. Vincent and the Grenadines", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Tinian", "Togo", "Tonga", "Tortola", "Trinidad and Tobago", "Truk", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos", "Tuvalu", "US Virgin Islands", "Uganda", "Ukraine", "Union Island", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Gorda", "Wallis and Futuna", "Yap", "Yemen", "Zambia", "Zimbabwe" ] ;

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
        var matches = [];
        console.log(val);
        for(var i = 0; i < countries.length; i++) {
            if (countries[i].toLowerCase().startsWith(val.toLowerCase())) {
                matches.push(countries[i]);
                console.log(matches);
                // if the list of matches has more than four items in it, reduce it to four
                if (matches.length == 4) {
                    break;
                }

                // if the list of matches is empty, set the html of your results container to contain a "no results" message
                // if the list of matches is not empty, loop though the matches, create html for each result
            }
        }

        var resultsHtml = "";

        if (matches.length == 0) {
            resultsHtml += "<div class='result'>No result</div>";

        } else {
            for (var j = 0; j < matches.length; j++) {
                resultsHtml += "<div class='result'>" + matches[j] + "</div>";
            }
        }
        results.html(resultsHtml);
    });


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
})();
