$("#searchBtn").on("click", function() {
    var searchTerm = $("#searchInput").val();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=R8TA8D3kENqA5RTAzdrfRnkQMYqHVBZY";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {

        console.log(response)
        
        var results = response.docs;

        for(var i = 0; i < 5; i++){

        var rDiv = $("<div>");
        var hLine = response.response.docs[i].headline.main;

        var p = $("<p>").text(hLine);

        rDiv.prepend(p);

        $("#result").prepend(rDiv);

        }


        // for (var i = 0; i < results.length; i++) {
        //   var gifDiv = $("<div>");

        //   var rating = results[i].rating;

        //   var p = $("<p>").text("Rating: " + rating);

        //   var personImage = $("<img>");
        //   personImage.attr("src", results[i].images.fixed_height.url);

        //   gifDiv.prepend(p);
        //   gifDiv.prepend(personImage);

        //   $("#gifs-appear-here").prepend(gifDiv);
        // }
      });
  });