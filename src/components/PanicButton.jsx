import React from 'react';
import '../styles/PanicButton.css'

const PanicButton = () => {
    return (
        <div className='homeContainer'>
            <div className="containerArrowTittle">
                <img className="arrow" src="https://i.ibb.co/Z1jNqRn/Flecha1.png" alt="Flecha"/>
                <h1 className='tituloPanicButton'>¿Necesitas ayuda urgente?</h1>
                <img className="arrow" src="https://i.ibb.co/8Nw5d9j/Flecha2.png" alt="Flecha"/>
            </div>
            <div className='red-containerDos'>
                <h2 className='subtitulo1'>Botón de asistencia</h2>
                <p className='parrafoDos'>Este botón te contactará con tu Asistente de la Fundación OVO. Te acompañará y ayudará en este momento de angustia. </p>
                <button className="button-sosDos">S.O.S</button>
                <h2 className='subtitulo'>Recuerda utilizar este botón sólo en caso de urgencia</h2>
                <a className="linkPanicButton" href="">Ver más información...</a>
            </div>
        </div >
    );
}

export default PanicButton;