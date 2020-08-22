import React, { Component } from 'react';
import '../styles/Home.css'
//import { auth } from '../firebase'
import { Link } from "react-router-dom";


class Home extends Component {

    constructor() {
        super();
        this.state = { value: '' };
        this.onChange = this.onChange.bind(this);
        this.add = this.add.bind(this);
    }

    add() {
        this.props.onButtonClick(this.state.value);
        this.setState({ value: true });
    }

    onChange(e) {
        this.setState({ value: true });
    }

    render() {
        return (
            <div className="homeContainer">
                <h1 className='titulo'>Bienvenidos</h1>
                <div className='red-container'>
                    <p className='parrafo'>¿Necesitas ayuda urgente?
                    Pide ayuda directa
                </p>
                    <input
                        type="checkbox"
                        className="add-item__input"
                        value={this.state.value}
                        onChange={this.onChange}
                        placeholder={this.props.placeholder}
                    />
                    <button
                        disabled={!this.state.value}
                        className="button-sos"
                        onClick={this.add}
                    >
                        S.O.S
            </button>
                </div>
                <h2 className='titulo'>¿A qué quieres acceder hoy?</h2>
                <div>
                    <Link to="/learning">
                        <button className="iconos">Mi aprendizaje</button>
                    </Link>
                    <button className="iconos">Mi progreso</button>
                    <button className="iconos">Mi Bitácora</button>
                    <button className="iconos">Mi calendario</button>
                    <button className="iconos">Contenidos</button>
                    <button className="iconos">Relajación</button>
                </div>


            </div>
        );
    }


}

export default Home;