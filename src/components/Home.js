import React from 'react';
import '../styles/Home.css'
import { auth } from '../firebase'


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
            <h1>Perfil</h1>
            <button type="submit" className="buttonSignOut" onClick={ () => signOut()}>
                Cerrar Sesión
            </button>
        </div>
    );
}

export default Home;