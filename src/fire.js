import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBZSNkoUeZ-GsEiRxALXx3HwcA3GoVmxzY",
  authDomain: "login-auth-efa89.firebaseapp.com",
  databaseURL: "https://login-auth-efa89.firebaseio.com",
  projectId: "login-auth-efa89",
  storageBucket: "login-auth-efa89.appspot.com",
  messagingSenderId: "731050164053",
  appId: "1:731050164053:web:771be7a1465914c69a79dc",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
