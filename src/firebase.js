import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAAAVef1olA657TgvY2loi9nCHQ0QwC-54",
    authDomain: "audio-chat-fb377.firebaseapp.com",
    databaseURL: "https://audio-chat-fb377.firebaseio.com",
    projectId: "audio-chat-fb377",
    storageBucket: "audio-chat-fb377.appspot.com",
    messagingSenderId: "952740336407",
    appId: "1:952740336407:web:dc8b365a30088350569d52"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();