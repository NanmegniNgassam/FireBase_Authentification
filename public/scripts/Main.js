"use strict";
//UX Design
let loginTrigger = document.getElementById('loginTrigger');
let signiniTrigger = document.getElementById('signinTrigger');
let loginForm = document.getElementById('loginForm');
let signinForm = document.getElementById('signinForm');
loginTrigger === null || loginTrigger === void 0 ? void 0 : loginTrigger.addEventListener('click', (e) => {
    loginTrigger === null || loginTrigger === void 0 ? void 0 : loginTrigger.classList.add('active');
    signiniTrigger === null || signiniTrigger === void 0 ? void 0 : signiniTrigger.classList.remove('active');
    loginForm === null || loginForm === void 0 ? void 0 : loginForm.classList.add('active');
    signinForm === null || signinForm === void 0 ? void 0 : signinForm.classList.remove('active');
});
signiniTrigger === null || signiniTrigger === void 0 ? void 0 : signiniTrigger.addEventListener('click', (e) => {
    signiniTrigger === null || signiniTrigger === void 0 ? void 0 : signiniTrigger.classList.add('active');
    loginTrigger === null || loginTrigger === void 0 ? void 0 : loginTrigger.classList.remove('active');
    signinForm === null || signinForm === void 0 ? void 0 : signinForm.classList.add('active');
    loginForm === null || loginForm === void 0 ? void 0 : loginForm.classList.remove('active');
});
