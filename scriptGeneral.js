import * as icon from '/SAOMAP/scriptIcon.js'

export function toggleLayerChemin(button,valueLayerChemin,cheminLayer,map){
  let id=button.id
  for(let chemin in valueLayerChemin){
    if (chemin==id && !valueLayerChemin[chemin]){
      valueLayerChemin[chemin]=1;
      map.addLayer(cheminLayer[chemin])
    }else{
      if(chemin  !=id && valueLayerChemin[chemin]){
        valueLayerChemin[chemin]=0;
        map.removeLayer(cheminLayer[chemin])
      }
    }   
  }
  for(let chemin in valueLayerChemin){
    if(valueLayerChemin[chemin]){
      document.getElementById(chemin).classList.remove('active');
    }else{
      document.getElementById(chemin).classList.add('active')
    }
  }
}


export function toggleLayerMarker(button,valueLayerMarker,markerLayer,map){
  let id=button.id
  if (valueLayerMarker[id]){
    valueLayerMarker[id]=0
    map.removeLayer(markerLayer[id]);
  }else{
    valueLayerMarker[id]=1
    map.addLayer(markerLayer[id]);
  }
  document.getElementById(id).classList.toggle('active');
}

export function loadMarkerWithDesc(files,markerLayer){
  files.forEach(chemin =>{
    fetch('marker/'+chemin)
    .then(response=> response.json())
    .then(data=>{
      data.forEach(element => {
                var marker = L.marker(element.coord,{
                  title:element.name,
                  icon: icon.iconArray[element.icon]
                }).addTo(markerLayer[chemin.split('.').slice(0,-1)])
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
export function loadMarker(files,markerLayer){
  files.forEach(chemin =>{
    fetch('marker/'+chemin)
    .then(response=> response.json())
    .then(data=>{
      data.forEach(element => {
                var marker = L.marker(element.coord,{
                  title:element.name,
                  icon: icon.iconArray[element.icon]
                }).addTo(markerLayer[chemin.split('.').slice(0,-1)])
                marker.bindTooltip(element.name,{
                  permanent:false,
                  direction:"top",
                  offset:[0,-10]
                })
                marker.categorie=element.categorie
                marker.data=element
            });
    })
  }) 
}

export function affichageDescription(data){
  let div=document.getElementById('info');
  div.innerHTML=""
  if(data.name){
    let h1=document.createElement('h1')
    h1.textContent=data.name
    div.appendChild(h1)
  }
  if(data.description){
    data.description.forEach(desc =>{
      let p=document.createElement('p')
      p.textContent=desc
      div.appendChild(p)
    })
    
  }
  if(data.coordGame){
    let p=document.createElement('p')
    p.textContent="X= "+data.coordGame[0]+" / Y= "+data.coordGame[1]+" / Z= "+data.coordGame[2]
    div.appendChild(p)
  }
}

export function toggleEtage(button){
  let array={"etage1":"carte1","etage2":"carte2","etage3":"carte3"}
    for(let btn in array) {
      if(btn==button.id && button.classList.value!="btn-categorie"){
        button.classList.toggle('active')
        document.getElementById(array[btn]).style.display='block'
      }if(document.getElementById(btn).classList.value=="btn-categorie" && btn!= button.id){
        document.getElementById(btn).classList.toggle('active')
        document.getElementById(array[btn]).style.display='none'

      }
    }

}

export function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}