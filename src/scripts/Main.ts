//UX Design
let loginTrigger = document.getElementById('loginTrigger');
let signiniTrigger = document.getElementById('signinTrigger');
let loginForm = document.getElementById('loginForm');
let signinForm = document.getElementById('signinForm');


loginTrigger?.addEventListener('click', (e) => {
    loginTrigger?.classList.add('active');
    signiniTrigger?.classList.remove('active');

    loginForm?.classList.add('active');
    signinForm?.classList.remove('active');
})

signiniTrigger?.addEventListener('click', (e) => {
    signiniTrigger?.classList.add('active');
    loginTrigger?.classList.remove('active');

    signinForm?.classList.add('active');
    loginForm?.classList.remove('active');
})

