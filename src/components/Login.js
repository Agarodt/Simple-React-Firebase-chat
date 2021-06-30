  
import React from 'react'
import firebase from 'firebase'
import { auth } from '../firebase.js'

function Login() {
    function signIn() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <div>
            <button onClick={signIn}>Sign In</button>
        </div>
    )
}

export default Login