import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/database"

const firebaseConfig = {
    apiKey: "AIzaSyA1hqycoxLMHkmbk1JAXepES6ej5YGNroA",
    authDomain: "stripe-subscription-89332.firebaseapp.com",
    projectId: "stripe-subscription-89332",
    storageBucket: "stripe-subscription-89332.appspot.com",
    messagingSenderId: "410582485255",
    appId: "1:410582485255:web:b0eded2363dfbf3cde5da2"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase
