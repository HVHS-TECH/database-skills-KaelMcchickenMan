/**************************************************************/
// fb_initialise()
// Initialize firebase, connect to the Firebase project.
// 
// Find the config data in the Firebase console. Cog wheel > Project Settings > General > Your Apps > SDK setup and configuration > Config
//
// Input:  n/a
// Return: n/a
/**************************************************************/
  const firebaseConfig = {
     apiKey: "AIzaSyC698AZIW0NmDmYTgTX5wusXH3FuR5DpUs",
  authDomain: "kael-12comp.firebaseapp.com",
  databaseURL: "https://kael-12comp-default-rtdb.firebaseio.com",
  projectId: "kael-12comp",
  storageBucket: "kael-12comp.firebasestorage.app",
  messagingSenderId: "501051539939",
  appId: "1:501051539939:web:d094144e5effc1192be0d6",
  measurementId: "G-NSN1KLH9RE"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // This log prints the firebase object to the console to show that it is working.
  // As soon as you have the script working, delete this log.
  console.log("Firebase initialize finished:");
  console.log(firebase);
