import React, { useContext } from 'react'
import '../styles/Home.css'
import { Link } from "react-router-dom";
import { UserContext } from '../Context/UserContext.js'

const Home = () => {
    let {  checkk } = useContext(UserContext)
    console.log(checkk)

    const lala = () => {
        if(checkk === "check"){
            return (
                <button className="button-sos" to="/sos">
                    <Link to="/sos">
                        <img className="imgbutton" src="https://i.ibb.co/yF17pdw/Group-123.png" alt=""/>
                    </Link>
                </button>   
            )
        }
    }

    return (
        <div className="homeContainer">
            <div className="containerArrowTittle">
                <img className="arrow" src="https://i.ibb.co/Z1jNqRn/Flecha1.png" alt="Flecha"/>
                <h1 className='titulo'>Bienvenida</h1>
                <img className="arrow" src="https://i.ibb.co/8Nw5d9j/Flecha2.png" alt="Flecha"/>
            </div>

            <div>
                <div className='red-container'>
                    <p className='parrafo'>¿Necesitas ayuda urgente?</p>
                    <p className='parrafo2'>Pide ayuda directa</p>
                    <div className="containerImgbutton">
                        <img className="imgbutton" src="https://i.ibb.co/5K5Fzhg/Group-1234.png" alt="button"/>
                        <a href="">Ver más información...</a>
                        {
                            lala()
                        }

                    </div>

                </div>

                    
                    
                <div className="purple-container">
                    <h2 className='titulo2'>¿A qué quieres acceder hoy?</h2>

                    <div className="containerbuttons">
                        <Link to="/learning">
                            <button className="iconos">
                                <img className="imgIconos" src="https://i.ibb.co/fNQbdFW/Group-124.png" alt="miAprendizaje"/>
                            </button>
                        </Link>
                        <button className="iconos">
                            <img className="imgIconos" src="https://i.ibb.co/Y7gf4mj/Group-125.png" alt="miProgreso"/>
                        </button>
                        <button className="iconos">
                            <img className="imgIconos" src="https://i.ibb.co/dPR5kWy/Group-126.png" alt="miBitácora"/>
                        </button>
                        <button className="iconos">
                            <img className="imgIconos" src="https://i.ibb.co/HqCw2mB/Group-127.png" alt="miCalendario"/>
                        </button>
                        <button className="iconos">
                            <img className="imgIconos" src="https://i.ibb.co/D4yH2w8/Group-128.png" alt="contenidos"/>
                        </button>
                        <button className="iconos">
                            <img className="imgIconos" src="https://i.ibb.co/g7RcGG8/Group-129.png" alt="relajaciónybienestar"/>
                        </button>
                    
                    </div>
                    
                </div> 
            </div>
        </div>
    );
    
}

export default Home

// import React, { Component } from 'react';
// import '../styles/Home.css'
// //import { auth } from '../firebase'
// import { Link } from "react-router-dom";

// class Home extends Component {

//     constructor() {
//         super();
//         this.state = { value: '' };
//         this.onChange = this.onChange.bind(this);
//         this.add = this.add.bind(this);
//     }

//     add() {
//         this.props.onButtonClick(this.state.value);
//         this.setState({ value: true });
//     }

//     onChange(e) {
//         this.setState({ value: true });
//     }

//     render() {
//         return (
//             <div className="homeContainer">
//                 <h1 className='titulo'>Bienvenidos</h1>
//                 <div className='red-container'>
//                     <p className='parrafo'>¿Necesitas ayuda urgente?
//                     Pide ayuda directa
//                 </p>
//                     <input
//                         type="checkbox"
//                         className="add-item__input"
//                         value={this.state.value}
//                         onChange={this.onChange}
//                         placeholder={this.props.placeholder}
//                     />
//                     <button
//                         disabled={!this.state.value}
//                         className="button-sos"
//                         onClick={this.add}
//                     >
//                         S.O.S
//             </button>
//                 </div>
//                 <h2 className='titulo'>¿A qué quieres acceder hoy?</h2>
//                 <div>
//                     <Link to="/learning">
//                         <button className="iconos">Mi aprendizaje</button>
//                     </Link>
//                     <button className="iconos">Mi progreso</button>
//                     <button className="iconos">Mi Bitácora</button>
//                     <button className="iconos">Mi calendario</button>
//                     <button className="iconos">Contenidos</button>
//                     <button className="iconos">Relajación</button>
//                 </div>

//             </div>
//         );
//     }

// }

// export default Home;
