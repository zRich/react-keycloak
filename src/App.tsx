import './App.css'
import useKeyCloakAuth from './hooks/userAuth'
import Protected from './components/Protected'
import Public from './components/Public'

function App() {
  const [isLogin, token] = useKeyCloakAuth();

  return isLogin? <Protected token={token? token.toString(): ''} /> : <Public />;
}

export default App
