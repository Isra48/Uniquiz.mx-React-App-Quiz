import React from 'react'
import log from '../../Images/log.svg'
import register from '../../Images/register.svg'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 
import { faGoogle } from '@fortawesome/free-brands-svg-icons' 
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import firebase from "firebase/app";
import "firebase/auth";
 
library.add(faFacebookF); 
library.add(faGoogle); 
library.add(faLock);
library.add(faUser);

const firebaseConfig = {
    apiKey: "AIzaSyAnxwk-ryq1GCdz8f5SKmkiuDg0vrKnHQw",
    authDomain: "quizapp-39c91.firebaseapp.com",
    databaseURL: "https://quizapp-39c91.firebaseio.com",
    projectId: "quizapp-39c91",
    storageBucket: "quizapp-39c91.appspot.com",
    messagingSenderId: "199863734003",
    appId: "1:199863734003:web:a385f0c943587ea480f186",
    measurementId: "G-4HFTJQD8ZR"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }



class Login extends React.Component{
    state = {
        containerClass: "container-fluid",
        email: "",
        password: "",
    }
    switchForm = e =>{
        this.setState({containerClass:"container-fluid sign-up-mode"})
    }
    switchForm2 = e =>{
        this.setState({containerClass:"container-fluid"})
    }
    registrar = async () => {
        console.log('diste un click a registrar paps')
    
        var email = this.state.email;
        var password = this.state.password;
        this.setState({loading: true});
    
        await firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
                console.log("Registro completo");
                /*setTimeout(() => { 
                    var user = firebase.auth().currentUser;
                    user.updateProfile({
                        displayName: name,
                    }).then(function() {
                        console.log("se cambio el nombre a"+displayName);
                        alert("wey sii");
                    }).catch(function(error) {
                        console.log("Mamo banda");
                        alert("wey nooo");
                    });
                }, 2000);*/
                setTimeout(() => {
                    console.log("aaa");
                }, 2000);
            })
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                alert(errorMessage);
            });
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        })
    }

    render(){
        return <>
        <div className={this.state.containerClass}>
        <div className="forms-container">
            <div className="signin-signup">
                <form action="#" className="sign-in-form">
                    <h2 className="title">Ingresa</h2>
                    <div className="input-field">
                        <FontAwesomeIcon icon={['fas', 'user']} style={{alignSelf: 'center', opacity: '0.4', marginLeft: '1.5em'}}/>
                        <input name="email" type="text" placeholder="E-mail" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <FontAwesomeIcon icon={['fas', 'lock']} style={{alignSelf: 'center', opacity: '0.4', marginLeft: '1.5em'}}/>
                        <input name="password" type="password" placeholder="Password" value={this.state.password}  onChange={this.handleChange}/>
                    </div>

                    <p className="social-text">¡Ingresa con tus redes sociales!</p>
                    <div className="social-media">
                        <a href="#" className="social-icon">
                            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                        </a>
                        <a href="#" className="social-icon-google">
                            <FontAwesomeIcon icon={['fab', 'google']} />
                        </a>

                    </div>

                    <a href="#" className="recuperarpass">Recuperar contraseña</a>

                    <button className="btn-entrar" value="Entrar" onClick={null}>Entrar</button>




                </form>
                <form action="#" className="sign-up-form">
                    <h2 className="title">Registrate</h2>
                    <div className="input-field">
                        <i className="fas fa-user"></i>
                        <input id="name" type="text" placeholder="Nombre" />
                    </div>

                    <div className="input-field">
                        <i className="fas fa-envelope"></i>
                        <input id="emailR" type="email" placeholder="Email" />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input id="passwordR" type="password" placeholder="Password" />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-lock"></i>


                        
                        <input type="password" placeholder="Confirma tu Password" />
                    </div>
                    <button className="btn solid " value="Registrar" onClick={this.registrar}>Registrar</button>

                    <p className="social-text">¡Registrate con tus redes sociales!</p>
                    <div className="social-media">
                        <a href="#" className="social-icon">
                            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                        </a>

                        <a href="#" className="social-icon-google">
                            <FontAwesomeIcon icon={['fab', 'google']} />
                        </a>


                    </div>
                    <a href="#" className="privacy-polytics">Aviso de privacidad</a>
                </form>
            </div>
        </div>

        <div className="panels-container">
            <div className="panel left-panel">
                <div className="content">
                    <h1  className="h1-login">UNIQUIZ</h1>
                    <h3  className="h3-login">¿Nuevo aqui?</h3>
                    <p>
                        ¡Prepárate con nuestro banco de preguntas!🚀✨ </p>
                    <button className="btn-entrar transparent" onClick={this.switchForm}>
                        Registrate
                    </button>
                </div>
                <img src={log} className="image" alt="" />
            </div>
            <div className="panel right-panel">
                <div className="content">
                    <h1>UNIQUIZ</h1>
                    <h3>¡Sin miedo al exito papi!</h3>
                    <p>
                        Hoy es un buen día para ingresar a la uni
                    </p>
                    <button className="btn-entrar transparent" id="sign-in-btn" onClick={this.switchForm2}>
              Ingresar
            </button>
                </div>
                <img src={register} className="image" alt="" />
            </div>
        </div>
    </div>
    </>
    }
}

export default Login