$(document).ready(function() {

  $(".summon-cats").click(function() {
    $.ajax({
      url: "http://bitkittens.herokuapp.com/cats.json",
      method: "GET",
      data: {},
      dataType: 'json'
    }).done(function(responseData) {
                                                      //You must add document in front when creating an Element//
      for (i = 0; i < responseData["cats"].length; i++) {
        var image = document.createElement("IMG");
        $(image).attr("src", responseData["cats"][i]["photo"]);
        $("#cat" + (i + 1)).append(image);
      }
    }).fail(function(responseData) {
      console.log("Failed!");
    });

  });
});
