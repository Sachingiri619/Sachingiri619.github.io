importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js');


firebase.initializeApp({
    messagingSenderId: '248890543145' // troque pelo seu sender id 
});

const messaging = firebase.messaging();


