import React from 'react';
import '../styles/PanicButton.css'
const PanicButton = () => {
    return (
        <div className='homeContainer'>
            <h1 className='titulo'>¿Necesitas ayuda urgente?</h1>
            <div className='red-containerDos'>
                <h2 className='subtitulo'>Botón de asistencia</h2>
                <p className='parrafoDos'>Este botón te contactará con tu Asistente de la Fundación OVO. Te acompañará y ayudará en este momento de angustia. </p>
                <button className="button-sosDos">S.O.S</button>
                <h2 className='subtitulo'>Recuerda utilizar este botón sólo en caso de urgencia</h2>
            </div>
        </div >
    );
}

export default PanicButton;