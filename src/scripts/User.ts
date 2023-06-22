let sessionKey = 'logged';
let result = sessionStorage.getItem(sessionKey);
let account;

// Contrôle de la validité de la session en cours
if(result == null) {
    window.location.href = '../../index.html';
} else {
    account = JSON.parse(result);
}

// Récupération des élements UI
let userName = document.getElementById('userName') as HTMLElement;
let userEmail = document.getElementById('userEmail') as HTMLElement;
let userAge = document.getElementById('userAge') as HTMLElement;

// Personnalisation du template
if(result != null) {
    userName.textContent = account.name;
    userEmail.textContent = account.email
    userAge.textContent = (account.birth.split('T'))[0];
}