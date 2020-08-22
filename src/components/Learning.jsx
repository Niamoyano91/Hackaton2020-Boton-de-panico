import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Learning.css'

const Learning = () => {

    return (
        <div className="containerLearning">
            <div className="containerArrowTittle">
                <img className="arrow" src="https://i.ibb.co/Z1jNqRn/Flecha1.png" alt="Flecha" />
                <h1 className='titulo'>Mi Aprendizaje</h1>
                <img className="arrow" src="https://i.ibb.co/8Nw5d9j/Flecha2.png" alt="Flecha" />
            </div>
            <main >
                <section >
                    <p>Avance pendiente</p>
                    <h1 className='tituloPrincipal'>¡Edúcate y empopderate!</h1>
                </section>
                <section className="level-lila">
                    <h2 className='titulo2'>Nivel 1</h2>
                    <p className='titulo3'>¿Qué es la violencia obstétrica?</p>
                    <Link to="/levels">
                        <button className="levelButton">Entrar a Nivel 1</button>
                    </Link>
                </section>
            </main>
        </div>
    )
}

export default Learning
