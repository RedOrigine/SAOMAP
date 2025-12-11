import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
    import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
    import { firebaseConfig } from '/SAOMAP/scriptGeneral/firebase-config.js';

    const app = initializeApp(firebaseConfig);
    const auth = getAuth();

    // Login
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          window.location.href = "/SAOMAP/index.html";
        })
        .catch(err => alert(err.message));
    });

    // Reset password
    const resetBtn = document.getElementById("resetBtn");
    resetBtn.addEventListener("click", () => {
      const email = document.getElementById("loginEmail").value;
      if (!email) {
        alert("Veuillez entrer votre email pour réinitialiser le mot de passe");
        return;
      }
      sendPasswordResetEmail(auth, email)
        .then(() => alert("Email de réinitialisation envoyé !"))
        .catch(err => alert(err.message));
    });