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
      let listeButton=document.createElement('button');
      listeButton.id='Palier '+i+'-'+(i+4);
      listeButton.textContent='Palier '+i+'-'+(i+4);
      listeButton.classList.add('btn-liste')
      liste.appendChild(listeButton)
      for(let j=0;j<=4;j++){
        let button=document.createElement('button')
        button.id='Palier'+(j+i)
        button.textContent='Palier'+(j+i)
        button.classList.add(('btn-palier'))
        divEtape.appendChild(button)
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
      if (!e.target.classList.contains('btn-liste')) return;
      document.querySelectorAll('.btn-liste').forEach(btn => btn.classList.add('active'));
      e.target.classList.add('btn-liste');


      divEtapes.forEach(d=>
        d.style.display='none')
      let id=e.target.id
      console.log()
      document.getElementById(id).classList.toggle('active')
      document.getElementById(id.split(' ')[1]).style.display='grid'


    })
    palier.addEventListener('click',(e)=>{
      fetch('/Paliers/'+e.target.id+'/index.html', { method: 'HEAD' })
    .then(res => {
        if (res.ok) {
            window.location.href='/Paliers/'+e.target.id+'/index.html'
        } else {
            console.log('Le fichier n’existe pas.');
        }
    })
    .catch(() => console.log('Erreur lors de la vérification.'));
    })
});

document.addEventListener('DOMContentLoaded',()=>{
  let changelog=document.getElementById('changelog')
  fetch("/changelog.txt")
  .then(response=>{
    return response.text()})
  .then(text=>{
    const lines=text.split(/\r?\n/);
    lines.forEach(line => {
      const p=document.createElement('p')
      p.textContent=line;
      changelog.appendChild(p)
    })
  })
  .catch(err => {
    console.error("Erreur :", err);
    let p=document.createElement('p')
    p.textContent="Impossible de charger le changelog."
    changelog.appendChild(p);
  });

})
