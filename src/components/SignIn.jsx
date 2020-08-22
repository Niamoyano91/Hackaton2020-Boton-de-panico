import React from 'react'
import '../styles/SignIn.css'
import { auth, db } from '../firebase'
import { withRouter } from 'react-router-dom'
import firebase from 'firebase'

const SignIn = (props) => {

    const [name, setName] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(null)

    const processData = e => {
        e.preventDefault()
        if (!name.trim()) {
            setError('* Ingresa Nombre y apellido')
            return
        }
        if (!email.trim()) {
            setError('* Ingrese email')
            return
        }
        if (!pass.trim()) {
            setError('* Ingrese contraseña')
            return
        }
        if (pass.length < 6) {
            setError('* Debe ser mayor a 6 carácteres')
            return
        }

        console.log('Pasando todas las validaciones')
        setError(null)
        register()
    }

    const register = React.useCallback(async () => {
        try {
            const res = await auth.createUserWithEmailAndPassword(email, pass)
            await res.user.updateProfile({
                displayName: name,
            })
            await db.collection('usuarios').doc(res.user.uid).set({
                email: res.user.email,
                uid: res.user.uid,
            })
            setName('')
            setEmail('')
            setPass('')
            setError(null)
            props.history.push('/home')
        } catch (error) {
            console.log(error)
            if (error.code === 'auth/invalid-email') {
                setError('* El email ingresado no es válido')
            }
            if (error.code === 'auth/email-already-in-use') {
                setError('* El email ya ha sido utilizado')
            }
        }
    }, [email, pass, name, props])

    const loginWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) => {
            const user = result.user;
            console.log('user', user);
        }).catch(function (error) {
        });
    }
    const loginWithFacebook = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) => {
        }).catch(function (error) {
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
        <div className="containerSignIn">
            <form onSubmit={processData} className="containerFormSignIn">
                <div className="containerTittleSignIn">
                    <h2 className="SignIn">Regístrate</h2>
                </div>

                <div className="containerDataSignIn">
                    <input type="text" className="nameInput" onChange={(e) => setName(e.target.value)} value={name} placeholder="Nombre Apellido"></input>
                    <input type="text" className="phoneInput" onChange={(e) => setPhone(e.target.value)} value={phone} placeholder="Teléfono móvil"></input>
                    <input type="text" className="emailInput" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="jane@example.com"></input>
                    <input type="password" className="passwordInput" onChange={(e) => setPass(e.target.value)} value={pass} placeholder="******"></input>
                    {error && (<div className="error">{error}</div>)}
                </div>

                <div className="containertextSignIn">
                    <p>También puedes registrarte con:</p>
                </div>

                <div className="containerBtnSocialSignIn">
                    <button type="submit" className="google" onClick={() => loginWithGoogle()}>
                        <img src="" className="google" alt="google" />
                    </button>
                    <button type="submit" className="facebook" onClick={() => loginWithFacebook()}>
                        <img src="" className="facebook" alt="facebook" />
                    </button>
                </div>

                <div className="containerRegisterSignIn">
                    <button type="submit" className="createSignIn">Crear Cuenta</button>
                </div>

            </form>
        </div>

    )
}

export default withRouter(SignIn)