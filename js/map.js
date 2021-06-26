 function myMap() {
        var mapProp= {
          center:new google.maps.LatLng(-34.5576499758642, -58.46203327585128),
          zoom:19,
        };
        var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
        const vete = { lat: -34.5576499758642, lng: -58.46203327585128 };
        const marker = new google.maps.Marker({
            position: vete,
            map: map,
          });
        }