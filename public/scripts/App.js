"use strict";
/*Form Handling*/
let loginForm1 = document.getElementById('loginForm');
let signinForm1 = document.getElementById('signinForm');
/*Inputs management*/
let emailSignin = document.getElementById('email-signin');
let userPasswordSignin = document.getElementById('password-signin');
let signinMessage = document.getElementById('signin-message');
let emailLogin = document.getElementById('email-login');
let passwordLogin = document.getElementById('password-login');
let loginMessage = document.getElementById('login-message');


/* UI Fonctions */

/* Setting up firebase for our application */
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBJhGGlS4TvyBy9sdghRnwBoT8JJr2REmw",
    authDomain: "authentication-black19.firebaseapp.com",
    projectId: "authentication-black19",
    storageBucket: "authentication-black19.appspot.com",
    messagingSenderId: "956212063681",
    appId: "1:956212063681:web:e0b8cd52909d25f0b71340"
  });
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();


const signUp = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            console.log('You are signup');
            console.log(result);
            // ...
        })
        .catch((error) => {
            console.log('An error occured !');
            console.log(error.code);
            console.log(error.message);
        });
}

// Traitement du formulaire de connexion
loginForm1.addEventListener('submit', (e) => {
    e.preventDefault();
    let tryConnectStatus = false;
    tryConnectStatus = (emailLogin.value.length > 0) &&
        (passwordLogin.value.length > 0);
    if (tryConnectStatus) {
        let result = signIn(emailLogin.value, passwordLogin.value);
        if (result == null) {
            loginMessage.classList.remove('access-granted');
            loginMessage.classList.add('access-denied');
            loginMessage.textContent = "Account doesn't already exist !";
        }
        else {
            // Définition d'une session storage pour la session active
            
            //redirection
            window.location.href = 'pages/user.html';
        }
    }
    else {
        loginMessage.classList.remove('access-granted');
        loginMessage.classList.add('access-denied');
        loginMessage.textContent = "something's wrong with your datas";
    }
});

//Traitement du formulaire d'inscription
signinForm1.addEventListener('submit', (e) => {
    e.preventDefault();
    let validationStatus = false;
    let currentDate = new Date();
    validationStatus = (emailSignin.value.length > 0) &&
        (userPasswordSignin.value.length > 0);

    if (validationStatus) {
        //Création du coockie contenant les informations du compte utilisateur
        signUp(emailSignin.value, userPasswordSignin.value);

        signinMessage.classList.add('access-granted');
        signinMessage.classList.remove('access-denied');
        signinMessage.textContent = "Account creation was succesful ! \n Now login";
    }
    else {
        signinMessage.classList.remove('access-granted');
        signinMessage.classList.add('access-denied');
        signinMessage.textContent = "Something's wrong with your datas";
    }
});
