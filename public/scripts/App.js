sessionKey = 'logged';
"use strict";
/*Form Handling*/
let loginForm1 = document.getElementById('loginForm');
let signupForm1 = document.getElementById('signinForm');
/*Inputs management*/
let emailSignin = document.getElementById('email-signin');
let userPasswordSignin = document.getElementById('password-signin');
let signupMessage = document.getElementById('signin-message');
let emailLogin = document.getElementById('email-login');
let passwordLogin = document.getElementById('password-login');
let loginMessage = document.getElementById('login-message');


/* UI Fonctions */
const formNotification = (element, status, message) => {
    if(status) {
        element.classList.remove('access-denied');
        element.classList.add('access-granted');
    } else {
        element.classList.remove('access-granted');
        element.classList.add('access-denied');
    }

    element.textContent = message;
}

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
            console.log(result);

            formNotification(signupMessage, true, "Your account Creation was successful! Now login");
            // ...
        })
        .catch((error) => {
            console.log('An error occured !');
            console.log(error.code);
            console.log(error.message);

            formNotification(signupMessage, false, error.code);
        });
}

const signIn = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
      console.log(result);

      let req = JSON.stringify({
        id : result.user.uid,
        email : result.user.email
      });
      sessionStorage.setItem(sessionKey, req);

      //redirection
      window.location.href = 'pages/user.html';
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      formNotification(loginMessage, false, error.code);
    });
}

// Traitement du formulaire de connexion
loginForm1.addEventListener('submit', (e) => {
    e.preventDefault();
    let tryConnectStatus = false;
    tryConnectStatus = (emailLogin.value.length > 0) &&
        (passwordLogin.value.length > 0);
    if (tryConnectStatus) {
        signIn(emailLogin.value, passwordLogin.value);
    }
    else {
        formNotification(loginMessage, false, "something's wrong with your datas");
    }
});

//Traitement du formulaire d'inscription
signupForm1.addEventListener('submit', (e) => {
    e.preventDefault();
    let validationStatus = false;
    let currentDate = new Date();
    validationStatus = (emailSignin.value.length > 0) &&
        (userPasswordSignin.value.length > 0);

    if (validationStatus) {
        //Création du coockie contenant les informations du compte utilisateur
        signUp(emailSignin.value, userPasswordSignin.value);
    }
    else {
        formNotification(signupMessage, false, "something's wrong with your datas");
    }
});
