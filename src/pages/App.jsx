import { useState } from "react";
import Profile from "../components/profile/profile";
import Switch from "../components/switch/switch";
import Links from "../components/links/links";
import SocialLinks from "../components/socialLinks/socialLinks";
import Footer from "../components/footer/footer";

import "./App.css";

import imgDarkMode from "../img/fotoPerfil.jpg";
import imgLightMode from "../img/fotoPerfilClaro.png";

const App = () => {
const [isLightMode,setIsLightMode] = useState(false)
const toggleMode = () => {
  setIsLightMode((prevMode) => !prevMode)
}

const imgSrc = isLightMode ? imgLightMode : imgDarkMode;
const imgAlt = isLightMode ? "Imagem no Modo Claro" : "Imagem no Modo Escuro";
  return(
    <div id="App" className={isLightMode ? "light" : ""}>
    <div id="container">
      <Profile imgSrc={imgSrc} imgAlt={imgAlt}>@Karol-ss</Profile>
      <Switch mode={toggleMode} infoButton = {isLightMode}/>
      <div id="links">
      <ul>
        <Links link={"https://github.com"}>GitHub</Links>
        <Links link={"#"}>Instagram</Links>
        <Links link={"#"}>Portifólios</Links>
        <Links link={"#"}>Projetos</Links>
      </ul>
      </div>
      <div id="socialLinks"> 
        <SocialLinks href={"#"} icon={"logo-github"} />   
        <SocialLinks href={"#"} icon={"logo-Instagram"} /> 
        <SocialLinks href={"#"} icon={"logo-TikTok"} /> 
        <SocialLinks href={"#"} icon={"logo-Twitter"} />   
      </div>
      <Footer link={"#"}>@Karol-ss</Footer>
    </div>
    </div>
  )
}

export default App;
