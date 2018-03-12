//mirror our state to firebase changes
import Rebase from 're-base';
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDU2-GJm9dRXLbJUQt559dcg4mhn7r_34I",
    authDomain: "cash-of-the-day-6fff3.firebaseapp.com",
    databaseURL: "https://cash-of-the-day-6fff3.firebaseio.com",
  });

  const base = Rebase.createClass(firebaseApp.database());
//this is a name export 
  export {firebaseApp}

  //this is a default export
  export default base;