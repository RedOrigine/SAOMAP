var map = L.map('carte', {
  crs: L.CRS.Simple,
  minZoom: -3,
  maxZoom: 2.5,
  zoomSnap: 0.1
});

let mapWidth, mapHeight, bounds, mapOverlay;

const defaultImg = new Image();
defaultImg.onload = () => {
  mapWidth = defaultImg.width;
  mapHeight = defaultImg.height;
  bounds = [[0, 0], [mapHeight, mapWidth]];
  initialbounds=bounds;
  mapOverlay = L.imageOverlay("SAOPalier1-2.png", bounds).addTo(map);
  map.fitBounds(bounds);
};
defaultImg.src = "SAOPalier1-2.png"; 


document.getElementById('ResetView').addEventListener('click',()=>{
  map.fitBounds(initialbounds)
})

map.on('click',function(e){
  console.log([e.latlng.lat,e.latlng.lng])
})

let markerForgeronData=[]
let markerForgeron=[]


// document.addEventListener('DOMContentLoaded', () => {

//     fetch('marker/forgeron.json')
//         .then(response => response.json())
//         .then(data => { 
//             markerForgeronData = data;

//             markerForgeronData.forEach(element => {
//                 const marker = L.marker(element.coord).addTo(map);
//                 markerForgeron.push(marker);
//             });
//         })
//         .catch(error => console.error("Erreur lors du chargement du JSON :", error));

// });
async function loadMarkers() {
  try {
    const response = await fetch("marker/forgeron.json");
    if (!response.ok) return;
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.warn("Pas de marqueurs.json trouvé");
  }
}

loadMarkers();


 
