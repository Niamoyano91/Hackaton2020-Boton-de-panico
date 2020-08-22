import React from 'react';
import '../styles/Levels.css'
import firebase from 'firebase'

const Levels = () => {
    var user = firebase.auth().currentUser;
    user.providerData.forEach(function (profile) {
        const name = profile.displayName;
        const email = profile.email;
        const db = firebase.firestore()
        db.collection('usuarios').add({
            nameUser: name,
            emailUser: email
        })
    });

    return (
        <div className="containerLevels">
            <section>Progress Bar</section>
            <main className="">
                <h1>Nivel 1</h1>
                <h2>¿Qué es la violencia obstétrica?</h2>
                <div>
                    <section className="multimedia">VIDEO
<p className="infoMultimedia">¿Quieres saber más?</p>
                    </section>
                    <section className="questions">
                        <h3>Preguntas</h3>
                        <h4>1.La violencia obstetrica es:</h4>
                        <input type="radio" id="" name="" value="" />
                        <label for="">blablabla</label><br></br><br></br>

                        <button>Enviar Respuestas</button>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default Levels
