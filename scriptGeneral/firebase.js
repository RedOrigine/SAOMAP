import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { firebaseConfig } from '/SAOMAP/scriptGeneral/firebase-config.js';
import { getFirestore,doc,getDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db =getFirestore();

// Vérifier si l'utilisateur est connecté
onAuthStateChanged(auth, (user) => {
    if (!user) {
    window.location.href = "/SAOMAP/login/login.html";
    }
});

// // Test BDD
// export async function getPseudo(){
//     const user=auth.currentUser;
//     if(!user){
//         console.log("utilisateur non connecté")
//         return;
//     }
//     const docRef= doc(db,"users",user.uid);
//     const docSnap= await getDoc(docRef);

//     if(docSnap.exists()){
//         console.log("Pseudo: ",docSnap.data().pseudo)
//     }else{
//         console.log("Pas de donné pour cet utilisateur")
//     }
// }