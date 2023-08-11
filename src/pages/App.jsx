import { useState } from "react";
import Profile from "../components/profile/profile";

import "./App.css";

import imgDarkMode from "../img/fotoPerfil.jpg"
import imgLightMode from "../img/fotoPerfilClaro.png"
import Switch from "../components/switch/switch";

const App = () => {
const [isLightMode,setIsLightMode] = useState(false)

const imgSrc = isLightMode ? imgLightMode : imgDarkMode
const imgAlt = isLightMode ? "Imagem no Modo Claro" : "Imagem no Modo Escuro"
  return(
    <div id="container">
      <Profile imgSrc={imgSrc} imgAlt={imgAlt}>@Karol-ss</Profile>
      <Switch></Switch>
    </div>
  )
}

export default App;
