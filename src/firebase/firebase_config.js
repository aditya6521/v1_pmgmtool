import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
 


var config = {
    apiKey: "AIzaSyCiicHudEYm28kYcuzZZdVq85BQSqHrE4w",
    authDomain: "v1-mgmt.firebaseapp.com",
    projectId: "v1-mgmt",
    storageBucket: "v1-mgmt.appspot.com",
    messagingSenderId: "95708668117",
    appId: "1:95708668117:web:04d4454af90ba2c43e825c"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  firebase.firestore().settings({timestampsInSnapshots:true});

  //const dbFireStore=firebase.firestore();


  export default firebase;

