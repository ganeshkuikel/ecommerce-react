import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCOgXl6VZqDZ7SqVIzdp6VStS0zJIbfNks",
    authDomain: "still-chassis-237114.firebaseapp.com",
    projectId: "still-chassis-237114",
    storageBucket: "still-chassis-237114.appspot.com",
    messagingSenderId: "480310403128",
    appId: "1:480310403128:web:8e4f85f9e3c5ce010446cd",
    measurementId: "G-2ME907Z9V6"
};

export const createruserProfileDocument =  async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firebase.doc('users/456738ssa');

    const snapshot = await userRef.get()
    console.log(snapshot)

} 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;