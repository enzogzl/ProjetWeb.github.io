// map.js
function initMap() {
    var location = {lat: 43.499, lng: 6.940};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
