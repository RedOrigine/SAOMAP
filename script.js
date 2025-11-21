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
var iconForgeron = L.icon({ iconUrl: 'icon/Forgeron.png', iconSize: [32, 32], iconAnchor: [16,32], popupAnchor: [0, -32] });
var iconAlchimiste = L.icon({ iconUrl: 'icon/Alchimiste.png', iconSize: [32, 32], iconAnchor: [16,32], popupAnchor: [0, -32] });
var iconQuete = L.icon({ iconUrl: 'icon/Quete.png', iconSize: [32, 32], iconAnchor: [16,32], popupAnchor: [0, -32] });
var iconSecret = L.icon({ iconUrl: 'icon/Secret.png', iconSize: [32, 32], iconAnchor: [16,32], popupAnchor: [0, -32] });
var iconMob = L.icon({ iconUrl: 'icon/Mob.png', iconSize: [32, 32], iconAnchor: [16,32], popupAnchor: [0, -32] });
var iconLieu = L.icon({ iconUrl: 'icon/Lieu.png', iconSize: [32, 32], iconAnchor: [16,32], popupAnchor: [0, -32] });
var iconMarchand = L.icon({ iconUrl: 'icon/Marchand.png', iconSize: [32, 32], iconAnchor: [16,32], popupAnchor: [0, -32] });
var iconDonjon = L.icon({ iconUrl: 'icon/Donjon.png', iconSize: [32, 32], iconAnchor: [16,32], popupAnchor: [0, -32] });
var iconBoss = L.icon({ iconUrl: 'icon/Boss.png', iconSize: [32, 32], iconAnchor: [16,32], popupAnchor: [0, -32] });
var iconRessources = L.icon({ iconUrl: 'icon/Ressources.png', iconSize: [32, 32], iconAnchor: [16,32], popupAnchor: [0, -32] });

var markerValue={'Forgeron':1,'Alchimiste':1,'Quete':1,'Secret':1,'Mob':1,'Lieu':1,'Marchand':1,'Donjon':1,'Boss':1,'Ressources':1};
var markerLayer={'Forgeron':markerForgeronLayer,'Alchimiste':markerAlchimisteLayer,'Quete':markerQueteLayer,'Secret':markerSecretLayer,'Mob':markerMobLayer,'Lieu':markerLieuLayer,'Marchand':markerMarchandLayer,'Donjon':markerDonjonLayer,'Boss':markerBossLayer,'Ressources':markerRessourcesLayer};
var markerIcon={'Forgeron':iconForgeron,'Alchimiste':iconAlchimiste,'Quete':iconQuete,'Secret':iconSecret,'Mob':iconMob,'Lieu':iconLieu,'Marchand':iconMarchand,'Donjon':iconDonjon,'Boss':iconBoss,'Ressources':iconRessources};


document.getElementById('ResetView').addEventListener('click',()=>{
  map.fitBounds(initialbounds)
})

map.on('click',function(e){
  console.log([e.latlng.lat,e.latlng.lng])
})

document.addEventListener('DOMContentLoaded', () => {
    loadMarker()
});


function toggleMarker(button){
  id=button.id
  if (markerValue[id]){
    markerValue[id]=0
    map.removeLayer(markerLayer[id]);
  }else{
    markerValue[id]=1
    map.addLayer(markerLayer[id]);
  }
}

function loadMarker(){
  var files=['Forgeron.json','Alchimiste.json','Quete.json','Secret.json','Mob.json','Lieu.json','Marchand.json','Donjon.json','Boss.json','Ressources.json']
  files.forEach(chemin =>{
    fetch('marker/'+chemin)
    .then(response=> response.json())
    .then(data=>{
      data.forEach(element => {
                var marker = L.marker(element.coord,{
                  title:element.name,
                  icon: markerIcon[chemin.split('.').slice(0,-1)]}).addTo(markerLayer[chemin.split('.').slice(0,-1)]);
                marker.bindTooltip(element.name,{
                  permanent:false,
                  direction:"top",
                  offset:[0,-10]
                })
                marker.categorie=element.categorie
                marker.data=element
                marker.on('click',function(e){
                  affichageDescription(e.target.data)
                })
            });
            

    })
  }) 
}

function affichageDescription(data){
  let div=document.getElementById('info');
  div.innerHTML=""
  if(data.name){
    let h1=document.createElement('h1')
    h1.textContent=data.name
    div.appendChild(h1)
  }
  if(data.description){
    let p=document.createElement('p')
    p.textContent=data.description
    div.appendChild(p)
  }
  if(data.coordGame){
    let p=document.createElement('p')
    p.textContent="X= "+data.coordGame[0]+" / Y= "+data.coordGame[1]+" / Z= "+data.coordGame[2]
    div.appendChild(p)
  }
}

const boutons = document.querySelectorAll('.btn-categorie');

boutons.forEach(bouton => {
  bouton.addEventListener('click', () => {
    bouton.classList.toggle('active');
  });
});
