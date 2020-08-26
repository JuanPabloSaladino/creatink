const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

let myMap = L.map('myMap').setView([51.505, -0.09], 13);
let coordenadas = document.getElementById('coordenadas');

L.tileLayer(tilesProvider, {
    maxZoom: 18
}).addTo(myMap);

let marker = L.marker([51.505, -0.09]).addTo(myMap);

let iconMarker = L.icon({
    iconUrl: 'red-cross.png',

});

let marker2 = L.marker([51.51, -0.09], { icon: iconMarker }).addTo(myMap);

myMap.doubleClickZoom.disable();

myMap.on('dblclick', e => {
    let latLng = myMap.mouseEventToLatLng(e.originalEvent);
    L.marker([latLng.lat, latLng.lng], { icon: iconMarker }).addTo(myMap);
});

navigator.geolocation.getCurrentPosition(
    (pos) => {
        const { coords } = pos;
        console.log(coords);
        L.marker([coords.latitude, coords.longitude]).addTo(myMap);
        coordenadas.innerHTML = [coords.latitude, coords.longitude];
    },
    (err) => {
        console.log(err);
    },
    {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }
);