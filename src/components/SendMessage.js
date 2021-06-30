  
import React, { useState } from 'react'
import { db, auth } from '../firebase'
import firebase from 'firebase'

function SendMessage() {
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
       
    }
    return (
        <div>
          
                <div>
                    <input placeholder='your message' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                    <button onClick={sendMessage}>Send</button>
                </div>
           
        </div>
    )
}

export default SendMessage