console.log("");

$(document).ready(function() {

  $.get('https://galvanize-cors-proxy.herokuapp.com/http://api.brewerydb.com/v2/breweries/?key=2cc4dab6b173f42ef6bcb4822067e001', function(data) {
    var mapData = data.data
    console.log(mapData)
    $.each(mapData, function (i, map) {
      console.log(mapData[0].name)
      for (var i = 0; i < mapData.length; i++) {
      $('#mapinfo').append("<option>" + mapData[i].website + "</option>");
      }

    })
