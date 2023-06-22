"use strict";
let sessionKey = 'logged';
let result = sessionStorage.getItem(sessionKey);
let account;
// Contrôle de la validité de la session en cours
if (result == null) {
    window.location.href = '../../index.html';
}
else {
    account = JSON.parse(result);
}
// Récupération des élements UI
let userName = document.getElementById('userName');
let userEmail = document.getElementById('userEmail');
let userAge = document.getElementById('userAge');
// Personnalisation du template
if (result != null) {
    userName.textContent = account.name;
    userEmail.textContent = account.email;
    userAge.textContent = (account.birth.split('T'))[0];
}
