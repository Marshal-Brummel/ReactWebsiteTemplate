import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

ReactDOM.render(<App />, document.getElementById('root'));