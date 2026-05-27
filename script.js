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
let user = "Anonymous";
let score = 0;


function setName() {
  console.log("called setName");
 user = prompt("What is your name?");

 //firebase.database().ref('/game1/users').set(user);
firebase.database().ref('/game1/users/' + user).set(score);

}

function addScore(){
  score = score + 1;
}

function resetScore() {
  score = 0;
  firebase.database().ref('/game1/users/'+user).set(score);
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
firebase.database().ref('/game1/users/'+user).set(0);
};

function setUserBasedOnVariable() {
  firebase.database().ref('/game1/users/'+user).set(score);
};

//function updateUserBasedOnVariable() {
 // console.log("updatingUserScore")
 // firebase.database().ref('/game1/users/'+user).update(score);
//}

async function readUserHighscore() {
  console.log("reading user highscore");
 await firebase.database().ref('/game1/users/'+user).once('value', logDatabaseRead, fb_readError)
}

function removeUserScore() {
    firebase.database().ref('/game1/users/'+user).remove(score);
}

async function readHighscores() {
  console.log("reading highscores");
 await firebase.database().ref('/game1/users/').once('value', logGlobalDatabaseRead, fb_readError)
}




function logDatabaseRead(snapshot) {
  console.log("your score is: " + snapshot.val());
}

function logGlobalDatabaseRead(snapshot) {
  console.log(snapshot.val());
}