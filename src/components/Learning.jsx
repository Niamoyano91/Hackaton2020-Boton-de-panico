import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Learning.css'

const Learning = () => {

    return (
        <div className="containerLevels">
            <h1>Mi Aprendizaje</h1>
            <main className="">
                <section>
                    <p>Avance pendiente</p>
                </section>
                <section>
                    <h2>Nivel 1</h2>
                    <p>¿Qué es la violencia obstétrica?</p>
                    <Link to="/levels">
                        <button>Entrar</button>
                    </Link>
                </section>
            </main>
        </div>
    )
}

export default Learning
