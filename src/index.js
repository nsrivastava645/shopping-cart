import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCtkp1QriMbHNofK2ObIFFW2BH1ZUDEfjk",
    authDomain: "shopping-cart-nsr645.firebaseapp.com",
    databaseURL: "https://shopping-cart-nsr645.firebaseio.com",
    projectId: "shopping-cart-nsr645",
    storageBucket: "shopping-cart-nsr645.appspot.com",
    messagingSenderId: "519496335808",
    appId: "1:519496335808:web:7871146d44357d986ec825"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root')
);

