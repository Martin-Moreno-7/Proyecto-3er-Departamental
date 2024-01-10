import react, { useState, useEffect } from "react";
import firebase from "firebase/compat/app"; //Update the import stateman
import "firebase/compat/auth"; //update the import stateman

import { initializeApp, intializeApp } from "firebase/app";//Inicializa firebase

const firebaseConfig = {//Credenciales para usar firebase
  apiKey: "AIzaSyA8zIndKz7xOnFNa-eQbDP5eOyqD9pU1lA",
  authDomain: "logingrupito15601-329ec.firebaseapp.com",
  projectId: "logingrupito15601-329ec",
  storageBucket: "logingrupito15601-329ec.appspot.com",
  messagingSenderId: "493048771560",
  appId: "1:493048771560:web:18ef8049bdc965a94a2a5d",
};

//inicializacion de firebase
firebase.initializeApp(firebaseConfig);

const Login = () => {//Levantamiento de Login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    //Inizializar firebase solo una vez al cargar el componente
    if (!firebase.apps.length) {
      initializeApp(firebaseConfig);
    }
  }, []);

  const handleLogin = async () => {
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      alert("Bienvenido");
      console.log("Inicio de sesion exitoso:", response.user);
      //Aqui se puede redirigir al usuario a otra pagina o realizar acciones adicionales despues del inicio de sesion
    } catch (error) {
      alert("Usuario y/o contraseña invalidos");
      console.error("Error durante el inicio  de sesion:", error.message);
      //manejo el error  de inicio de sesion aqui
    }
  };

  return (//Retorno codigo html 
    <div>
      <h2>Login</h2>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
