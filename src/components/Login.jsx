import React from 'react'
import '../styles/Login.css'
import { auth } from '../firebase';
import { withRouter } from 'react-router-dom'
import { Link } from "react-router-dom";
import firebase from 'firebase'

const Login = (props) => {

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(null)

    const processData = e => {
        e.preventDefault()
        if(!email.trim()){
            setError('* Ingrese email')
            return
        }
        if(!pass.trim()){
            setError('* Ingrese contraseña')
            return
        }
        if(pass.length < 6){
            setError('* Contraseña incorrecta')
            return
        }
        console.log('Pasando todas las validaciones')
        setError(null)
        userLogin()  
    }

    const userLogin = React.useCallback(async() => {
        try {
            const res = await auth.signInWithEmailAndPassword(email, pass)
            console.log(res.user)
            setEmail('')
            setPass('')
            setError(null)
        } catch (error) {
            console.log(error)
                if(error.code === 'auth/invalid-email'){
                    setError('* Email no válido')
                }
                if (error.code === 'auth/user-not-found'){
                    setError('* Email no registrado')
                }
                if (error.code === 'auth/wrong-password'){
                    setError('* Contraseña incorrecta')
                }
        }
    }, [email, pass])

    const loginWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) => {
            const user = result.user;
            console.log('user', user);
        }).catch(function(error) {
        });
    }
    const loginWithFacebook = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) => {
            
        }).catch(function(error) {
        });
    }

    const observer = () => {
        auth.onAuthStateChanged((user) => {
        if (user) {
            console.log('existe usuario activo');
            props.history.push('/home')
            console.log('*******************');
            console.log(user.emailVerified);
            console.log('*******************');
        } else {
        //    User is signed out.
            console.log('no existe usuario activo');
        }
        });
    }
    observer()

    return (
        <div >
            <form onSubmit={processData} className="containerLogIn">
                <h2 className="logIn">Iniciar Sesión</h2>
                <label htmlFor="email" className="email">Correo electrónico</label>
                <input type="text" className="emailInput" onChange = { (e) => setEmail(e.target.value)} value={email} placeholder="jane@example.com"></input>
                <label htmlFor="pasword" className="password">Contraseña</label>
                <input type="password" className="passwordInput" onChange = { (e) => setPass(e.target.value)} value={pass} placeholder="******"></input>
                { error && (<div className="error">{error}</div>)}
                <button type="submit" className="google" onClick={ () => loginWithGoogle()}>
                    <img src="" className="google" alt="google" />
                </button>
                <button type="submit" className="facebook" onClick={ () => loginWithFacebook()}>
                    <img src="" className="facebook" alt="facebook" />
                </button>

                <button type="submit" className="buttonLogIn">
                    Iniciar Sesión
                </button>
                <label className="notLogin">
                    ¿No tienes cuenta?
                </label>
                <Link to="/signin" className="registerHere">
                    Regístrate aquí
                </Link>
            </form>

        </div>
        
    )
}

export default withRouter(Login)
