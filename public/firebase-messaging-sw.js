// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyDvjMgEcuaDVJ5eqobbM6E0O6x_-4kEkdU",
  authDomain: "wonda-f1f7e.firebaseapp.com",
  databaseURL: "https://wonda-f1f7e.firebaseio.com",
  projectId: "wonda-f1f7e",
  storageBucket: "wonda-f1f7e.appspot.com",
  messagingSenderId: "814253955991",
  appId: "1:814253955991:web:52b9abe68e690cf2",
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();


messaging.onBackgroundMessage(function (payload) {
  
  //console.log("Received background message ", payload);
  // eslint-disable-next-line no-restricted-globals
 self.registration.hideNotification();
  

  // eslint-disable-next-line no-restricted-globals
 // return self.registration.showNotification(
 //   notificationTitle,
 //   notificationOptions
 // );

 setTimeout(()=>{
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    tag: "notification-1",
    body: payload.notification.body,
    icon: "icon.png",
  };

   // eslint-disable-next-line no-restricted-globals
  return self.registration.showNotification(
       notificationTitle,
      notificationOptions
     );
 },2000);
  
  
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener("notificationclick", function (event) {});


