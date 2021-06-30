
import './App.css';
import ChatComp from './components/ChatComp'
import Login from './components/Login';
import { auth } from './firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'

const styles = {
  app: {
    textAlign: 'center'
  }
}

function App() {
  const [user] = useAuthState(auth)
  return (
    <div style = {styles.app}>
      {user ? <ChatComp /> : <Login />}
      </div>
  );
}

export default App;
