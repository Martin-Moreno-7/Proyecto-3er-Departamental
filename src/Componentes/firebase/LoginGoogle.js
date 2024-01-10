import React, { useState } from "react";//Uso hook useState
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {//Credenciales para cargar las librerias firebase
  apiKey: "AIzaSyBCuNus9_pPAQD7tsrY7o8-r_RSgyFPG_g",
  authDomain: "login-30580.firebaseapp.com",
  projectId: "login-30580",
  storageBucket: "login-30580.appspot.com",
  messagingSenderId: "715551419384",
  appId: "1:715551419384:web:20bb17940d4ef33986c40d",
};

const auth = firebase.auth();//Inizializacion de fire base 
const google = new firebase.auth.GoogleAuthProvider();

const LoginGoogle = () => {
  const [user, setUser] = useState(null);
  const [photo, setPhoto] = useState(null);//Estados para la interfaz de logeo con google
  const [displayname, setDisplayname] = useState(null);

  const loginGoogle = () => {
    auth
      .signInWithPopup(google)
      .then((respuesta) => {//Capturamos la respuesta del usuario
        console.log(respuesta.user);
        setUser(respuesta.user);//Almacenamos su nombre de usuario
        setPhoto(respuesta.user.photoURL);//Almacenamos la foto del usuario
        setDisplayname(respuesta.user.displayName);
      })
      .catch((err) => {//Captura de error
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Autenticacion con Google</h1>
      <button onClick={loginGoogle}>Login con GOOGLE</button>
      <br />

      {photo ? (
        <div>
          <img height="150" src={photo} alt="photo usuario" />
          <p>{displayname}</p>
        </div>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default LoginGoogle;
