/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");

/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/

// Variables
let user = "You";
let score = "0";

function addScore(){
  score = score + 1;
}



function helloWorld(){
  console.log("Running helloWorld()")
  firebase.database().ref('/').set(
    {
      message: 'Hello'
    }
  )
}

function simpleWrite(){
  firebase.database().ref('/').set(
    {
      message: 'Goodbye'
    }
  )
}

function simpleRead(){
  firebase.database().ref('/message').once('value', displayMessage, fb_readError);
  
}

function displayMessage(snapshot){
  var dbData = snapshot.val();
  if (dbData == null) {
    console.log ("The message you were looking for doesn't exist.")
  } else {
  console.log ("The message is: " + snapshot.val());
  HTML_OUTPUT.innerHTML = snapshot.val();
  }
}

function fb_readError(error) {
  console.log("There was an error reading the message from the database");
  console.error(error);
}

function readListener() {
  console.log("Setting up listener for message");
  firebase.database().ref("/message").on('value', displayMessage);
}

function displayMessage(snapshot){
  HTML_OUTPUT.innerHTML = snapshot.val();
  console.log("Something in the database has been called upon.")
}

function stopListener() {
  console.log("stopping listeners from message");
  firebase.database().ref('/message').off();
}

highscoreTable = {
    game1: {
        users: {
          Seva: 303,
          Tana: 23,
          Gus: 74,
          uncle_timmy: 5362,
          YashKumar: 4
        }
    }
}

function setUserScoreTo0() {
firebase.database().ref('/game1/users/Seva/').set(0);
};

function setUserBasedOnVariable() {
  firebase.database().ref('/game1/users/'+user).set(score);
};

function updateUserBasedOnVariable() {
  firebase.database().ref('/game1/users/'+user).update(score);
}

function removeUserScore() {
    firebase.database().ref('/game1/users/'+user).remove(score);
}