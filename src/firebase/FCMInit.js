import firebase from "firebase/compat/app";
import "firebase/compat/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDvjMgEcuaDVJ5eqobbM6E0O6x_-4kEkdU",
  authDomain: "wonda-f1f7e.firebaseapp.com",
  databaseURL: "https://wonda-f1f7e.firebaseio.com",
  projectId: "wonda-f1f7e",
  storageBucket: "wonda-f1f7e.appspot.com",
  messagingSenderId: "814253955991",
  appId: "1:814253955991:web:52b9abe68e690cf2",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

const publicKey =
  "BKp9GbWMlKWWoEcjMjOVc415F28YWo30c5C2Q7l0MY-fN9bCv7D93-AsCyv1EKtXeQ1X5mvddBgBXXmvmGg1O4k";

export const getToken = async (setTokenFound) => {
  let currentToken = "";

  try {
    currentToken = await messaging.getToken({ vapidKey: publicKey });
    if (currentToken) {
      setTokenFound(true);

      var xhr = new XMLHttpRequest();
      xhr.withCredentials = false;

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
        }
      });

      xhr.open(
        "POST",
        "https://iid.googleapis.com/iid/v1/" +
          currentToken +
          "/rel/topics/newTicket"
      );
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader(
        "Authorization",
        "key=AAAAvZVRW5c:APA91bE0yMhF820ODFyjLR9D6JP42eUfM6rEiRXKxQcru0mNlcA_W0z_5VEPKwKdooKP2xYF5Iugyu5nJ6mP-n63norvvoIy4kRkjhLh2-5NQjKzmqVORjVox3xeAE56QnRvyEro3YMD"
      );

      xhr.send();
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log("An error occurred while retrieving token. ", error);
  }

  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });

export const Display = ({ title, body }) => {
  return (
    <div>
      <h6>{title}</h6>
      <p>{body}</p>
    </div>
  );
};
