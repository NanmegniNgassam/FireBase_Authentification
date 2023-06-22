"use strict";
let sessionKey = 'logged';
let result = sessionStorage.getItem(sessionKey);
let account;
// Contrôle de la validité de la session en cours
if (result == null) {
    window.location.href = '../index.html';
}
else {
    account = JSON.parse(result);
}
// Récupération des élements UI
let userId = document.getElementById('uid');
let userEmail = document.getElementById('userEmail');
let logoutButton = document.getElementById('logout');
// Personnalisation du template
if (result != null) {
    userId.textContent = account.id;
    userEmail.textContent = account.email;
}


logoutButton.addEventListener('click', (e) => {
    sessionStorage.removeItem(sessionKey);
    window.location.href = '../index.html';
});
