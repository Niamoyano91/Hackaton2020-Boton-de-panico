import React from 'react';
import '../styles/Home.css'
import { auth } from '../firebase'
import { Link } from "react-router-dom";


const Home = (props) => {

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
        <div>
            <h1>Bienvenidos</h1>
            <button>S.O.S</button>
            <h2>¿Donde quieres ingresar?</h2>
            <Link to="/learning">
                <button className="learn">Mi Aprendizaje</button>
            </Link>
            <button>Mi Nivel</button>
            <button>Mi Calendario</button>
            <button>Relajacion</button>
            <button type="submit" className="buttonSignOut" onClick={() => signOut()}>
                Cerrar Sesión
            </button>
        </div>
    );
}

export default Home;