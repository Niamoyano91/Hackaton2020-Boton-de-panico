import React from 'react';
import './App.css';
import Login from './components/Login'
import SignIn from './components/SignIn'
import Home from './components/Home'
import Nivel from './components/Nivel'
import PanicButton from './components/PanicButton'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <li>
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
        </li>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signin" component={SignIn} />
          <Route path="/home" component={Home} />
          <Route path="/nivel" component={Nivel} />
          <Route path="/sos" component={PanicButton} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
