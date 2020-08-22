import React from 'react'
import '../styles/Welcome.css'
import { Link } from "react-router-dom";
import Grupo from '../assets/Group.png'

const Welcome = () => {

    return (
        <div className="containerWelcome">
            <h1 className='titleName'>Sis</h1>
            <div className="containerImgLogoWelcome">
                <img src={Grupo} className="logoWelcome" alt="Logo" />
            </div>
            <h1 className='tituloPrincipal'>¡Edúcate y empodérate!</h1>
            <div className='containertext'>
                <p className='parrafoPrincipal'>Una iniciativa de</p>
                <h2 className='tituloUno'>OVO CHILE</h2>
                <p className='parrafoPrincipal'>para prevenir la violencia obstétrica</p>
            </div>
            <Link to="/login">
                <h5 className="loginWelcome">Iniciar Sesion</h5>
            </Link>
        </div>
    );
}

export default Welcome;
