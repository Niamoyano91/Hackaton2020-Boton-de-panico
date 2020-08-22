import React from 'react'
import '../styles/NavBar.css'
import { Link } from "react-router-dom";
import { auth } from '../firebase'

const NavBar = (props) => {

    const signOut = () => {
        auth.signOut()
        .then(() => {
        console.log('Saliendo...');
        props.history.push('/')
        })
        .catch((error) => {
        console.log(error);
        });
    };

    return (
        <div className="containerNavBar">
            <button className="btnNavBar">
                <Link to="/home">
                    <img className="imgNavBar" src="https://i.ibb.co/0sTyPR7/Group-124dd.png" alt="inicio"/>
                </Link>
            </button>
            <button className="btnNavBar">
                <img className="imgNavBar" src="https://i.ibb.co/tJL08Hr/Group-130.png" alt="miPerfil"/>
            </button>
            <button className="btnNavBar">
                <img className="imgNavBar" src="https://i.ibb.co/K2QjWwF/Group-130-DD.png" alt="miSis"/>
            </button>
            <button className="btnNavBar" type="submit" onClick={ () => signOut()}>
                <Link to="/">
                    <img className="imgNavBar" src="https://i.ibb.co/M28Jyvb/Group-130-I.png" alt="cerrarSesión"/>
                </Link>
            </button>
        </div>
    )
}

export default NavBar
