const textElement = document.getElementById("waveText");
const text = textElement.textContent;
textElement.textContent = ""; // nettoie

text.split("").forEach((letter, i) => {
  const span = document.createElement("span");
  span.textContent = letter;
  span.style.animationDelay = `${i * 0.2}s`;
  textElement.appendChild(span);
});

function afficherPagePalier(){
    console.log('je suis la')
    let parent1=document.getElementById('parent1');
    let parent2=document.getElementById('parent2');
    parent1.style.display="none";
    parent2.style.display="grid";
}

function retourPagePalier(){
    let parent1=document.getElementById('parent1');
    let parent2=document.getElementById('parent2');
    parent1.style.display="hidden";
    parent2.style.display="show";
}

document.addEventListener("DOMContentLoaded", () => {
    let div=document.getElementById('palier')
    let liste=document.getElementById('liste')
    let divEtapes=[]
    for(let i=1;i<=100;i+=5){
      let divEtape=document.createElement('div')
      divEtape.id=+i+'-'+(i+4)
      divEtape.classList.add('div4')
      divEtapes.push(divEtape)
      let listeButton=document.createElement('div');
      let p1liste=document.createElement('p')
      let p2liste=document.createElement('p')
      listeButton.id='Palier '+i+'-'+(i+4);
      p1liste.textContent=i+'-'+(i+4)
      p2liste.textContent='Palier '+i+'-'+(i+4);
      p1liste.classList.add('p1liste')
      p2liste.classList.add('p2liste')
      listeButton.appendChild(p1liste)
      listeButton.appendChild(p2liste)
      listeButton.classList.add('btn-liste')
      liste.appendChild(listeButton)
      for(let j=0;j<=4;j++){
        let divButton=document.createElement('div')
        let p1=document.createElement('p')
        let p2=document.createElement('p')
        divButton.id='Palier'+(j+i)
        p1.textContent=(j+i)
        p2.textContent='Palier'+(j+i)
        p1.classList.add('p1')
        p2.classList.add('p2')
        divButton.appendChild(p1)
        divButton.appendChild(p2)
        divButton.classList.add(('btn-palier'))
        divEtape.appendChild(divButton)
      }
      if(i==1){
        div.appendChild(divEtape)
      }else{
        divEtape.style.display='none';
        div.appendChild(divEtape)
        listeButton.classList.toggle('active')
      }
      
    }
    liste.addEventListener('click',(e)=>{
      if(e.target.tagName==='P'){
        var idListe=e.target.parentNode.id
        var divListe=e.target.parentNode
      }else{
        var idListe=e.target.id
        var divListe=e.target
      }
      if (!divListe.classList.contains('btn-liste')) return;
      document.querySelectorAll('.btn-liste').forEach(btn => btn.classList.add('active'));
      divListe.classList.add('btn-liste');


      divEtapes.forEach(d=>
        d.style.display='none')
      console.log()
      document.getElementById(idListe).classList.toggle('active')
      document.getElementById(idListe.split(' ')[1]).style.display='grid'


    })
    palier.addEventListener('click',(e)=>{
      if(e.target.tagName==='P'){
        var idPalier=e.target.parentNode.id
      }else{
        var idPalier=e.target.id
      }
      fetch('/SAOMAP/Paliers/'+idPalier+'/index.html', { method: 'HEAD' })
    .then(res => {
        if (res.ok) {
            window.location.href='/SAOMAP/Paliers/'+idPalier+'/index.html'
        } else {
            console.log('Le fichier n’existe pas.');
        }
    })
    .catch(() => console.log('Erreur lors de la vérification.'));
    })
});

// document.addEventListener('DOMContentLoaded',()=>{
//   let changelog=document.getElementById('changelog')
//   fetch("/SAOMAP/changelog.md")
//   .then(response=>{
//     return response.text()})
//   .then(text=>{
//     const lines=text.split(/\r?\n/);
//     lines.forEach(line => {
//       const p=document.createElement('p')
//       p.textContent=line;
//       changelog.appendChild(p)
//     })
//   })
//   .catch(err => {
//     console.error("Erreur :", err);
//     let p=document.createElement('p')
//     p.textContent="Impossible de charger le changelog."
//     changelog.appendChild(p);
//   });

// })
document.addEventListener('DOMContentLoaded',()=>{
  fetch('/SAOMAP/changelog.md')
      .then(response => response.text())
      .then(text => {
        // Convertit le Markdown en HTML et l'injecte dans la div
        document.getElementById('changelog').innerHTML = marked.parse(text);
      })
      .catch(err => console.error("Erreur lors du chargement du changelog:", err));

})


