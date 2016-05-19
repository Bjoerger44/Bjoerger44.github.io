var map;

console.log("");

function initMap() {
    var mapDiv = document.getElementById('map');
    map = new google.maps.Map(mapDiv, {
        center: {
            lat: 39.3168103,
            lng: -94.9107882
        },
        zoom: 2
    });

    $(document).ready(function() {

        $.get('https://galvanize-cors-proxy.herokuapp.com/http://api.brewerydb.com/v2/locations/?key=2cc4dab6b173f42ef6bcb4822067e001', function(data) {
            var mapData = data.data
            console.log(mapData)
            $.each(mapData, function(i, value) {
                for (var i = 0; i < mapData.length; i++) {
                    console.log(mapData[i].longitude)
                    var lng = mapData[i].longitude
                    var lat = mapData[i].latitude
                    var name = mapData[i].name
                    var address = mapData[i].streetAddress
                    var website = mapData[i].brewery.website
                    addMarker(lat, lng, name, address, website)
                }
            })
        })

        function addMarker(lat, lng, name, address, website) {
            var marker = new google.maps.Marker({
                map: map,
                position: {
                    lat,
                    lng
                }
            })
            var infowindow = new google.maps.InfoWindow({
                content: ''
            });
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.setContent('<strong>' + name + '</strong><br>' + address + '<br>' + '<a href='+website+'>'+website+'</a>');
                infowindow.open(map, this);
            });
        }
    })
}
