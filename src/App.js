//<---------Librerias-------->
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route} 
from "react-router-dom";
import { auth } from './firebase'
//<---------CSS-------------->
import './App.css';
//<---------Components------->
import Login from './components/Login'
import SignIn from './components/SignIn'
import Home from './components/Home'
import Nivel from './components/Nivel'
import PanicButton from './components/PanicButton'
import Welcome from './components/Welcome'

const App = () => {

  const [firebaseUser, setFirebaseUser] = React.useState(false)

  React.useEffect(() => {
    auth.onAuthStateChanged(user => {
      console.log(user)
      if(user){
        setFirebaseUser(user)
      }else{
        setFirebaseUser(null)
      }
    })
  }, [])

  return firebaseUser !== false ? (
    <Router>
        {/* <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/signin">Sign in</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/nivel">Nivel</Link>
        </li>
        <li>
          <Link to="/sos">SOS</Link>
        </li> */}
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/login" exact component={Login} />
          <Route path="/signin" component={SignIn} />
          <Route path="/home" component={Home} />
          <Route path="/nivel" component={Nivel} />
          <Route path="/sos" component={PanicButton} />
        </Switch>
    </Router>

  ) : (
    <p>Cargando...</p>
  )
}

export default App;
