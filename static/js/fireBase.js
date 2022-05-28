var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
  apiKey: "AIzaSyDJ-Vx3SBeeEV8FEXPNy7IBBhNFxlbxoLk",
  authDomain: "mental-health-lionbot.firebaseapp.com",
  projectId: "mental-health-lionbot",
  storageBucket: "mental-health-lionbot.appspot.com",
  messagingSenderId: "530240579400",
  appId: "1:530240579400:web:12b7be6e604387bb46757d",
  measurementId: "G-WV333FYXMP"
};


if (!hasInit) {
  firebase.initializeApp(config);
  hasInit = true;
}
