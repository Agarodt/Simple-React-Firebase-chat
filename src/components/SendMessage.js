import React, { useState } from 'react'
import firebase from 'firebase'
import {db} from '../firebase'


function SendMessage() {
    const [msg, setMsg] = useState('')

    async function sendMessage(e){
        e.preventDefault()
        
        await db.collection('messages').add({
            text: msg,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
    }
    return(
        <div>
        <input value={msg} onChange={(e) => setMsg(e.target.value)} />
        <button onClick = {sendMessage}>send</button>
        </div>
    )
}

export default SendMessage