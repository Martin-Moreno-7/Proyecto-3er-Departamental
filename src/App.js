import React, { useState } from "react";
import AgeConverter from "./Componentes/AgeConverter";
import DatePicker from "./Componentes/DatePicker";
import Formulario from "./Componentes/Formulario";
import ContadorDeClicks from "./Componentes/contador";
import "./index.css";
/*import DinosaurGame from "./Componentes/DinosaurGame";*/
import PokemonSearch from "./Componentes/PokemonSearch";
import Login from "./Componentes/firebase/Login";
import RickandMortySearch from "./Componentes/RickandMortySearch";
import LoginGoogle from "./Componentes/firebase/LoginGoogle";
import RedSocial from "./Componentes/firebase/RedSocial";

function App() {
  const [showDate, setShowDate] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showClic, setShowClic] = useState(false);
  const [ShowAge, setShowAge] = useState(false);
  const [ShowPoke, setShowPoke] = useState(false);
  const [ShowRick, setShowRick] = useState(false);
  const [ShowLogin, setShowLogin] = useState(false);
  const [ShowRed, setShowRed] = useState(false);
  const [isLoginModuleEnabled, setLoginModuleEnabled] = useState(false);

  const toggleLoginModule = () => {
    setLoginModuleEnabled(!isLoginModuleEnabled);
  };

  return (
    <div>
      <center>
        <h1 className="villa">MI PRIMER REACT</h1>
        <br></br>
        <h1 className="vill">ACTIVIDADES DEL SEGUNDO DEPARTAMENTAL </h1>
      </center>

      <div className='"button_top"> Button'>
        <center>
          <button onClick={() => setShowDate(!showDate)}>
            {showDate ? "Ocultar Fecha" : "Mostrar Fecha"}
          </button>

          <button onClick={() => setShowForm(!showForm)}>
            {showForm ? "Ocultar Formulario" : "Mostrar Formulario"}
          </button>

          <button onClick={() => setShowClic(!showClic)}>
            {showClic ? "Ocultar Contador" : "Mostrar Contador de Clics"}
          </button>

          <button onClick={() => setShowAge(!ShowAge)}>
            {ShowAge ? "Ocultar Edad" : "Mostrar Edad Perro"}
          </button>
        </center>

        {showClic && <ContadorDeClicks />}
        {showDate && <DatePicker />}
        {showForm && <Formulario />}
        {ShowAge && <AgeConverter />}

        <h1>
          <center className="vill">ACTIVIDADES DEL TERCER DEPARTAMENTAL</center>
        </h1>
        <center>
          <button onClick={() => setShowPoke(!ShowPoke)}>
            {ShowPoke ? "Ocultar Busqueda Pokemon" : "Mostrar Busqueda Pokemon"}
          </button>
          {ShowPoke && <PokemonSearch />}

          <button onClick={() => setShowRick(!ShowRick)}>
            {ShowRick ? "Ocultar Busqueda Rick" : "Mostrar Busqueda Rick"}
          </button>
          {ShowRick && <RickandMortySearch />}
        </center>
      </div>
      <center>
        <button onClick={toggleLoginModule}>
          {isLoginModuleEnabled
            ? "Ocultar de Inicio de Sesion con correo"
            : "Mostrar  Inicio de Sesion con correo"}
        </button>
        {isLoginModuleEnabled && <Login />}

        <button onClick={() => setShowLogin(!ShowLogin)}>
          {ShowLogin ? "Ocultar Login con Google" : "Mostrar Login con Google"}
        </button>
        {ShowLogin && <LoginGoogle />}

        <h1 className="vill">
          <center>
            PROYECTO 3ER PARCIAL, AUTENTICACION CON UNA RED SOCIAL
          </center>
        </h1>
        <button onClick={() => setShowRed(!ShowRed)}>
          {ShowRed
            ? "Ocultar Sistema inicio de sesion"
            : "Mostrar Sistema inicio de sesion"}
        </button>
        {ShowRed && <RedSocial />}
      </center>
    </div>
  );
}

export default App;
