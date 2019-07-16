import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/AppIndex";
import Firebase, { FirebaseContext } from "./components/firebase/FirebaseIndex";

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
