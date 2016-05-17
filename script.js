console.log("");

$(document).ready(function() {

  $.get('https://galvanize-cors-proxy.herokuapp.com/http://api.brewerydb.com/v2/styles/?key=2cc4dab6b173f42ef6bcb4822067e001', function(data) {
    var beerData = data.data
    // console.log(beerData)
    $.each(beerData, function (i, beer) {
      // console.log(beerData[0].name)
      for (var i = 0; i < beerData.length; i++) {
      $('#beerName').append("<option>" + beerData[i].name+ "</option>");
      }

    })

      // var listName = beerData[i].name;
      // for (var i = 0; i < beerData.length; i++) {
      //   if (beerData[i]["category"]["name"] = var listName){
      //     var beerDes = beerData[i]["description"]
      //     console.log(beerDes)
      //   }
      // }
  $('#beerName').change(function() {
    var formName = $('#beerName').val()
    var dataName
    console.log("here")
    console.log(beerData[0])
    console.log($('#beerName').val())
    for (var i = 0; i < beerData.length; i++) {
      dataName = beerData[i].name;
  if (formName === dataName) {
      $(".formOut").text("<p>" +beerData[i]["description"]+ "</p>")
      }
    }
  })
  })
})
