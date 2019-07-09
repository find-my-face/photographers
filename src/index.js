import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/AppIndex";
import Firebase, { FirebaseContext } from "./components/Firebase/FirebaseIndex";

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
