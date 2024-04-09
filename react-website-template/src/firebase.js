import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyA4EnTbw40XnyYjHRHYjvWAxJ42STDF3cA",
    authDomain: "st-patricks-curriculum.firebaseapp.com",
    projectId: "st-patricks-curriculum",
    storageBucket: "st-patricks-curriculum.appspot.com",
    messagingSenderId: "820214037926",
    appId: "1:820214037926:web:fa3a5cf67f8daf598d6367",
    measurementId: "G-8FMZBW4FT4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const userSignUp = ( email, password ) => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    });
};

function handleSignUp(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    userSignUp(formJson.email, formJson.password);
}

const userSignIn = ( email, password ) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    });
}

function handleSignIn(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    userSignIn(formJson.email, formJson.password);
}

export {handleSignIn, handleSignUp }