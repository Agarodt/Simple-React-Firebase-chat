import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAm8Ijz9J8gvQClXTm7Vo5ARP8S9GXdvvI",
    authDomain: "chat2906-9557b.firebaseapp.com",
    projectId: "chat2906-9557b",
    storageBucket: "chat2906-9557b.appspot.com",
    messagingSenderId: "142966766297",
    appId: "1:142966766297:web:9edf6e66306d0e918f9cc8"
    
})

const db = firebaseApp.firestore()

export { db }