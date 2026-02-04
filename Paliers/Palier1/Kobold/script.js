
import * as general from '/SAOMAP/scriptGeneral/scriptGeneral.js';

var map = L.map('carte', {
  crs: L.CRS.Simple,
  minZoom: -3,
  maxZoom: 10,
  zoomSnap: 0.1,
  zoomControl: false,
  attributionControl: false
});

let mapWidth, mapHeight, bounds, mapOverlay,initialbounds;

const defaultImg = new Image();
defaultImg.onload = () => {
  mapWidth = defaultImg.width;
  mapHeight = defaultImg.height;
  bounds = [[0, 0], [mapHeight, mapWidth]];
  initialbounds=bounds;
  mapOverlay = L.imageOverlay("kobold.png", bounds).addTo(map);
  map.fitBounds(bounds);
};
defaultImg.src = "kobold.png"; 

document.getElementById('ResetView').addEventListener('click',()=>{
  map.fitBounds(initialbounds)
})

// //Methode Général(changer la map):--------------------------------------------------------------------------------------------------------------------------------------------------------------------
//     var map=map
//     const w=450;
//     const h=450;

//     // Ajouter une grille
//         const step = 3; // taille des cellules en pixels
//         const gridLayer = L.layerGroup();
//         var cheminEntier=[]
//         // Lignes horizontales
//         for(let y = 0; y <= h; y += step){
//           gridLayer.addLayer(L.polyline([[y,0],[y,w]], {color:'black', weight:1, opacity:0.5}));
//         }

//         // Lignes verticales
//         for(let x = 0; x <= w; x += step){
//           gridLayer.addLayer(L.polyline([[0,x],[h,x]], {color:'black', weight:1, opacity:0.5}));
//         }

//         gridLayer.addTo(map);

//         map.on('click', function(e) {
//       const lat = e.latlng.lat;
//       const lng = e.latlng.lng;

//       // Calculer l'origine de la cellule
//       const cellX = Math.floor(lng / step) * step;
//       const cellY = Math.floor(lat / step) * step;

//       // Coordonnées du centre de la cellule
//       const centerX = cellX + step / 2;
//       const centerY = cellY + step / 2;
//       cheminEntier.push([centerY, centerX])
//       // console.log('Centre de la case :', [centerY, centerX]);
//       console.log('Chemin entier: ',JSON.stringify(cheminEntier))
//       console.log([centerY, centerX])
//     });