(function () {

    //Do not touch
    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll('script[type="text/x-handlebars-template"]');

    Array.prototype.slice.call(templates).forEach(function(script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });
    //Do not touch
    var baseUrl;
    var endPoint;
    var username;
    var password;
    var nameRepo;
    $("button").on("click", function(e) {
        e.preventDefault();
        username = $('input[name="username"]').val();
        password = $('input[name="password"]').val();
        var usernameToSearch = $('input[name="username-to-search"]').val();
        $("#resultsFor").css({display: "block"});
        $("#resultsFor").html("<h3>Results for: " + usernameToSearch + "</h3>");
        console.log("s" , usernameToSearch);

        baseUrl = "https://api.github.com";
        endPoint = "/users/" + usernameToSearch + "/repos";

        console.log("full github Url:", baseUrl + endPoint);

        $.ajax({
            url: baseUrl + endPoint,
            headers: {
                Authorization: 'Basic ' + btoa(username + ':' + password)
            },
            success: function(data) {
                console.log(data);
                var reposDiv = $(".repos");
                reposDiv.html(Handlebars.templates.listOfRepos({
                    reposResults: data
                }));
                $(".nameOneRepo").on("click", function(e) {
                    e.preventDefault();
                    nameRepo = $(e.target).text();
                    console.log("Name and Repo", nameRepo);

                    baseUrl = "https://api.github.com";
                    endPoint =  "/repos/" + nameRepo + "/commits";

                    console.log("full github Url:", baseUrl + endPoint);

                    $.ajax({
                        url: baseUrl + endPoint,
                        headers: {
                            Authorization: 'Basic ' + btoa(username + ':' + password)
                        },
                        success: function(data) {
                            console.log(data);
                            var commitDiv = $(e.target);
                            commitDiv.append(Handlebars.templates.listOfCommits({
                                commitsResults: data.slice(0, 10)
                            }));
                        }
                    });
                });
            }
        });

    });




})();
