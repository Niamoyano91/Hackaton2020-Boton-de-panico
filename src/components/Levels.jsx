import React, { useContext, useEffect } from 'react'
import '../styles/Levels.css'
import firebase from 'firebase'
import { UserContext } from '../Context/UserContext.js'

const Levels = () => {
    let { setCheck } = useContext(UserContext)

    const [questions, setQuestions] = React.useState([])


    console.log(questions)

    useEffect(() => {
        //<----------------Questions----------------------------->
        const getQuestions = async () => {
            try {
                const db = firebase.firestore()
                const data = await db.collection('preguntas').get()
                const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                setQuestions(arrayData)
                console.log(arrayData)
            } catch (error) {
                console.log(error)
            }
        }
        getQuestions()
    }, [])

    const user = firebase.auth().currentUser;
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
            <h1>Nivel 1</h1>
            <section className="multimedia">VIDEO
<p className="infoMultimedia">¿Quieres saber más?</p>
            </section>
            {
                questions.map((item, index) => (
                    <main className="">
                        <h2>{item.pregunta}</h2>
                        <div>

                            <section className="questions">
                                <h3>Preguntas</h3>
                                <h4>{item.A}</h4>
                                <input type="radio" id="" name="" value="" />
                                <label key={index} for="">{item.res1}</label><br></br>
                                <input type="radio" id="" name="" value="" />
                                <label key={index} for="">{item.res2}</label><br></br>
                                <input type="radio" id="" name="" value="" />
                                <label key={index} for="">{item.res3}</label><br></br>
                                <input type="radio" id="" name="" value="" />
                                <label key={index} for="">{item.res4}</label><br></br>
                            </section>
                        </div>
                    </main>))
            }
            <button>Enviar Respuestas</button>
            <input type="checkbox" className="add-item__input"
                onChange={e => setCheck(e.target.value)} value="check"
            />
        </div>


    )
}


export default Levels
