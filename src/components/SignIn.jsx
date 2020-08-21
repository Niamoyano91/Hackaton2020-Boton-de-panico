import React from 'react'
import { auth, db } from '../firebase'
import { withRouter } from 'react-router-dom'

const SignIn = (props) => {

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(null)
    
    const processData = e => {
        e.preventDefault()
        if(!name.trim()){
            setError('* Ingresa Nombre y apellido')
            return
        }
        if(!email.trim()){
            setError('* Ingrese email')
            return
        }
        if(!pass.trim()){
            setError('* Ingrese contraseña')
            return
        }
        if(pass.length < 6){
            setError('* Debe ser mayor a 6 carácteres')
            return
        }
    
        console.log('Pasando todas las validaciones')
        setError(null)
        register()
    }

    const register = React.useCallback(async() => {
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
        }catch (error) {
            console.log(error)
            if(error.code === 'auth/invalid-email'){
                setError('* El email ingresado no es válido')
            }
            if (error.code === 'auth/email-already-in-use'){
                setError('* El email ya ha sido utilizado')
            }
        }
    }, [email, pass, name, props])

    return (
        <form onSubmit={processData} className="containerLogIn">
            <h2 className="logIn">Regístrate</h2>
            <label htmlFor="name" className="name">Nombre y Apellido</label>
            <input type="text" className="nameInput" onChange = { (e) => setName(e.target.value)} value={name} placeholder="Jane Pérez"></input>
            <label htmlFor="email" className="email">Correo electrónico</label>
            <input type="text" className="emailInput" onChange = { (e) => setEmail(e.target.value)} value={email} placeholder="jane@example.com"></input>
            <label htmlFor="pasword" className="password">Contraseña</label>
            <input type="password" className="passwordInput" onChange = { (e) => setPass(e.target.value)} value={pass} placeholder="******"></input>
            { error && (<div className="error">{error}</div>)}
            <button type="submit" className="createSignIn">Crear Cuenta</button>
        </form>
    )
}

export default withRouter(SignIn)