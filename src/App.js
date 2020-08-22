//<---------Librerias-------->
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
}
  from "react-router-dom";
import { auth } from './firebase'
//<---------CSS-------------->
import './App.css';
//<---------Components------->
import Login from './components/Login'
import SignIn from './components/SignIn'
import Home from './components/Home'
import PanicButton from './components/PanicButton'
import Welcome from './components/Welcome'
import Learning from './components/Learning'
import Levels from './components/Levels'
import NavBar from './components/NavBar';

import { UserProvider } from './Context/UserContext'

const App = () => {

  const [firebaseUser, setFirebaseUser] = React.useState(false)

  React.useEffect(() => {
    auth.onAuthStateChanged(user => {
      console.log(user)
      if (user) {
        setFirebaseUser(user)
      } else {
        setFirebaseUser(null)
      }
    })
  }, [])

  return firebaseUser !== false ? (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Welcome />
        </Route>

        <Route path="/login" exact>
          <Login />
        </Route>

        <Route path="/signin">
          <SignIn />
        </Route>

        <Route path="/learning">
          <Learning />
          <NavBar />
        </Route>

        <Route path="/sos" exact>
          <PanicButton />
          <NavBar />
        </Route>

        <UserProvider>
          <Route path="/home">
            <Home />
            <NavBar />
          </Route>

          <Route path="/levels">
            <Levels />
            <NavBar />
          </Route>
        </UserProvider>
      </Switch>
    </Router>

  ) : (
      <p>Cargando...</p>
    )
}

export default App;
