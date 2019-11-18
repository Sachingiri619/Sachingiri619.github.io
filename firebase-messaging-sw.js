/**
 * This class is a part of the package  and the package
 is a part of the project kiranaadminpanel.

 Integrated ICT Pvt. Ltd. Jwagal, Lalitpur, Nepal.
 https://www.integratedict.com.np

 Created by User on 5/30/2019.
 */
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    'messagingSenderId': '539234801655'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

