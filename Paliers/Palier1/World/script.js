
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
  mapOverlay = L.imageOverlay("SAOPalier1.png", bounds).addTo(map);
  map.fitBounds(bounds);
};
defaultImg.src = "SAOPalier1.png"; 


let markerForgeronLayer=L.layerGroup().addTo(map);
let markerAlchimisteLayer=L.layerGroup().addTo(map);
let markerQueteLayer=L.layerGroup().addTo(map);
let markerSecretLayer=L.layerGroup().addTo(map);
let markerMobLayer=L.layerGroup().addTo(map);
let markerLieuLayer=L.layerGroup().addTo(map);
let markerMarchandLayer=L.layerGroup().addTo(map);
let markerDonjonLayer=L.layerGroup().addTo(map);
let markerBossLayer=L.layerGroup().addTo(map);
let markerRessourcesLayer=L.layerGroup().addTo(map);

var valueLayerMarker={'Forgeron':1,'Alchimiste':1,'Quete':1,'Secret':1,'Mob':1,'Lieu':1,'Marchand':1,'Donjon':1,'Boss':1,'Ressources':1};
var markerLayer={'Forgeron':markerForgeronLayer,'Alchimiste':markerAlchimisteLayer,'Quete':markerQueteLayer,'Secret':markerSecretLayer,'Mob':markerMobLayer,'Lieu':markerLieuLayer,'Marchand':markerMarchandLayer,'Donjon':markerDonjonLayer,'Boss':markerBossLayer,'Ressources':markerRessourcesLayer};


document.getElementById('ResetView').addEventListener('click',()=>{
  map.fitBounds(initialbounds)
})

var files=['Forgeron.json','Alchimiste.json','Quete.json','Secret.json','Mob.json','Lieu.json','Marchand.json','Donjon.json','Boss.json','Ressources.json']
general.loadMarkerWithDesc(files,markerLayer,()=>{
  console.log('layer chargé')
})



window.toggleLayerMarker = function(button){
  general.toggleLayerMarker(button,valueLayerMarker,markerLayer,map)
}


//Methode Général(changer la map):--------------------------------------------------------------------------------------------------------------------------------------------------------------------
    var map=map
    const w=450;
    const h=450;

    // Ajouter une grille
        const step = 3; // taille des cellules en pixels
        const gridLayer = L.layerGroup();
        var cheminEntier=[]
        // Lignes horizontales
        for(let y = 0; y <= h; y += step){
          gridLayer.addLayer(L.polyline([[y,0],[y,w]], {color:'black', weight:1, opacity:0.5}));
        }

        // Lignes verticales
        for(let x = 0; x <= w; x += step){
          gridLayer.addLayer(L.polyline([[0,x],[h,x]], {color:'black', weight:1, opacity:0.5}));
        }

        gridLayer.addTo(map);

        map.on('click', function(e) {
      const lat = e.latlng.lat;
      const lng = e.latlng.lng;

      // Calculer l'origine de la cellule
      const cellX = Math.floor(lng / step) * step;
      const cellY = Math.floor(lat / step) * step;

      // Coordonnées du centre de la cellule
      const centerX = cellX + step / 2;
      const centerY = cellY + step / 2;
      cheminEntier.push([centerY, centerX])
      // console.log('Centre de la case :', [centerY, centerX]);
      console.log('Chemin entier: ',JSON.stringify(cheminEntier))
      console.log([centerY, centerX])
    });