import { initializeApp, getApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8zIndKz7xOnFNa-eQbDP5eOyqD9pU1lA",
  authDomain: "logingrupito15601-329ec.firebaseapp.com",
  projectId: "logingrupito15601-329ec",
  storageBucket: "logingrupito15601-329ec.appspot.com",
  messagingSenderId: "493048771560",
  appId: "1:493048771560:web:18ef8049bdc965a94a2a5d"
};

// Verificar si la aplicación de Firebase ya está inicializada
let app;
try {
  app = initializeApp(firebaseConfig);
} catch (e) {
  app = getApp();
}

// Obtener el objeto de autenticación
const authInstance = getAuth(app);

// Proveedor de autenticación de Facebook
const facebookProvider = new FacebookAuthProvider();

// Proveedor de autenticación de Google
const googleProvider = new GoogleAuthProvider();

export { authInstance as auth, facebookProvider, googleProvider };
