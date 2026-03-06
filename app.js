import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
onAuthStateChanged
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const firebaseConfig = {
apiKey: "AIzaSyA4PdOpzB7pIz8hWPBkopjKI5ZnYl5rZaY",
authDomain: "controle-pelada-kf.firebaseapp.com",
projectId: "controle-pelada-kf",
storageBucket: "controle-pelada-kf.firebasestorage.app",
messagingSenderId: "468781176061",
appId: "1:468781176061:web:009375a0a3a63706359a94"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


window.registrar = function(){

const email = document.getElementById("email").value;
const senha = document.getElementById("senha").value;

createUserWithEmailAndPassword(auth,email,senha)
.then(()=>{
alert("Conta criada!");
})
.catch((error)=>{
alert(error.message);
});

}


window.login = function(){

const email = document.getElementById("email").value;
const senha = document.getElementById("senha").value;

signInWithEmailAndPassword(auth,email,senha)
.then(()=>{
window.location.href="index.html";
})
.catch((error)=>{
alert(error.message);
});

}


onAuthStateChanged(auth,(user)=>{

if(user){
console.log("Usuário logado:",user.uid);
}

});
