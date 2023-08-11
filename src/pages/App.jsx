import { useState } from "react";
import Profile from "../components/profile/profile";

import "./App.css";

import imgDarkMode from "../img/fotoPerfil.jpg"
import imgLightMode from "../img/fotoPerfilClaro.png"

const App = () => {
const [isLightMode,setIsLightMode] = useState(true)

const imgSrc = isLightMode ? imgLightMode : imgDarkMode
const imgAlt = isLightMode ? "Imagem no Modo Claro" : "Imagem no Modo Escuro"
  return(
    <div>
      <Profile imgSrc={imgSrc} imgAlt={imgAlt}>@Karol-ss</Profile>
    </div>
  )
}

export default App;
