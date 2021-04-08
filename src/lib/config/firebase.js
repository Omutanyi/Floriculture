import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCt_n4Gm1LYb341ZdD0MOs1J4TCBSItEEs",
    authDomain: "fshop-dd95d.firebaseapp.com",
    projectId: "fshop-dd95d",
    storageBucket: "fshop-dd95d.appspot.com",
    messagingSenderId: "969170693831",
    appId: "1:969170693831:web:ca0e6c75543e6f15b118e2",
    measurementId: "G-LGVRC588J2"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire