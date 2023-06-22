// Gestion de la zone de sauvegarde
let localDataKey = 'accounts';
let createAccount = (userEmail, userName, birthday, password) => {
    let db = localStorage.getItem(localDataKey);
    let data = {};
    if (db == null) {
        localStorage.setItem(localDataKey, '');
    }
    else {
        console.log('db already exists !');
    }
};
export {};
