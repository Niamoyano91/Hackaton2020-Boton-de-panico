import React from 'react'
import '../styles/Welcome.css'
import { Link } from "react-router-dom";
import Grupo from '../assets/group.png'

const Welcome = () => {

    return (
        <div className="containerWelcome">
            <h1 className='titleName'>Sis</h1>
            <p className="subtittleWelcome">Una hermana te acompaña</p>
            <div className="containerImgLogoWelcome">
                <img src={Grupo} className="logoWelcome" alt="Logo" />
            </div>
            <div className='containertext'>
                <p className='parrafoPrincipal'>Una iniciativa</p>
                <p className='parrafoPrincipal'>para prevenir la violencia obstétrica</p>
            </div>
            <Link to="/login">
                <h5 className="loginWelcome">Iniciar Sesion</h5>
            </Link>
        </div>
    );
}

export default Welcome;
