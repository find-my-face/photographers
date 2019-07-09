import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyCMhyzLJpAt6KmCeEgnT9FV4niLUqaP7fw",
  authDomain: "find-my-face.firebaseapp.com",
  databaseURL: "https://find-my-face.firebaseio.com",
  projectId: "find-my-face",
  storageBucket: "find-my-face.appspot.com",
  messagingSenderId: "342095524666",
  appId: "1:342095524666:web:3de5759e04626187"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref("users");
}

export default Firebase;
