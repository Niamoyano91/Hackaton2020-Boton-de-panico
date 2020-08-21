import React from 'react'
import '../styles/Welcome.css'
import { Link } from "react-router-dom";

const Welcome = () => {

    return (
        <div>
            <div>
                <img src="" className="Logo" alt="Logo" />
            </div>
            <Link to="/login">
                <h6>Iniciar Sesion</h6>
            </Link>
        </div>

    );
}

export default Welcome;
