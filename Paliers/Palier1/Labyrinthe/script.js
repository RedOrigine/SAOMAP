import * as general from '/SAOMAP/scriptGeneral.js';

// #region Etage 1:--------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //Map:--------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    var mapEtage1 = L.map("carte1", {
      crs: L.CRS.Simple,
      minZoom: -3,
      maxZoom: 10,
      zoomSnap: 0.1,
      zoomControl: false,
      attributionControl: false
    });

    let mapEtage1Width, mapEtage1Height, bounds, mapEtage1Overlay,initialbounds;

    const defaultImg = new Image();
    defaultImg.onload = () => {
      
      mapEtage1Width = defaultImg.width;
      mapEtage1Height = defaultImg.height;
      bounds = [[0, 0], [mapEtage1Height, mapEtage1Width]];
      initialbounds=bounds;
      mapEtage1Overlay = L.imageOverlay("image/laby-1.png", bounds).addTo(mapEtage1);
      mapEtage1.fitBounds(bounds);
      cartes['carte1']=[mapEtage1,valueLayerChemin,cheminLayer,valueLayerMarker,markerLayer,initialbounds]
    };
    defaultImg.src = "image/laby-1.png"; 

  //Layer:--------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    //Chemin:--------------------------------------------------------------------------------------------------------------------------------------------------------------------

      let cheminClassiqueLayer=L.layerGroup().addTo(mapEtage1);
      let cheminOptionnelLayer=L.layerGroup().addTo(mapEtage1);
      let cheminForgeronLayer=L.layerGroup().addTo(mapEtage1);
      
      mapEtage1.removeLayer(cheminForgeronLayer);
      mapEtage1.removeLayer(cheminOptionnelLayer);
      
    //Marker:--------------------------------------------------------------------------------------------------------------------------------------------------------------------
    let markerForgeronLayer=L.layerGroup().addTo(mapEtage1)
    let markerSalleLayer=L.layerGroup().addTo(mapEtage1)
    let markerPointCleLayer=L.layerGroup().addTo(mapEtage1)

  //Chemin:--------------------------------------------------------------------------------------------------------------------------------------------------------------------

    var pointCheminClassique = [ [26, 32], [26, 316], [53,316], [53,230], [110,230], [110,176], [83,176], [83,60], [55,60], [55,29], [313,29], [313,280], [324,280] ];
    var pointCheminClassiqueQuete=[ [53,316], [113,316], [113,325] ]
    var pointCheminSalle1=[[25.5, 103.5],[19.5, 103.5]]
    var pointCheminSalle2=[[25.5, 280.5],[19.5, 280.5]]
    var pointCheminSalle3=[ [110,176], [137,176], [137,203], [168,203], [168,233], [222,233], [222,228]]
    var pointCheminSalle4=[ [170,28],[169,59],[142,59],[142,115],[134,115]]
    var pointCheminSalle5=[ [260,28],[260,59],[197,60],[197,84],[202,84]]
    var pointCheminSalle6=[[313.5, 151.5], [307.5, 151.5]]
    var pointCheminForgeron1=[[260,28],[260,59],[197,60],[197,84],[202,84],[197,84],[197,116],[170,116],[170,170],[197,170],[197,189],[204,189]]
    var pointCheminForgeron1PourOptionnel=[[197,84.1],[197,116],[170,116],[170,170],[197,170],[197,189],[204,189]]
    var pointCheminForgeron2=[[313.5, 88.5],[322.5, 88.5]]

      //Dessin des chemin(polyline):--------------------------------------------------------------------------------------------------------------------------------------------------------------------
        
        var polyline = L.polyline(pointCheminClassique, {color: 'blue'}).addTo(cheminClassiqueLayer);
        var polyline = L.polyline(pointCheminClassique, {color: 'blue'}).addTo(cheminForgeronLayer);
        var polyline = L.polyline(pointCheminClassique, {color: 'blue'}).addTo(cheminOptionnelLayer);
        var polyline = L.polyline(pointCheminClassiqueQuete, {color: 'green'}).addTo(cheminClassiqueLayer);
        var polyline = L.polyline(pointCheminClassiqueQuete, {color: 'green'}).addTo(cheminForgeronLayer);
        var polyline = L.polyline(pointCheminClassiqueQuete, {color: 'green'}).addTo(cheminOptionnelLayer);
        var polyline = L.polyline(pointCheminSalle1, {color: 'red'}).addTo(cheminClassiqueLayer);
        var polyline = L.polyline(pointCheminSalle1, {color: 'red'}).addTo(cheminOptionnelLayer);
        var polyline = L.polyline(pointCheminSalle1, {color: 'red'}).addTo(cheminForgeronLayer);
        var polyline = L.polyline(pointCheminSalle2, {color: 'red'}).addTo(cheminClassiqueLayer);
        var polyline = L.polyline(pointCheminSalle2, {color: 'red'}).addTo(cheminOptionnelLayer);
        var polyline = L.polyline(pointCheminSalle2, {color: 'red'}).addTo(cheminForgeronLayer);
        var polyline = L.polyline(pointCheminSalle3, {color: 'red'}).addTo(cheminOptionnelLayer);
        var polyline = L.polyline(pointCheminSalle4, {color: 'red'}).addTo(cheminOptionnelLayer);
        var polyline = L.polyline(pointCheminSalle5, {color: 'red'}).addTo(cheminOptionnelLayer);
        var polyline = L.polyline(pointCheminSalle6, {color: 'red'}).addTo(cheminClassiqueLayer);
        var polyline = L.polyline(pointCheminSalle6, {color: 'red'}).addTo(cheminOptionnelLayer);
        var polyline = L.polyline(pointCheminSalle6, {color: 'red'}).addTo(cheminForgeronLayer);
        var polyline = L.polyline(pointCheminForgeron1, {color: 'yellow'}).addTo(cheminForgeronLayer);
        var polyline = L.polyline(pointCheminForgeron1PourOptionnel, {color: 'yellow'}).addTo(cheminOptionnelLayer);
        var polyline = L.polyline(pointCheminForgeron2, {color: 'yellow'}).addTo(cheminClassiqueLayer);
        var polyline = L.polyline(pointCheminForgeron2, {color: 'yellow'}).addTo(cheminOptionnelLayer);
        var polyline = L.polyline(pointCheminForgeron2, {color: 'yellow'}).addTo(cheminForgeronLayer);
  
    //Arrays Chemin/Marker:--------------------------------------------------------------------------------------------------------------------------------------------------------------------
    

      var valueLayerChemin={'CheminClassique':1,'CheminForgeron':0,'CheminOptionnel':0}
      var cheminLayer={'CheminClassique':cheminClassiqueLayer,'CheminForgeron':cheminForgeronLayer,'CheminOptionnel':cheminOptionnelLayer}
      var valueLayerMarker={"Forgeron":1,"PointCle":1,"Salle":1}
      var markerLayer={"Forgeron":markerForgeronLayer,"PointCle":markerPointCleLayer,"Salle":markerSalleLayer}


      
    
//#endregion
// #region Etage 2:--------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //Map:--------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    var mapEtage2 = L.map("carte2", {
      crs: L.CRS.Simple,
      minZoom: -3,
      maxZoom: 10,
      zoomSnap: 0.1,
      zoomControl: false,
      attributionControl: false
    });

    let mapEtage2Width, mapEtage2Height, bounds2, mapEtage2Overlay,initialbounds2;

    const defaultImg2 = new Image();
    defaultImg2.onload = () => {
      
      mapEtage2Width = defaultImg2.width;
      mapEtage2Height = defaultImg2.height;
      bounds2 = [[0, 0], [mapEtage2Height, mapEtage2Width]];
      initialbounds2=bounds2;
      mapEtage2Overlay = L.imageOverlay("image/laby-2.png", bounds2).addTo(mapEtage2);
      mapEtage2.fitBounds(bounds2);
      cartes['carte2']=[mapEtage2,valueLayerChemin2,cheminLayer2,valueLayerMarker2,markerLayer2,initialbounds2]
    };
    defaultImg2.src = "image/laby-2.png"; 

  //Layer:--------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    //Chemin:--------------------------------------------------------------------------------------------------------------------------------------------------------------------

      let cheminClassiqueLayer2=L.layerGroup().addTo(mapEtage2);
      let cheminOptionnelLayer2=L.layerGroup().addTo(mapEtage2);
      let cheminForgeronLayer2=L.layerGroup().addTo(mapEtage2);
      
      mapEtage2.removeLayer(cheminForgeronLayer2);
      mapEtage2.removeLayer(cheminOptionnelLayer2);
      
    //Marker:--------------------------------------------------------------------------------------------------------------------------------------------------------------------
    let markerForgeronLayer2=L.layerGroup().addTo(mapEtage2)
    let markerSalleLayer2=L.layerGroup().addTo(mapEtage2)
    let markerPointCleLayer2=L.layerGroup().addTo(mapEtage2)

  //Chemin:--------------------------------------------------------------------------------------------------------------------------------------------------------------------

    var pointCheminClassique = [ [26, 32], [26, 316], [53,316], [53,230], [110,230], [110,176], [83,176], [83,60], [55,60], [55,29], [313,29], [313,280], [324,280] ];
    var pointCheminClassiqueQuete=[ [53,316], [113,316], [113,325] ]
    var pointCheminSalle1=[[25.5, 103.5],[19.5, 103.5]]
    var pointCheminSalle2=[[25.5, 280.5],[19.5, 280.5]]
    var pointCheminSalle3=[ [110,176], [137,176], [137,203], [168,203], [168,233], [222,233], [222,228]]
    var pointCheminSalle4=[ [170,28],[169,59],[142,59],[142,115],[134,115]]
    var pointCheminSalle5=[ [260,28],[260,59],[197,60],[197,84],[202,84]]
    var pointCheminSalle6=[[313.5, 151.5], [307.5, 151.5]]
    var pointCheminForgeron1=[[260,28],[260,59],[197,60],[197,84],[202,84],[197,84],[197,116],[170,116],[170,170],[197,170],[197,189],[204,189]]
    var pointCheminForgeron1PourOptionnel=[[197,84.1],[197,116],[170,116],[170,170],[197,170],[197,189],[204,189]]
    var pointCheminForgeron2=[[313.5, 88.5],[322.5, 88.5]]

      //Dessin des chemin(polyline):--------------------------------------------------------------------------------------------------------------------------------------------------------------------
        
        var polyline = L.polyline(pointCheminClassique, {color: 'blue'}).addTo(cheminClassiqueLayer2);
        var polyline = L.polyline(pointCheminClassique, {color: 'blue'}).addTo(cheminForgeronLayer2);
        var polyline = L.polyline(pointCheminClassique, {color: 'blue'}).addTo(cheminOptionnelLayer2);
        var polyline = L.polyline(pointCheminClassiqueQuete, {color: 'green'}).addTo(cheminClassiqueLayer2);
        var polyline = L.polyline(pointCheminClassiqueQuete, {color: 'green'}).addTo(cheminForgeronLayer2);
        var polyline = L.polyline(pointCheminClassiqueQuete, {color: 'green'}).addTo(cheminOptionnelLayer2);
        var polyline = L.polyline(pointCheminSalle1, {color: 'red'}).addTo(cheminClassiqueLayer2);
        var polyline = L.polyline(pointCheminSalle1, {color: 'red'}).addTo(cheminOptionnelLayer2);
        var polyline = L.polyline(pointCheminSalle1, {color: 'red'}).addTo(cheminForgeronLayer2);
        var polyline = L.polyline(pointCheminSalle2, {color: 'red'}).addTo(cheminClassiqueLayer2);
        var polyline = L.polyline(pointCheminSalle2, {color: 'red'}).addTo(cheminOptionnelLayer2);
        var polyline = L.polyline(pointCheminSalle2, {color: 'red'}).addTo(cheminForgeronLayer2);
        var polyline = L.polyline(pointCheminSalle3, {color: 'red'}).addTo(cheminOptionnelLayer2);
        var polyline = L.polyline(pointCheminSalle4, {color: 'red'}).addTo(cheminOptionnelLayer2);
        var polyline = L.polyline(pointCheminSalle5, {color: 'red'}).addTo(cheminOptionnelLayer2);
        var polyline = L.polyline(pointCheminSalle6, {color: 'red'}).addTo(cheminClassiqueLayer2);
        var polyline = L.polyline(pointCheminSalle6, {color: 'red'}).addTo(cheminOptionnelLayer2);
        var polyline = L.polyline(pointCheminSalle6, {color: 'red'}).addTo(cheminForgeronLayer2);
        var polyline = L.polyline(pointCheminForgeron1, {color: 'yellow'}).addTo(cheminForgeronLayer2);
        var polyline = L.polyline(pointCheminForgeron1PourOptionnel, {color: 'yellow'}).addTo(cheminOptionnelLayer2);
        var polyline = L.polyline(pointCheminForgeron2, {color: 'yellow'}).addTo(cheminClassiqueLayer2);
        var polyline = L.polyline(pointCheminForgeron2, {color: 'yellow'}).addTo(cheminOptionnelLayer2);
        var polyline = L.polyline(pointCheminForgeron2, {color: 'yellow'}).addTo(cheminForgeronLayer2);
  
    //Arrays Chemin/Marker:--------------------------------------------------------------------------------------------------------------------------------------------------------------------
    

      var valueLayerChemin2={'CheminClassique':1,'CheminForgeron':0,'CheminOptionnel':0}
      var cheminLayer2={'CheminClassique':cheminClassiqueLayer2,'CheminForgeron':cheminForgeronLayer2,'CheminOptionnel':cheminOptionnelLayer2}
      var valueLayerMarker2={"Forgeron":1,"PointCle":1,"Salle":1}
      var markerLayer2={"Forgeron":markerForgeronLayer2,"PointCle":markerPointCleLayer2,"Salle":markerSalleLayer2}


      
    
//#endregion
// #region Etage 3:--------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //Map:--------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    var mapEtage3 = L.map("carte3", {
      crs: L.CRS.Simple,
      minZoom: -3,
      maxZoom: 10,
      zoomSnap: 0.1,
      zoomControl: false,
      attributionControl: false
    });

    let mapEtage3Width, mapEtage3Height, bounds3, mapEtage3Overlay,initialbounds3;

    const defaultImg3 = new Image();
    defaultImg3.onload = () => {
      
      mapEtage3Width = defaultImg3.width;
      mapEtage3Height = defaultImg3.height;
      bounds3 = [[0, 0], [mapEtage3Height, mapEtage3Width]];
      initialbounds3=bounds3;
      mapEtage3Overlay = L.imageOverlay("image/laby-3.png", bounds3).addTo(mapEtage3);
      mapEtage3.fitBounds(bounds3);
      cartes['carte3']=[mapEtage3,valueLayerChemin3,cheminLayer3,valueLayerMarker3,markerLayer3,initialbounds3]
    };
    defaultImg3.src = "image/laby-3.png"; 

  //Layer:--------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    //Chemin:--------------------------------------------------------------------------------------------------------------------------------------------------------------------

      let cheminClassiqueLayer3=L.layerGroup().addTo(mapEtage3);
      let cheminOptionnelLayer3=L.layerGroup().addTo(mapEtage3);
      let cheminForgeronLayer3=L.layerGroup().addTo(mapEtage3);
      
      mapEtage3.removeLayer(cheminForgeronLayer3);
      mapEtage3.removeLayer(cheminOptionnelLayer3);
      
    //Marker:--------------------------------------------------------------------------------------------------------------------------------------------------------------------
    let markerForgeronLayer3=L.layerGroup().addTo(mapEtage3)
    let markerSalleLayer3=L.layerGroup().addTo(mapEtage3)
    let markerPointCleLayer3=L.layerGroup().addTo(mapEtage3)

  //Chemin:--------------------------------------------------------------------------------------------------------------------------------------------------------------------

    var pointCheminClassique = [ [26, 32], [26, 316], [53,316], [53,230], [110,230], [110,176], [83,176], [83,60], [55,60], [55,29], [313,29], [313,280], [324,280] ];
    var pointCheminClassiqueQuete=[ [53,316], [113,316], [113,325] ]
    var pointCheminSalle1=[[25.5, 103.5],[19.5, 103.5]]
    var pointCheminSalle2=[[25.5, 280.5],[19.5, 280.5]]
    var pointCheminSalle3=[ [110,176], [137,176], [137,203], [168,203], [168,233], [222,233], [222,228]]
    var pointCheminSalle4=[ [170,28],[169,59],[142,59],[142,115],[134,115]]
    var pointCheminSalle5=[ [260,28],[260,59],[197,60],[197,84],[202,84]]
    var pointCheminSalle6=[[313.5, 151.5], [307.5, 151.5]]
    var pointCheminForgeron1=[[260,28],[260,59],[197,60],[197,84],[202,84],[197,84],[197,116],[170,116],[170,170],[197,170],[197,189],[204,189]]
    var pointCheminForgeron1PourOptionnel=[[197,84.1],[197,116],[170,116],[170,170],[197,170],[197,189],[204,189]]
    var pointCheminForgeron2=[[313.5, 88.5],[322.5, 88.5]]

      //Dessin des chemin(polyline):--------------------------------------------------------------------------------------------------------------------------------------------------------------------
        
        var polyline = L.polyline(pointCheminClassique, {color: 'blue'}).addTo(cheminClassiqueLayer3);
        var polyline = L.polyline(pointCheminClassique, {color: 'blue'}).addTo(cheminForgeronLayer3);
        var polyline = L.polyline(pointCheminClassique, {color: 'blue'}).addTo(cheminOptionnelLayer3);
        var polyline = L.polyline(pointCheminClassiqueQuete, {color: 'green'}).addTo(cheminClassiqueLayer3);
        var polyline = L.polyline(pointCheminClassiqueQuete, {color: 'green'}).addTo(cheminForgeronLayer3);
        var polyline = L.polyline(pointCheminClassiqueQuete, {color: 'green'}).addTo(cheminOptionnelLayer3);
        var polyline = L.polyline(pointCheminSalle1, {color: 'red'}).addTo(cheminClassiqueLayer3);
        var polyline = L.polyline(pointCheminSalle1, {color: 'red'}).addTo(cheminOptionnelLayer3);
        var polyline = L.polyline(pointCheminSalle1, {color: 'red'}).addTo(cheminForgeronLayer3);
        var polyline = L.polyline(pointCheminSalle2, {color: 'red'}).addTo(cheminClassiqueLayer3);
        var polyline = L.polyline(pointCheminSalle2, {color: 'red'}).addTo(cheminOptionnelLayer3);
        var polyline = L.polyline(pointCheminSalle2, {color: 'red'}).addTo(cheminForgeronLayer3);
        var polyline = L.polyline(pointCheminSalle3, {color: 'red'}).addTo(cheminOptionnelLayer3);
        var polyline = L.polyline(pointCheminSalle4, {color: 'red'}).addTo(cheminOptionnelLayer3);
        var polyline = L.polyline(pointCheminSalle5, {color: 'red'}).addTo(cheminOptionnelLayer3);
        var polyline = L.polyline(pointCheminSalle6, {color: 'red'}).addTo(cheminClassiqueLayer3);
        var polyline = L.polyline(pointCheminSalle6, {color: 'red'}).addTo(cheminOptionnelLayer3);
        var polyline = L.polyline(pointCheminSalle6, {color: 'red'}).addTo(cheminForgeronLayer3);
        var polyline = L.polyline(pointCheminForgeron1, {color: 'yellow'}).addTo(cheminForgeronLayer3);
        var polyline = L.polyline(pointCheminForgeron1PourOptionnel, {color: 'yellow'}).addTo(cheminOptionnelLayer3);
        var polyline = L.polyline(pointCheminForgeron2, {color: 'yellow'}).addTo(cheminClassiqueLayer3);
        var polyline = L.polyline(pointCheminForgeron2, {color: 'yellow'}).addTo(cheminOptionnelLayer3);
        var polyline = L.polyline(pointCheminForgeron2, {color: 'yellow'}).addTo(cheminForgeronLayer3);
  
    //Arrays Chemin/Marker:--------------------------------------------------------------------------------------------------------------------------------------------------------------------
    

      var valueLayerChemin3={'CheminClassique':1,'CheminForgeron':0,'CheminOptionnel':0}
      var cheminLayer3={'CheminClassique':cheminClassiqueLayer3,'CheminForgeron':cheminForgeronLayer3,'CheminOptionnel':cheminOptionnelLayer3}
      var valueLayerMarker3={"Forgeron":1,"PointCle":1,"Salle":1}
      var markerLayer3={"Forgeron":markerForgeronLayer3,"PointCle":markerPointCleLayer3,"Salle":markerSalleLayer3}


      
    
//#endregion
// #region Code:--------------------------------------------------------------------------------------------------------------------------------------------------------------------
var cartes={}

var filesMarker=['Forgeron.json',"PointCle.json","Salle.json"]
  general.loadMarker(filesMarker,markerLayer)
  
  document.getElementById('ResetView').addEventListener('click',()=>{
    mapEtage1.fitBounds(initialbounds, { animate: false });
    mapEtage2.fitBounds(initialbounds2, { animate: false });
    mapEtage3.fitBounds(initialbounds3, { animate: false });    
  })
  
  window.toggleLayerCheminLaby = function(button) {
    for(let c in cartes){
      if(document.getElementById(c).style.display=='block'){
        general.toggleLayerChemin(button,cartes[c][1],cartes[c][2],cartes[c][0]);
      }
    }
      
  };
  window.toggleLayerMarker =  function(button){
    for(let c in cartes){
      if(document.getElementById(c).style.display=='block'){
        general.toggleLayerMarker(button,cartes[c][3],cartes[c][4],cartes[c][0])
      }
    }
  }
  window.toggleEtage=function(button){
    general.toggleEtage(button)
    for(let c in cartes){
      if(document.getElementById(c).style.display==='block'){
        cartes[c][0].invalidateSize();
        cartes[c][0].fitBounds(cartes[c][5]);
      }
    }
  }
//#endregion 

//Methode Général(changer la map):--------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // var map=mapEtage2
    // const w=450;
    // const h=450;

    // // Ajouter une grille
    //     const step = 3; // taille des cellules en pixels
    //     const gridLayer = L.layerGroup();
    //     var cheminEntier=[]
    //     // Lignes horizontales
    //     for(let y = 0; y <= h; y += step){
    //       gridLayer.addLayer(L.polyline([[y,0],[y,w]], {color:'gray', weight:1, opacity:0.5}));
    //     }

    //     // Lignes verticales
    //     for(let x = 0; x <= w; x += step){
    //       gridLayer.addLayer(L.polyline([[0,x],[h,x]], {color:'gray', weight:1, opacity:0.5}));
    //     }

    //     gridLayer.addTo(map);

    //     map.on('click', function(e) {
    //   const lat = e.latlng.lat;
    //   const lng = e.latlng.lng;

    //   // Calculer l'origine de la cellule
    //   const cellX = Math.floor(lng / step) * step;
    //   const cellY = Math.floor(lat / step) * step;

    //   // Coordonnées du centre de la cellule
    //   const centerX = cellX + step / 2;
    //   const centerY = cellY + step / 2;
    //   cheminEntier.push([centerY, centerX])
    //   console.log('Centre de la case :', [centerY, centerX]);
    //   console.log('Chemin entier: ',cheminEntier)
    // });