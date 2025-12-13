import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
    import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
    import { firebaseConfig } from '/SAOMAP/scriptGeneral/firebase-config.js';

    const app = initializeApp(firebaseConfig);
    const auth = getAuth();

    // Login
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      document.getElementById("erreurConnection").style.visibility="hidden"
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          window.location.href = "/SAOMAP/index.html";
        })
        .catch(err => {
          document.getElementById("erreurConnection").style.visibility="visible"
          console.log(err)
        }
        );
    });

    // Reset password
    const resetForm = document.getElementById("resetForm");
    resetForm.addEventListener("submit", (e) => {
      e.preventDefault()
      var erreurReset=document.getElementById("erreurReset")
      var messageReset=document.getElementById("messageReset")
      messageReset.style.visibility="hidden"
      messageReset.style.display="block"
      erreurReset.style.visibility="hidden"
        erreurReset.style.display="none"
      const email = document.getElementById("resetEmail").value;
      sendPasswordResetEmail(auth, email)
        .then(() => document.getElementById("messageReset").style.visibility="visible")
        .catch(err => {
          messageReset.style.visibility="hidden"
          messageReset.style.display="none"
          erreurReset.style.visibility="visible"
          erreurReset.style.display="block"
          console.log(err)
        });
    });

document.addEventListener('click',(e)=>{
  if(e.target.id==="resetBtn"){
    var login=document.getElementById('loginDiv').classList.remove('active')
    var reset=document.getElementById('resetDiv').classList.add('active')
    
  }
  if(e.target.id==="loginBtn"){
    var login=document.getElementById('loginDiv').classList.add('active')
    var reset=document.getElementById('resetDiv').classList.remove('active')
  }
})