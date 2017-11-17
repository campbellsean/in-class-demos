import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css'; //bootstrap (bundled)

import App from './App';

import firebase from 'firebase/app';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD6cAxpDZt0orcc2YnQKhfSMH34f-dgbTA",
    authDomain: "info343b-a17-demo.firebaseapp.com",
    databaseURL: "https://info343b-a17-demo.firebaseio.com",
    projectId: "info343b-a17-demo",
    storageBucket: "info343b-a17-demo.appspot.com",
    messagingSenderId: "828307407292"
};
firebase.initializeApp(config);

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAX-sahhvC36UCeUz4N9F5OSS70TDDJWD4",
    authDomain: "seanpc-firebase-demo.firebaseapp.com",
    databaseURL: "https://seanpc-firebase-demo.firebaseio.com",
    projectId: "seanpc-firebase-demo",
    storageBucket: "seanpc-firebase-demo.appspot.com",
    messagingSenderId: "623426225907"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
