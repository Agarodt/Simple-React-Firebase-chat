import React, {useState, useEffect} from 'react'
import { db } from '../firebase'
import SendMessage from './SendMessage'

const styles = {
    chat: {
        textAlign: 'center'
    }
    
}
 function ChatComp(){
    const [messages, setMessages] = useState([])
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    return(
        <div style = {styles.chat}>
    <h1>Hello! This is chat</h1>
    <SendMessage/>
<div>{messages.map(({ id, text}) => (
                    <div>
                        <div key={id} >
                           
                            <h5>{text}</h5>
                        </div>
                    </div>
                    
                ))}
            </div></div>
   
   
    )
}

export default ChatComp