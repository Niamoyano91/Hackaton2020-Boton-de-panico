import React from 'react'
import '../styles/Welcome.css'
import { Link } from "react-router-dom";

const Welcome = () => {

    return (
        <div className="containerWelcome">
            <div className="containerImgLogoWelcome">
                <img src="" className="logoWelcome" alt="Logo" />
            </div>
            <Link to="/login">
                <h5 className="loginWelcome">Iniciar Sesion</h5>
            </Link>
        </div>
    );
}

export default Welcome;
