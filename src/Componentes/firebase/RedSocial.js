// Importamos las funciones y objetos necesarios de Firebase
import React, { useState, useEffect } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword, 
  signOut, // Agregamos la importación de signOut
} from "firebase/auth";

// Importamos la configuración de Firebase (asegúrate de haber configurado Firebase correctamente)
import "./FirebaseConfig";

// Obtenemos la instancia de autenticación de Firebase
const auth = getAuth();

// Creamos instancias de proveedores de autenticación para Google y Facebook
const facebookProvider = new FacebookAuthProvider();
const googleProvider = new GoogleAuthProvider();

// Definimos el componente principal
const RedSocial = () => {
  // Estados para manejar el usuario, errores, email y contraseña
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Efecto para suscribirse a cambios en la autenticación
  useEffect(() => {
    // onAuthStateChanged es un observador que se ejecuta cuando cambia el estado de autenticación
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Actualizamos el estado del usuario
    });

    // Devolvemos una función de limpieza para cancelar la suscripción cuando el componente se desmonta
    return () => unsubscribe();
  }, []); // El segundo argumento es un array vacío, lo que significa que se ejecutará solo una vez al montar el componente

  // Función para manejar el inicio de sesión con Google
  const handleGoogleLogin = async () => {
    try {
      // signInWithPopup abre una ventana emergente para autenticación con Google
      await signInWithPopup(auth, googleProvider);
      alert(
        "¡Bienvenido, Has autenticado sesión a la aplicación con tu cuenta de Google!"
      );
      setError(null); // Limpiamos los errores
    } catch (error) {
      // Capturamos y manejamos cualquier error que pueda ocurrir
      console.error("Error al autenticar con Google:", error.message);
      setError(
        "Error al autenticar con Google. Por favor, inténtalo de nuevo."
      );
    }
  };

  // Función para manejar el inicio de sesión con Facebook
  const handleFacebookLogin = async () => {
    try {
      // signInWithPopup abre una ventana emergente para autenticación con Facebook
      await signInWithPopup(auth, facebookProvider);
      alert(
        "!Bienvenido, Has autenticado sesión a la aplicación con tu cuenta de Facebook!"
      );
      setError(null); // Limpiamos los errores
    } catch (error) {
      // Capturamos y manejamos cualquier error que pueda ocurrir
      console.error("Error al autenticar con Facebook:", error.message);
      setError(
        "Error al autenticar con Facebook. Por favor, inténtalo de nuevo."
      );
    }
  };

  // Función para manejar el inicio de sesión con correo y contraseña
  const handleEmailLogin = async () => {
    try {
      // signInWithEmailAndPassword realiza el inicio de sesión con correo y contraseña
      await signInWithEmailAndPassword(auth, email, password);
      alert(
        "!Bienvenido, Has iniciado sesión a la aplicación con tu correo y contraseña!"
      );
      setError(null); // Limpiamos los errores
    } catch (error) {
      // Capturamos y manejamos cualquier error que pueda ocurrir
      console.error(
        "Error al iniciar sesión con correo y contraseña:",
        error.message
      );
      setError(
        "Error al iniciar sesión con correo y contraseña. Por favor, inténtalo de nuevo."
      );
    }
  };

  // Función para manejar el cierre de sesión
  const handleSignOut = async () => {
    try {
      alert("Has cerrado sesión correctamente, esperamos verte pronto.....");
      // signOut cierra la sesión actual
      await signOut(auth);
      setUser(null); // Limpiamos el estado del usuario
      setError(null); // Limpiamos los errores
    } catch (error) {
      // Capturamos y manejamos cualquier error que pueda ocurrir
      console.error("Error al cerrar sesión:", error.message);
      setError("Error al cerrar sesión. Por favor, inténtalo de nuevo.");
    }
  };

  // Renderizamos el componente con la interfaz de usuario y las funciones de manejo
  return (
    <div className="formulario">
      <h2>❃ INICIO DE SESIÓN ❃</h2>

      <br></br>
      {user ? (
        // Si hay un usuario autenticado, mostramos la bienvenida y la foto de perfil
        <div>
          <p>Bienvenido, {user.displayName}!</p>
          {user.photoURL && <img src={user.photoURL} alt="Foto de perfil" />}
          {/* Agregamos un botón para cerrar sesión */}
          <button onClick={handleSignOut}>Cerrar sesión</button>
        </div>
      ) : (
        // Si no hay un usuario autenticado, mostramos los botones de inicio de sesión
        <div className="username">
          {error && <p style={{ color: "red" }}>{error}</p>}
          <h3>Iniciar sesión con correo y contraseña:</h3>
          <br></br>
          <label className="lb">
            Email:
            <input
              placeholder="Ingresa tu correo"
              className="ec"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="message"></div>
          </label>
          <label className="lb">
            Contraseña:
            <input
              placeholder="Ingresa tu contraseña"
              className="ec"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {/* Agregamos botones para iniciar sesión */}
          <button onClick={handleEmailLogin}>Iniciar sesión</button>
          <h3>Ó tambien pudes autenticar con tu cuenta de Google o Facebook</h3>
          <br></br>
          <button className="bt" onClick={handleGoogleLogin}>
            Iniciar sesión con Google
          </button>
          <button onClick={handleFacebookLogin}>
            Iniciar sesión con Facebook
          </button>
        </div>
      )}
    </div>
  );
};

export default RedSocial;
