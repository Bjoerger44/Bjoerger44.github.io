console.log("");

$(document).ready(function() {

  $.get('https://galvanize-cors-proxy.herokuapp.com/http://api.brewerydb.com/v2/breweries/?key=2cc4dab6b173f42ef6bcb4822067e001', function(data) {
    var breweryData = data.data
    console.log(breweryData)
    $.each(breweryData, function (i, map) {
      // console.log(breweryData[0].name)
      for (var i = 0; i < breweryData.length; i++) {
      $('#brewinfo').append("<option>" + breweryData[i].name + "</option>");
      }
    })
    $('#brewinfo').change(function() {
      var formName = $('#brewinfo').val()
      var dataName
      // console.log("here")
      // console.log(beerData[0])
      // console.log($('#beerName').val())
      for (var i = 0; i < breweryData.length; i++) {
        dataName = breweryData[i].name;
    if (formName === dataName) {
        // $(".formOut").text("<p>" +breweryData[i].description+ "</p>")
        // "<img src="+breweryData[i].images.icon+" alt="" />"
        var $brewImage = $('#brewImage');
         $brewImage.html('<img src='+breweryData[i].images.large+' alt="not found"/>')
         var $brewDescription = $('#brewDescription');
         $brewDescription.html('<p>'+breweryData[i].description+'</p>')
        var $brewWebsite = $('#brewWebsite');
         $brewWebsite.html('<a href='+breweryData[i].website+' target="_blank">Click Here for Website</a>')
        }
      }
    })
    })
  })
