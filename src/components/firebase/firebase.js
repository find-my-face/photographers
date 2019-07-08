import app from "firebase/app";

const config = {
  apiKey: "AIzaSyCMhyzLJpAt6KmCeEgnT9FV4niLUqaP7fw",
  authDomain: "find-my-face.firebaseapp.com",
  databaseURL: "https://find-my-face.firebaseio.com",
  projectId: "find-my-face",
  storageBucket: "find-my-face.appspot.com",
  messagingSenderId: "342095524666",
  appId: "1:342095524666:web:3de5759e04626187"
};

export default class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}
